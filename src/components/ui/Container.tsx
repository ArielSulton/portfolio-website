import type { ContainerProps } from "@/types"

export default function Container({ 
  children, 
  className = '' 
}: ContainerProps) {
  return (
    <div className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}