"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeBtn() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const forceTheme = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <button className="w-6 h-6" onClick={() => setTheme(forceTheme)}>
      {resolvedTheme === "dark" ? (
        <SunIcon title="light" />
      ) : (
        <MoonIcon title="dark" />
      )}
    </button>
  );
}
