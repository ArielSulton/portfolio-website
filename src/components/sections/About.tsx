import Image from 'next/image'
import Picture from '@public/s-avatar.png'
import Container from '../ui/Container'
import Section from '../ui/Section'

export default function About() {
  return (
    <Section id="about" className="bg-zinc-900 relative">
      <h2 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-center text-white z-10">ABOUT</h2>
      <Container className="pt-10">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="flex justify-center">
            <div className="relative inline-block w-64 md:w-80 lg:w-96">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-red-500 rounded-full opacity-100 transition duration-200"></div>
              <div className="relative bg-zinc-900 rounded-full p-1">
                <Image
                  src={Picture}
                  alt="About"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start text-white">
            <h3 className="text-xl font-semibold mb-4 text-white">Detailed Info</h3>
            <p className="text-gray-400 text-center md:text-left">Your detailed information goes here...</p>
            <button className="mt-6 bg-zinc-800 text-white px-6 py-2 rounded-lg hover:bg-zinc-700 transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </Container>
    </Section>
  )
}