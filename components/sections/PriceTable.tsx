import Link from "next/link";
import { pricingTable } from "@/lib/pricing";
import { serviceBySlug } from "@/content/services";
import { routes } from "@/lib/routes";

/** "From $X" table, driven by lib/pricing.ts. Renders nothing while switched off. */
export function PriceTable() {
  if (!pricingTable.enabled || !pricingTable.rows.length) return null;
  return (
    <table className="w-full border-collapse text-left">
      <caption className="sr-only">Starting prices</caption>
      <thead>
        <tr className="border-b border-line">
          <th scope="col" className="py-3 font-medium">Treatment</th>
          <th scope="col" className="py-3 text-right font-medium">From</th>
        </tr>
      </thead>
      <tbody>
        {pricingTable.rows.map((r) => (
          <tr key={r.service} className="border-b border-line">
            <td className="py-3"><Link href={routes.service(r.service)} className="hover:underline">{serviceBySlug(r.service).name}</Link></td>
            <td className="py-3 text-right">{r.from}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
