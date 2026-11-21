import type { ReactNode } from "react";

type FrameTagProps = {
  children: ReactNode;
  className?: string;
};

export function FrameTag({
  children,
  className = "",
}: FrameTagProps) {
  const corner =
    "pointer-events-none absolute size-2 " +
    "border-neutral-500 dark:border-neutral-400";

  return (
    <span
      className={`relative inline-flex items-center justify-center border border-neutral-300 px-4 py-1.5 text-neutral-800 dark:border-neutral-700 dark:text-white ${className}`}
    >
      {children}

      {/* Top-left */}
      <span
        aria-hidden="true"
        className={`${corner} -left-px -top-px border-l border-t`}
      />

      {/* Top-right */}
      <span
        aria-hidden="true"
        className={`${corner} -right-px -top-px border-r border-t`}
      />

      {/* Bottom-left */}
      <span
        aria-hidden="true"
        className={`${corner} -bottom-px -left-px border-b border-l`}
      />

      {/* Bottom-right */}
      <span
        aria-hidden="true"
        className={`${corner} -bottom-px -right-px border-b border-r`}
      />
    </span>
  );
}
