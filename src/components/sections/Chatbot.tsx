'use client'

import type { Message } from '@/types';
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      const assistantMessage: Message = { id: Date.now().toString(), role: 'assistant', content: data.response }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error(error)
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'error', 
        content: `${error}. Please try again later or contact support if the problem persists.`
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Static Button */}
      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-4 right-4 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50 group"
        aria-label="Open chat"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-red-500 rounded-full transition-opacity group-hover:opacity-80"></div>
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.svg
              key="close"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 relative z-10"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="open"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 relative z-10"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* AI Dialog UI */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 w-[calc(100vw-64px)] md:w-96 h-[450px] md:h-[500px] max-w-sm flex flex-col border border-zinc-700 bg-zinc-900/80 rounded-lg shadow-xl z-50"
          >
            <div className="flex items-center justify-between p-4 border-b border-zinc-700">
              <h2 className="text-lg font-semibold">Chat with AI</h2>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close chat"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            <div className="flex-grow overflow-auto p-4 custom-scrollbar">
              {messages.map(m => (
                <motion.div
                  key={m.id}
                  className={`mb-4 ${m.role === 'user' ? 'text-right' : 'text-left'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {m.role === 'user' ? (
                    <div className="inline-block max-w-[85%] p-[2px] rounded-lg bg-gradient-to-r from-purple-500 to-red-500">
                      <span className="inline-block p-2 rounded-[6px] bg-zinc-900/80 text-white">
                        {m.content}
                      </span>
                    </div>
                  ) : (
                    <span className={`inline-block p-2 rounded-lg max-w-[85%] break-words ${
                      m.role === 'assistant' 
                      ? 'border border-zinc-700 bg-transparent text-white' 
                      : 'border border-zinc-700 bg-transparent text-red-700'
                    }`}>
                      {m.content}
                    </span>
                  )}
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  className="text-center text-zinc-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  AI is thinking...
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Message UI */}
            <form onSubmit={handleSubmit} className="border-t border-zinc-700 p-2 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 min-w-0 p-2 border border-zinc-700 bg-zinc-900/80 placeholder-zinc-500 rounded text-sm"
                disabled={isLoading}
              />
              <motion.button
                type="submit"
                disabled={isLoading}
                className="relative group px-3 py-2 rounded text-sm whitespace-nowrap flex-shrink-0 text-white disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-red-500 rounded transition-opacity group-hover:opacity-80"></div>
                <span className="relative z-10">Send</span>
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}