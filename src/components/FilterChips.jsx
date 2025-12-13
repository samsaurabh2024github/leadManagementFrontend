import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, setPage } from "../features/leads/leadsSlice";

export default function FilterChips() {
  const dispatch = useDispatch();
  const filters = useSelector((s) => s.leads.filters);

  const removeFilter = (key) => {
    const updated = { ...filters, [key]: "" };
    dispatch(setFilters(updated));
    dispatch(setPage(1));
  };

  const chips = Object.entries(filters).filter(
    ([key, val]) => val && val.trim() !== ""
  );

  if (chips.length === 0) return null;

  return (
    <div className="flex gap-2 mt-2 flex-wrap">
      {chips.map(([key, val]) => (
        <span
          key={key}
          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full flex items-center gap-2"
        >
          {key}: {val}
          <button
            className="text-red-500 font-bold"
            onClick={() => removeFilter(key)}
          >
            ×
          </button>
        </span>
      ))}
    </div>
  );
}
