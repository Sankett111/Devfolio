
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaRegMoon } from "react-icons/fa6";
import { GiSun } from "react-icons/gi";
import { ThreeDIconButton } from "@/_components/3d-button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex shrink-0 items-center gap-2">
    <ThreeDIconButton label="setting" 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="rounded-md border p-2"
    >
      {!mounted ? (
        <span className="block size-3" />
      ) : theme === "dark" ? (
        < GiSun size={18} />
      ) : (
        <FaRegMoon size={14} />
      )}
    </ThreeDIconButton>
  </div>);
}
