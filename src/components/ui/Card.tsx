import type { CardProps } from "@/types"

export default function Card({
  children,
  className = ''
}: CardProps) {
  return (
    <div className="group relative p-0.5 rounded-xl w-full max-w-80 shadow-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-red-500">
      <div className={`p-6 rounded-xl h-full w-full flex flex-col ${className}`}>
        {children}
      </div>
    </div>
  )
}