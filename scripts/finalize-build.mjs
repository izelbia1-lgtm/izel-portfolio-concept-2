import { readFile, writeFile } from "node:fs/promises";

const configured = process.env.SITE_URL;
let html = await readFile("dist/index.html", "utf8");
if (configured) {
  const url = new URL(configured);
  if (
    url.protocol !== "https:" ||
    url.search ||
    url.hash ||
    url.username ||
    url.password
  )
    throw new Error(
      "SITE_URL must be the final HTTPS website URL, optionally including a GitHub Pages repository path.",
    );
  const base = url.href.replace(/\/?$/, "/");
  const escaped = base
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
  html = html
    .replace("noindex, follow", "index, follow")
    .replace(
      "</head>",
      `  <link rel="canonical" href="${escaped}" />\n    <meta property="og:url" content="${escaped}" />\n  </head>`,
    );
  await writeFile(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escaped}</loc></url></urlset>\n`,
  );
  await writeFile(
    "dist/robots.txt",
    `User-agent: *\nAllow: /\nSitemap: ${base}sitemap.xml\n`,
  );
} else {
  await writeFile(
    "dist/sitemap.xml",
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n',
  );
  await writeFile("dist/robots.txt", "User-agent: *\nDisallow: /\n");
  console.log(
    "Preview build: set SITE_URL to generate the public canonical URL and sitemap and enable indexing.",
  );
}
await writeFile("dist/index.html", html);
