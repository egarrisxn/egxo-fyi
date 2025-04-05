import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva} from 'class-variance-authority'
import {cn} from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground xl:font-semibold shadow-lg border-2 hover:bg-primary/90',
        reset: 'border-2 bg-blue-500 text-white shadow-lg hover:bg-blue-500/80',
        outline:
          'border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground 2xl:text-lg',
        secondary: 'bg-destructive shadow-lg text-destructive-foreground hover:bg-destructive/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        none: 'font-bold text-2xl 2xl:text-4xl text-foreground no-underline hover:no-underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-8',
        xl: 'h-9 px-4 py-2 xl:py-4 xl:h-10 xl:text-lg',
        xxl: 'h-9 px-4 py-2 xl:py-4 xl:h-10',
        icon: 'h-9 w-9 xl:h-10 xl:w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Button = React.forwardRef(({className, variant, size, asChild = false, ...props}, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({variant, size, className}))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export {Button, buttonVariants}
