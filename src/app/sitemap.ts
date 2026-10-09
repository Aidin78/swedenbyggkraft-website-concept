import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { constructionServices } from "@/content/services";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/tjanster",
    "/projekt",
    "/brf-fastighetsagare",
    "/brf-fastighetsagare/fastighetsskotsel",
    "/brf-fastighetsagare/underhallsplan",
    "/om-oss",
    "/kontakt",
    ...constructionServices.map((s) => `/tjanster/${s.slug}`),
    ...projects.map((p) => `/projekt/${p.slug}`),
  ];
  return pages.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
