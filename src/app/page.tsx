import { prisma } from "@/lib/db";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/16/solid";

export default async function Home() {
  const user = await prisma.user.findFirst({ orderBy: { createdAt: "desc" } });
  const bills = await prisma.bill.findMany({ where: { paid: false } });
  const total = bills.reduce((sum, b) => sum + Number(b.amount), 0);

  return (
    <div>
      <div className="flex justify-between border-b p-4">
        <h6 className="font-bold">Vibe ERP</h6>
        {user && (
          <div className="flex items-center gap-2">
            <button className="rounded-full bg-gray-100 p-2">
              <UserIcon className="h-4 w-4" />
            </button>
            <div>{user.email}</div>
          </div>
        )}
      </div>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="mt-4 text-lg">
          Total Outstanding: ${total}
        </div>
        <Link
          href="/bills"
          className="mt-6 inline-block text-blue-600 underline"
        >
          View bills →
        </Link>
      </div>
    </div>
  );
}
