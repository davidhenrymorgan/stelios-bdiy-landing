import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-12 w-full min-w-0 rounded-lg border-2 border-surface-200 bg-white dark:bg-input/30 px-4 py-2 text-base shadow-xs transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/10',
        'hover:border-surface-300',
        'aria-invalid:ring-error/10 aria-invalid:border-error focus-visible:aria-invalid:ring-error/10',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
