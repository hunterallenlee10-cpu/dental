// Parses every JSON-LD block in the built pages and checks required properties by type.
import fs from "node:fs";
import path from "node:path";
const appDir = path.resolve(import.meta.dirname, "../.next/server/app");
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith(".html") ? [path.join(d, e.name)] : []));
const required = {
  Dentist: ["name", "url", "telephone", "address", "openingHoursSpecification", "image"],
  BreadcrumbList: ["itemListElement"],
  Service: ["name", "provider", "url"],
  Article: ["headline", "image", "datePublished", "dateModified", "publisher"],
  Person: ["name", "jobTitle"],
};
let blocks = 0;
const counts = {};
const problems = [];
for (const f of walk(appDir).filter((f) => !/_not-found|_global-error/.test(f))) {
  const html = fs.readFileSync(f, "utf8");
  const route = "/" + path.relative(appDir, f).replace(/\.html$/, "").replace(/^index$/, "");
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    blocks++;
    let data;
    try {
      data = JSON.parse(m[1]);
    } catch (e) {
      problems.push(`${route}: invalid JSON (${e.message})`);
      continue;
    }
    for (const node of Array.isArray(data) ? data : [data]) {
      const t = node["@type"];
      counts[t] = (counts[t] || 0) + 1;
      if (node["@context"] !== "https://schema.org") problems.push(`${route}: ${t} missing @context`);
      for (const k of required[t] || []) if (node[k] === undefined || node[k] === "" || (Array.isArray(node[k]) && !node[k].length)) problems.push(`${route}: ${t} missing ${k}`);
      if (/aggregateRating|"review"/.test(JSON.stringify(node))) problems.push(`${route}: ${t} has rating or review markup (not allowed)`);
      if (t === "BreadcrumbList") node.itemListElement.forEach((it, i) => { if (it.position !== i + 1 || !it.item || !it.name) problems.push(`${route}: breadcrumb item ${i + 1} incomplete`); });
      if (t === "Dentist" && (!node.address.addressLocality || node.address.addressRegion !== "MD")) problems.push(`${route}: Dentist address incomplete`);
    }
  }
}
console.log(`Parsed ${blocks} JSON-LD blocks:`, counts);
if (problems.length) { console.log(problems.join("\n")); process.exit(1); }
console.log("All JSON-LD blocks parse and carry their required properties. No rating or review markup.");
