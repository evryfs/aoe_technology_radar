import { Item } from "./model";

export const radarName =
  process.env.REACT_APP_RADAR_NAME || "AOE Technology Radar";
export const radarNameShort = radarName;

export const quadrants = [
  "languages-and-frameworks",
  "methods-and-patterns",
  "platforms-and-services",
  "tools",
];

export const rings = ["all", "adopt", "trial", "assess", "hold"] as const;

export type Ring = typeof rings[number];

export const getItemPageNames = (items: Item[]) =>
  items.map((item) => `${item.quadrant}/${item.name}`);

export const showEmptyRings = false;

const messages: { [k: string]: string } = {
  "languages-and-frameworks": "Languages & Frameworks",
  "methods-and-patterns": "Methods & Patterns",
  "platforms-and-services": "Platforms & Operations",
  tools: "Tools",
};

export const translate = (key: string) => messages[key] || "-";

export function isMobileViewport() {
  // return false for server side rendering
  if (typeof window == "undefined") return false;

  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  return width < 1200;
}

export function assetUrl(file: string) {
  return process.env.PUBLIC_URL + "/" + file;
}
