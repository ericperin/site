"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useTheme } from "./hooks/useTheme";
import { SunIcon, MoonIcon } from "lucide-react";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="cursor-pointer bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight" onClick={toggleTheme}>
        Eric Perin <br /> Software Engineer
        <div className="flex justify-center mt-2">
          {theme === 'light' ? <SunIcon className="h-6 w-6 text-blue-500" /> : <MoonIcon className="size-6 text-blue-500" />}
        </div>
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        eric.perin@outlook.com
      </p>
    </BackgroundLines>
  );
}