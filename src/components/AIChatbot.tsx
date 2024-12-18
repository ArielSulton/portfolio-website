'use client'

import { useState } from 'react'
import { Bot } from 'lucide-react'
import Dialog from './ui/Dialog'
import ChatWindow from './chatbot/ChatWindow'

interface ChatMessage {
  text: string
  isUser: boolean
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])

  const handleSend = (message: string) => {
    // Add user message
    setMessages(prev => [...prev, { text: message, isUser: true }])
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: 'This is a simulated AI response.', isUser: false }
      ])
    }, 1000)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-500 to-red-500 hover:bg-opacity-60 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        <Bot size={24} />
      </button>

      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ChatWindow messages={messages} onSend={handleSend} />
      </Dialog>
    </>
  )
}