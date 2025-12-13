import React from "react";

export default function Pagination({ page, total, limit, onChange }) {
  const pages = Math.ceil(total / limit) || 1;
  return (
    <div className="flex items-center gap-2 mt-4">
      <button disabled={page <= 1} onClick={() => onChange(page - 1)} className="px-3 py-1 border rounded">Prev</button>
      <div>Page {page} / {pages}</div>
      <button disabled={page >= pages} onClick={() => onChange(page + 1)} className="px-3 py-1 border rounded">Next</button>
    </div>
  );
}
