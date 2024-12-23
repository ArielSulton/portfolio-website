import type { TitleProps } from "@/types"

export default function Title({
  title,
  description
}: TitleProps) {
  return (
    <div className="absolute top-8 lg:top-16 mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <h2 className='mb-2 lg:mb-4 text-3xl font-bold text-center text-white'>{title}</h2>
      <p className='text-center text-gray-400'>{description}</p>
    </div>
  )
}