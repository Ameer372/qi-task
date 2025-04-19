import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router.tsx";
import Layout from "./components/Layout.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Layout children={<Router />} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
