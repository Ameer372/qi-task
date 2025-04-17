import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router.tsx";
import Layout from "./components/Layout.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Layout children={<Router />} />
    </ThemeProvider>
  </StrictMode>
);
