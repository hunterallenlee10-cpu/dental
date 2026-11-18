#!/usr/bin/env bash
# Usage: scripts/lh.sh <label> [base]   Runs Lighthouse (mobile and desktop) on one page of each type.
LABEL=${1:-run}; BASE=${2:-http://localhost:3000}
LH=${LH_BIN:-/tmp/claude-0/lh/node_modules/.bin/lighthouse}
export CHROME_PATH=${CHROME_PATH:-/opt/pw-browsers/chromium-1243/chrome-linux64/chrome}
OUT=lighthouse/$LABEL; mkdir -p $OUT
PAGES="/ /services/general-dentistry /services/dental-implants /locations/baltimore /team/daniel-reyes /tips/implant-or-bridge /contact"
for p in $PAGES; do
  name=$( [ "$p" = "/" ] && echo home || echo "$p" | sed 's#^/##; s#/#_#g')
  for form in mobile desktop; do
    extra=""; [ $form = desktop ] && extra="--preset=desktop"
    $LH "$BASE$p" $extra --quiet --chrome-flags="--headless=new --no-sandbox --disable-gpu" \
      --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=$OUT/$name-$form.json >/dev/null 2>&1
    node -e "const r=require('./$OUT/$name-$form.json');const c=r.categories;const s=k=>Math.round(c[k].score*100);const fails=Object.values(r.audits).filter(a=>a.score!==null&&a.score<1&&a.scoreDisplayMode==='binary'&&['seo','accessibility','best-practices'].some(cat=>c[cat].auditRefs.some(x=>x.id===a.id&&x.weight>0))).map(a=>a.id);console.log('$p'.padEnd(30),'$form'.padEnd(8),'P',s('performance'),'A',s('accessibility'),'BP',s('best-practices'),'SEO',s('seo'),'| LCP',r.audits['largest-contentful-paint'].displayValue,'CLS',r.audits['cumulative-layout-shift'].displayValue,'TBT',r.audits['total-blocking-time'].displayValue, fails.length?'| fails: '+fails.join(','):'')"
  done
done
