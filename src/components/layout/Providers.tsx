"use client";

import type { ReactNode } from "react";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <SmoothScrollProvider>{children}</SmoothScrollProvider>;
}
