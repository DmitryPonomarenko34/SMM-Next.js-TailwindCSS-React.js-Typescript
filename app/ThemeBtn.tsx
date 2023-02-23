"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeBtn() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <SunIcon
          title="light theme"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon
          className="w-6 h-6 cursor-pointer"
          title="dark theme"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
