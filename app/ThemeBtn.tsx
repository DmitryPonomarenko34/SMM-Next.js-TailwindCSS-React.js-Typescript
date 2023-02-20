"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (resolvedTheme) setTheme(resolvedTheme);
  }, []);

  if (!mounted) {
    return null;
  }

  const forceTheme = theme === "dark" ? "light" : "dark";
  console.log(resolvedTheme);

  return (
    <button className="w-6 h-6" onClick={() => setTheme(forceTheme)}>
      {theme === "dark" ? <SunIcon title="light" /> : <MoonIcon title="dark" />}
    </button>
  );
}
