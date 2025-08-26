"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function ClientLayout({ children }) {
  return (
      <ThemeProvider>{children}</ThemeProvider>
  );
}

export default ClientLayout;
