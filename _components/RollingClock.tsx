"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import RollingDigit from "./rollingdigit";

type RollingClockProps = {
  hour12?: boolean;
  className?: string;
};

export default function RollingClock({ hour12 = true, className }: RollingClockProps) {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12,
    });

    const updateTime = () => {
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [hour12]);

  const digits = time.slice(0, 8);
  const suffix = hour12 ? time.slice(8).trim() : "IST";

  return (
    <div className={cn("flex shrink-0 items-center font-mono text-xs tabular-nums text-neutral-500", className)}>
      <span className="sr-only">{digits} {suffix}</span>
      <div aria-hidden="true" className="flex items-center">
        {digits.split("").map((char, index) =>
          char === ":" ? (
            <span key={index} className={hour12 ? "mx-px" : undefined}>:</span>
          ) : (
            <RollingDigit key={index} value={char} />
          )
        )}
        <span className={hour12 ? "ml-1 text-[10px] tracking-normal" : "ml-[0.6em]"}>
          {suffix}
        </span>
      </div>
    </div>
  );
}
