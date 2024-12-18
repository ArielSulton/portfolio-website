'use client'

interface ChatMessageProps {
  message: string
  isUser: boolean
}

export default function ChatMessage({ message, isUser }: ChatMessageProps) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`rounded-lg px-4 py-2 max-w-[80%] ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-gray-800 text-gray-200'
        }`}
      >
        {message}
      </div>
    </div>
  )
}