import { Label } from "@radix-ui/react-label";
import * as React from "react";
import { FieldError } from "react-hook-form";

import { cn } from "@/shared/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import ErrorMessage from "@/shared/common/ErrorMessage";

export type IconType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string;
  }
>;
const inputVariants = cva(
  "flex items-center gap-2 w-full  py-1 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-complement-primary  px-4   disabled:bg-gray-800   size-caption text-gray-600  transition duration-300 rounded-sm dark:bg-complement-primary   dark:focus:border-link",
  {
    variants: {
      variant: {
        default: "",
        secondary: "h-10 bg-gray-50 border-border dark:bg-dominant-primary  ",
      },
      hasIcon: {
        true: "pr-10",
        false: "",
      },
      rounded: {
        none: "rounded-none",
        md: "rounded-md",
        sm: "rounded-sm",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      rounded: "sm",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: FieldError;
  icon?: IconType;
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
  onBlur?: React.FocusEventHandler<HTMLInputElement>; // Allow custom onBlur
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    type,
    label,
    icon: Icon,
    iconPosition = "right", // پیش‌فرض: راست
    error,
    hasIcon,
    variant,
    rounded,
    children,
    onBlur,
    ...restProps
  } = props;

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (type === "mobile") {
      const value = e.target.value.replace(/\s+/g, ""); // Remove all spaces
      if (/^\d{11}$/.test(value)) {
        // Format as "0901 812 0905" (assuming it's a valid 11-digit mobile number)
        const formattedValue = `${value.slice(0, 4)} ${value.slice(
          4,
          7
        )} ${value.slice(7)}`;
        e.target.value = formattedValue;
      }
    }

    // Call the passed onBlur function from react-hook-form or custom one
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <div className="group">
      {label && (
        <Label htmlFor={props.id} className="mb-2 text-sm block">
          {label}
        </Label>
      )}
      <div className="flex items-center relative">
        {iconPosition === "left" && Icon && (
          <div
            className={cn(
              "absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-600"
            )}
          >
            <Icon className={variant === "secondary" ? "w-6 h-6" : "w-5 h-5"} />
          </div>
        )}
        <input
          dir={type === "mobile" ? "ltr" : "rtl"}
          type={type}
          className={cn(
            " placeholder:text-xs placeholder:text-black   ",
            inputVariants({ variant, rounded, hasIcon }),
            error && "border-satisfaction-50  dark:border-satisfaction-50",
            className,
            type === "mobile" && "ltr:text-left" // Force LTR for mobile input
          )}
          ref={ref}
          onBlur={handleBlur}
          {...restProps}
        />

        {children}
      </div>

      {error && <ErrorMessage message={error.message} />}
    </div>
  );
});
Input.displayName = "Input";

const InputIcon = ({
  className,
  children,
}: React.PropsWithChildren<{
  className?: string;
}>) => {
  return (
    <div className={cn("absolute top-1/5 right-4 text-gray-600", className)}>
      {children}
    </div>
  );
};

export { Input, InputIcon, inputVariants };
