/**
 * Parse a bill CSV row into the shape we store.
 *
 * Column layout per the customer's PDF spec
 * (see docs/bill_format_spec.pdf.txt):
 *   col 1: Vendor Name
 *   col 2: Amount (USD)
 *   col 3: Due Date
 *   col 4: Invoice Number
 *   col 5+: shipping address, tax id, payment method — not used by us
 */

export type ParsedBill = {
  vendorName: string;
  amount: string; // keep as string to preserve Decimal precision downstream
  dueDate: Date;
  invoiceNumber: string;
};

export function parseBillRow(row: string[]): ParsedBill {
  return {
    vendorName: row[0],
    amount: row[1],
    dueDate: new Date(row[2]),
    invoiceNumber: row[3],
  };
}

/** Split a CSV file into header row + data rows. Naive (no quote handling). */
export function splitCsv(text: string): { headers: string[]; rows: string[][] } {
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  const headers = lines[0].split(",").map((h) => h.trim());
  const rows = lines.slice(1).map((l) => l.split(",").map((c) => c.trim()));
  return { headers, rows };
}
