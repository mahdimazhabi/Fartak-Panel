import * as React from "react";
import { cn } from "@/lib/utils";
import ErrorMessage from "@/shared/common/ErrorMessage";
import { FieldError } from "react-hook-form";

interface PropsTextarea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: FieldError;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, PropsTextarea>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-2 mt-4">
        <label className="text-sm">{label}</label>
        <textarea
          className={cn(
            "flex min-h-[120px] text-xs text-black placeholder:text-xs resize-none w-full rounded-sm mt-2 placeholder:text-black  px-3 py-2  bg-white   focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <ErrorMessage message={error.message} />}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
