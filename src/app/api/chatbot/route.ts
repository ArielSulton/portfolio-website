import type { ChatMessage, ChatResponse } from '@/types'
import { NextResponse } from 'next/server'

const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill'
const HUGGING_FACE_API_KEY = process.env.HUGGING_FACE_API_KEY

const customResponses = new Map([
  ['project', {
    keywords: ['project', 'portfolio', 'work'],
    response: 'I have worked on several interesting projects including web development, mobile apps, and backend systems. Would you like to know more about any specific project?'
  }],
  ['skills', {
    keywords: ['skill', 'technology', 'tech stack', 'programming'],
    response: 'My technical skills include React, Next.js, TypeScript, Node.js, and various other modern web technologies. I also have experience with database design and API development.'
  }],
  ['contact', {
    keywords: ['contact', 'email', 'reach', 'connect'],
    response: 'You can reach me through email at arielbusinesses123@gmail.com or connect with me on LinkedIn.'
  }],
  ['experience', {
    keywords: ['experience', 'work history', 'background'],
    response: 'I have experience working on both frontend and backend development, with a focus on creating responsive and user-friendly web applications.'
  }]
])

const fallbackResponses = [
  "I'm sorry, I'm having trouble connecting to my AI service. Could you please try again?",
  "It seems there's a temporary issue with my connection. Can you rephrase your question?",
  "I apologize for the inconvenience. I'm unable to process your request at the moment. Please try again later."
]

function findCustomResponse(message: string): string | null {
  const lowercaseMessage = message.toLowerCase()
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [_, data] of customResponses) {
    if (data.keywords.some(keyword => lowercaseMessage.includes(keyword))) {
      return data.response
    }
  }
  
  return null
}

async function getAIResponse(message: string): Promise<string> {
  if (!HUGGING_FACE_API_KEY) {
    throw new Error('API key is not configured')
  }

  const response = await fetch(HUGGING_FACE_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${HUGGING_FACE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inputs: message })
  })

  if (!response.ok) {
    throw new Error(`${response.status}`)
  }

  const data = await response.json()
  return data[0]?.generated_text || "I'm not sure how to respond to that."
}

export async function POST(req: Request): Promise<NextResponse<ChatResponse>> {
  try {
    const { message } = await req.json() as ChatMessage

    if (!message) {
      throw new Error('Message is required')
    }

    // 1. check for custom responses
    const customResponse = findCustomResponse(message)
    if (customResponse) {
      return NextResponse.json({
        response: customResponse,
        source: 'custom'
      })
    }

    // 2. if no custom response, try AI response
    try {
      const aiResponse = await getAIResponse(message)
      return NextResponse.json({
        response: aiResponse,
        source: 'ai'
      })
    } catch (aiError) {
      // 3. if AI fails, use a random fallback response
      console.error(aiError)
      const fallbackResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
      return NextResponse.json({
        response: fallbackResponse,
        error: aiError instanceof Error ? aiError.message : 'AI service error',
        source: 'custom'
      })
    }
  } catch (error) {
    console.error('Chat processing error:', error)
    return NextResponse.json({
      response: "I apologize, but I couldn't process your message. Please try again or contact me directly.",
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      source: 'custom'
    }, { status: 200 })
  }
}