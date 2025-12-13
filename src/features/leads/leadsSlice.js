import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

// fetch list with optional params { page, limit, search, source, status }
export const fetchLeads = createAsyncThunk("leads/fetch", async (params = {}, thunkAPI) => {
  try {
    const res = await api.get("/leads", { params });
    return res.data; // expects { leads, total } OR array; will normalize below
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

export const fetchLeadById = createAsyncThunk("leads/fetchById", async (id, thunkAPI) => {
  try {
    const res = await api.get(`/leads/${id}`);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

export const createLead = createAsyncThunk("leads/create", async (data, thunkAPI) => {
  try {
    const res = await api.post("/leads", data);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

export const updateLead = createAsyncThunk("leads/update", async ({ id, data }, thunkAPI) => {
  try {
    const res = await api.put(`/leads/${id}`, data);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

export const deleteLead = createAsyncThunk("leads/delete", async (id, thunkAPI) => {
  try {
    await api.delete(`/leads/${id}`);
    return id;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

// optional endpoint for stats (if backend has one). If not, frontend can compute from list.
export const fetchLeadStats = createAsyncThunk("leads/stats", async (_, thunkAPI) => {
  try {
    const res = await api.get("/leads/stats"); // implement backend later or ignore
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || err.message);
  }
});

const leadsSlice = createSlice({
  name: "leads",
  initialState: {
    list: [],
    total: 0,
    page: 1,
    limit: 10,
    loading: false,
    current: null,
    error: null,
    filters: { search: "", source: "", status: "" },
    stats: { total: 0, bySource: {} }
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    clearCurrent: (state) => { state.current = null; }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeads.pending, (s) => { s.loading = true; s.error = null; })
      .addCase(fetchLeads.fulfilled, (s, a) => {
        s.loading = false;
        // support backend returning { leads, total } OR array
        if (Array.isArray(a.payload)) {
          s.list = a.payload;
          s.total = a.payload.length;
        } else {
          s.list = a.payload.leads || a.payload.data || [];
          s.total = a.payload.total ?? s.list.length;
        }
      })
      .addCase(fetchLeads.rejected, (s, a) => { s.loading = false; s.error = a.payload; })

      .addCase(fetchLeadById.pending, (s) => { s.loading = true; })
      .addCase(fetchLeadById.fulfilled, (s, a) => { s.loading = false; s.current = a.payload; })
      .addCase(fetchLeadById.rejected, (s, a) => { s.loading = false; s.error = a.payload; })

      .addCase(createLead.pending, (s) => { s.loading = true; })
      .addCase(createLead.fulfilled, (s, a) => {
        s.loading = false;
        s.list.unshift(a.payload);
        s.total += 1;
      })
      .addCase(createLead.rejected, (s, a) => { s.loading = false; s.error = a.payload; })

      .addCase(updateLead.pending, (s) => { s.loading = true; })
      .addCase(updateLead.fulfilled, (s, a) => {
        s.loading = false;
        s.list = s.list.map(l => l._id === a.payload._id ? a.payload : l);
        if (s.current && s.current._id === a.payload._id) s.current = a.payload;
      })
      .addCase(updateLead.rejected, (s, a) => { s.loading = false; s.error = a.payload; })

      .addCase(deleteLead.pending, (s) => { s.loading = true; })
      .addCase(deleteLead.fulfilled, (s, a) => {
        s.loading = false;
        s.list = s.list.filter(l => l._id !== a.payload);
        s.total -= 1;
      })
      .addCase(deleteLead.rejected, (s, a) => { s.loading = false; s.error = a.payload; })

      .addCase(fetchLeadStats.fulfilled, (s, a) => { s.stats = a.payload; })
      .addCase(fetchLeadStats.rejected, () => {});
  }
});

export const { setFilters, setPage, clearCurrent } = leadsSlice.actions;
export default leadsSlice.reducer;
