'use client'

import { DialogTitle } from '@headlessui/react'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

interface ChatWindowProps {
  messages: Array<{ text: string; isUser: boolean }>
  onSend: (message: string) => void
}

export default function ChatWindow({ messages, onSend }: ChatWindowProps) {
  return (
    <>
      <DialogTitle className="text-lg font-medium text-white mb-4">
        AI Assistant
      </DialogTitle>
      
      <div className="h-96 overflow-y-auto">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isUser={message.isUser}
          />
        ))}
      </div>

      <ChatInput onSend={onSend} />
    </>
  )
}