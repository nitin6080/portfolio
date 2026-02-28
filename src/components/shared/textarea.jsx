import React from "react";
import clsx from "clsx";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={clsx(
        "w-full rounded-xl border border-slate-600 bg-slate-900/70 px-4 py-3",
        "text-white placeholder:text-slate-400",
        "transition-all duration-300",
        "focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30",
        "hover:border-slate-500",
        "resize-none",
        className,
      )}
      {...props}
    />
  );
});

export default Textarea;
