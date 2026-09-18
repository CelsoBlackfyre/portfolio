import { existsSync } from "node:fs";
import path from "node:path";

const EXTENSIONS = ["png", "jpg", "jpeg", "webp", "avif"] as const;

export function projectCover(slug: string): string | null {
  for (const extension of EXTENSIONS) {
    const publicPath = `/work/${slug}/cover.${extension}`;
    const absolute = path.join(process.cwd(), "public", publicPath);
    if (existsSync(absolute)) return publicPath;
  }

  return null;
}
