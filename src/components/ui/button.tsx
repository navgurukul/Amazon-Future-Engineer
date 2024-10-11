import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        // destructive:
        //   "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        // outline:
        //   "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        // secondary:
        //   "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        // ghost: "hover:bg-accent hover:text-accent-foreground",
        // link: "text-primary underline-offset-4 hover:underline",
        // proceed:"w-full relative rounded-[100px] bg-incandescent-main h-14 flex flex-row items-center justify-center py-2 px-8 box-border cursor-pointer text-center  text-button1 text-lg font-button1-bold bg-[#f55c38] text-[#fff]",
        proceed:"w-full md:w-auto flex items-center font-button1-bold  leading-[170%] text-button1 cursor-pointer justify-center py-2 px-8 text-incandescent-contrasttext text-center rounded-81xl bg-incandescent-main h-14 hover:bg-incandescent-dark",
        proceedWhite:"w-full md:w-auto flex items-center font-button1-bold  leading-[170%] text-button1 cursor-pointer justify-center py-2 px-8 text-incandescent-main text-center rounded-81xl bg-incandescent-contrasttext h-14 hover:bg-grey-300",
        admin:"w-full md:w-auto flex items-center font-button1-bold  leading-[170%] text-button1 cursor-pointer justify-center py-2 px-8 text-darkslategray text-center rounded-81xl bg-transparent hover:bg-incandescent-light hover:text-incandescent-main"
      },
      size: {
        default: "h-14 px-8 py-2 font-button1-bold text-[16px] md:text-[18px]",
        sm: "h-8 rounded-md px-3 text-button1",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

