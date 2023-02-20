"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const forceTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button className="w-6 h-6" onClick={() => setTheme(forceTheme)}>
      {theme === "dark" ? <SunIcon title="light" /> : <MoonIcon title="dark" />}
    </button>
  );
}
