"use client";

import { daysPastDue } from "@/lib/dates";

export type BillRow = {
  id: string;
  vendorName: string;
  dueDate: string;
  amount: string;
  invoiceNumber: string | null;
  paid: boolean;
};

export default function BillsTable({ bills }: { bills: BillRow[] }) {
  return (
    <>
    <p className="mt-2 text-sm text-gray-500">
      Last refreshed: {new Date().toISOString()}
    </p>
    <table className="mt-2 w-full">
      <thead>
        <tr className="border-b bg-gray-50">
          <th className="p-2 text-left">Vendor</th>
          <th className="p-2 text-left">Invoice #</th>
          <th className="p-2 text-left">Due Date</th>
          <th className="p-2 text-left">Days Past Due</th>
          <th className="p-2 text-right">Amount</th>
          <th className="p-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {bills.map((b) => (
          <tr key={b.id} className="border-b">
            <td className="p-2">{b.vendorName}</td>
            <td className="p-2">{b.invoiceNumber ?? "—"}</td>
            <td className="p-2">
              {new Date(b.dueDate).toLocaleDateString()}
            </td>
            <td className="p-2">
              {b.paid ? "—" : daysPastDue(new Date(b.dueDate))}
            </td>
            <td className="p-2 text-right">${b.amount}</td>
            <td className="p-2">{b.paid ? "Paid" : "Unpaid"}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}
