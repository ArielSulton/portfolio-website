'use client'

import { FormEvent } from 'react'

interface ChatInputProps {
  onSend: (message: string) => void
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const input = form.elements.namedItem('message') as HTMLInputElement
    
    if (input.value.trim()) {
      onSend(input.value)
      input.value = ''
    }
  }

  return (
    <form onClick={handleSubmit} className="flex mt-4">
      <input
        type="text"
        name="message"
        className="flex-1 border border-gray-700 bg-gray-800 text-white rounded-l-lg p-2 placeholder-gray-400"
        placeholder="Type your message..."
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
      >
        Send
      </button>
    </form>
  )
}