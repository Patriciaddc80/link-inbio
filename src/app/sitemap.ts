import { MetadataRoute } from "next";
import fs from "fs";
import { execSync } from "child_process";

const BASE = "https://link-inbio.vercel.app";

function fileLastModified(filePath: string): Date {
  try {
    if (!fs.existsSync(filePath)) return new Date();
    // Use git to get the last commit date for the file in ISO format
    const out = execSync(`git log -1 --format=%cI -- ${filePath}`, {
      stdio: ["pipe", "pipe", "ignore"],
    })
      .toString()
      .trim();
    if (out) return new Date(out);
  } catch (e) {
    // ignore and fallback
  }
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", file: "src/app/page.tsx", priority: 1 },
    { path: "/portfolio", file: "src/app/portfolio/page.tsx", priority: 0.8 },
    { path: "/portfolio/project1", file: "src/app/portfolio/project1/page.tsx", priority: 0.7 },
    { path: "/contact", file: "src/app/contact/page.tsx", priority: 0.5 },
  ];

  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: fileLastModified(r.file),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
