import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader } from "lucide-react";
import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center px-3 gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground transition-colors px-3 duration-300 hover:bg-amber-500 hover:text-white",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80 hover:text-destructive-foreground",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/70 hover:text-secondary-foreground",
        ghost: "hover:bg-accent hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
      },
      full: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      full: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  full?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, loading, variant, size, asChild = false, full, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, full }), // استفاده از full به درستی
          className,
          "relative overflow-hidden"
        )}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        <div
          className={cn(
            "transition-opacity duration-150 z-20 relative flex items-center justify-center gap-1",
            loading && "opacity-0"
          )}
        >
          {props.children}
        </div>
        {loading && (
          <Loader
            className={cn(
              "absolute animate-spin transition-opacity opacity-0",
              loading && "opacity-100"
            )}
            size={18}
          />
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
