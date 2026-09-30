import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import DefaultView from "./views/DefaultView.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <DefaultView />
    </StrictMode>,
);
