import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const containerStyles = cva(
  'w-full', // Base styles
  {
    variants: {
      variants: {
        default: 'lg:max-w-full',
      },
      maxWidth: {
        xs: 'max-w-xs',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl',
        full: 'max-w-full',
      },
      center: {
        true: 'mx-auto',
        false: '',
      },
      padding: {
        true: 'px-2 lg:px-6',
        false: '',
      },
    },
    defaultVariants: {
      variants: 'default',
      maxWidth: '5xl',
      center: true,
      padding: true,
    },
  }
);

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerStyles> {}

const Container: React.FC<ContainerProps> = ({
  maxWidth,
  center,
  padding,
  className,
  children,
  variants,
  ...props
}) => {
  return (
    <div
      className={containerStyles({
        maxWidth,
        center,
        padding,
        variants,
        className,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
