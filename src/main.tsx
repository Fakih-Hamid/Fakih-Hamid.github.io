import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Maintenance from "./Maintenance.tsx";
import "./index.css";

// Maintenance mode: visitors see a maintenance page.
// Open the site once with ?preview=fh-k7q2m9 to see the real site on this browser,
// and ?preview=off to go back to the maintenance view.
const MAINTENANCE = true;
const PREVIEW_KEY = "fh-k7q2m9";

function canPreview(): boolean {
  try {
    const param = new URLSearchParams(window.location.search).get("preview");
    if (param === PREVIEW_KEY) localStorage.setItem("preview", "1");
    if (param === "off") localStorage.removeItem("preview");
    return localStorage.getItem("preview") === "1";
  } catch {
    return false;
  }
}

const showSite = !MAINTENANCE || canPreview();

createRoot(document.getElementById("root")!).render(showSite ? <App /> : <Maintenance />);
