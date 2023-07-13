import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Rotas from "./routes.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Rotas />
  </StrictMode>
);
