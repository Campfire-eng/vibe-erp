"use client";

import { useState } from "react";

export default function ImportButton() {
  const [status, setStatus] = useState<string>("");

  async function runImport() {
    setStatus("Importing...");
    const res = await fetch("/api/import", { method: "POST" });
    const data = await res.json();
    setStatus(`Imported ${data.created?.length ?? 0} bill(s).`);
  }

  return (
    <div className="mt-6">
      <button
        onClick={runImport}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Import fixture CSV
      </button>
      {status && <p className="mt-3 text-sm text-gray-700">{status}</p>}
    </div>
  );
}
