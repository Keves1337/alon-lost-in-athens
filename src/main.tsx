import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// GitHub Pages SPA redirect support (reads params set by public/404.html)
const params = new URLSearchParams(window.location.search);
const path = params.get("path");
const search = params.get("search");
const hash = params.get("hash");
if (path) {
  const next = `/${path}${search ? `?${search}` : ""}${hash ? `#${hash}` : ""}`;
  window.history.replaceState(null, "", next);
}

createRoot(document.getElementById("root")!).render(<App />);

