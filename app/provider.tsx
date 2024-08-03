"use clinet";

import { NextUIProvider } from "@nextui-org/react";

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextUIProvider>
      <main className="bg-gradient-to-b from-slate-900 to-fuchsia-600 h-full shadow-2xl">
        {children}
      </main>
    </NextUIProvider>
  );
}