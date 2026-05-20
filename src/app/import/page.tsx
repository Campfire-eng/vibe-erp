import Link from "next/link";
import ImportButton from "./ImportButton";

export default function ImportPage() {
  return (
    <div className="p-8 max-w-3xl">
      <Link href="/" className="text-blue-600 underline">
        ← Dashboard
      </Link>
      <h1 className="mt-4 text-2xl font-bold">Import Bills</h1>
      <p className="mt-2 text-gray-700">
        Customer uploads a bills CSV. They have provided a PDF describing the file
        format — see <code>docs/bill_format_spec.pdf.txt</code>. The fixture CSV
        lives at <code>fixtures/bills.csv</code>.
      </p>
      <p className="mt-2 text-gray-700">
        Click below to (re-)import the fixture CSV. Imported bills appear on{" "}
        <Link href="/bills" className="text-blue-600 underline">
          /bills
        </Link>
        .
      </p>
      <ImportButton />
    </div>
  );
}
