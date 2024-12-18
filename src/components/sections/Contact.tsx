'use client'

import { FormEvent } from 'react'
import Container from '../ui/Container'
import Section from '../ui/Section'

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <Section id="contact" className="bg-black">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12 text-white">CONTACT</h2>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg border border-zinc-700 bg-zinc-900 text-white placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-zinc-700 bg-zinc-900 text-white placeholder-gray-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full p-3 rounded-lg border border-zinc-700 bg-zinc-900 text-white placeholder-gray-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  )
}