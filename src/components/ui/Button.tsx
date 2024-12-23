import type { GradientButtonProps, NavButton } from '@/types'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function GradientButton({ 
  content, 
  onClick, 
  className = '', 
  classSpanName = ''
}: GradientButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`text-sm rounded-full text-white hover:text-gray-400 transition-all duration-300 ease-in-out group ${className}`}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-red-500 opacity-100 duration-300"></span>
      <span className={`absolute inset-[2px] rounded-full ${classSpanName}`}></span>
      <span className="relative z-10">{content}</span>
    </button>
  );
};

export function NavButton({
  handlePrevious, 
  handleNext
}: NavButton) {
  return (
    <div>
      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-800/50 p-2 rounded-full hover:bg-zinc-700/50 transition-colors"
        aria-label="Previous categories"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-800/50 p-2 rounded-full hover:bg-zinc-700/50 transition-colors"
        aria-label="Next categories"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};