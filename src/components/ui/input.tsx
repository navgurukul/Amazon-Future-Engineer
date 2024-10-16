import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full relative rounded-[100px] border-static-black border-[1px] border-solid box-border h-14 flex flex-row items-center justify-start py-3 px-4 gap-2 text-left text-lg text-text-hint font-webtypestyles-body1",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
