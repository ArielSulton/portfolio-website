'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare } from 'lucide-react'
import Container from '../ui/Container'
import Section from '../ui/Section'
import Title from '../ui/Title'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [buttonState, setButtonState] = useState({
    text: 'Send Message',
    color: 'bg-gradient-to-r from-purple-500 to-red-500',
    disabled: false
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setButtonState({ text: 'Sending...', color: 'bg-blue-500', disabled: true });

    try {
      const formData = new FormData(event.target as HTMLFormElement);
      formData.append("access_key", "ded90cd8-1c57-40da-b14d-8fce200f70f3");  // arielbusinesses123@gmail.com

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setButtonState({ text: 'Success!', color: 'bg-green-500', disabled: true });
        setTimeout(() => {
          setButtonState({ text: 'Send Message', color: 'bg-gradient-to-r from-purple-500 to-red-500', disabled: false });
        }, 1000);
        (event.target as HTMLFormElement).reset();
        setFormData({ name: '', email: '', message: '' });
      }
      
      else {
        throw new Error(data.message || 'Submission failed');
      }
    }
    
    catch (error) {
      console.error("Error:", error);
      setButtonState({ text: 'Failed', color: 'bg-red-500', disabled: true });
      setTimeout(() => {
        setButtonState({ text: 'Send Message', color: 'bg-gradient-to-r from-purple-500 to-red-500', disabled: false });
      }, 1000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Section id="contact" className="bg-black relative">
      <Title 
        title="CONTACT"
        description="Let's connect and feel free to reach me out"
      />

      <Container className="pt-16 lg:pt-24">
        <div className="p-0.5 w-full max-w-[320px] lg:min-w-[480px] rounded-xl bg-gradient-to-r from-purple-500 to-red-500">
          <form onSubmit={handleSubmit} className="space-y-4 bg-black rounded-xl p-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-zinc-500" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-zinc-700 bg-zinc-900/80 text-white placeholder-zinc-500 focus:border-white focus:ring-1 focus:ring-white transition-all duration-200"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-zinc-500" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-zinc-700 bg-zinc-900/80 text-white placeholder-zinc-500 focus:border-white focus:ring-1 focus:ring-white transition-all duration-200"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute top-3.5 left-3 flex items-start pointer-events-none">
                <MessageSquare className="h-5 w-5 text-zinc-500" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-zinc-700 bg-zinc-900/80 text-white placeholder-zinc-500 focus:border-white focus:ring-1 focus:ring-white transition-all duration-200 resize-none"
                required
              />
            </div>

            <div className="relative w-full">
              <motion.button
                type="submit"
                className="relative group w-full text-white py-3.5 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50"
                disabled={buttonState.disabled}
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
              >
                <div className={`${buttonState.color} absolute inset-0 rounded-lg transition-opacity group-hover:opacity-80`}></div>
                <span className="relative z-10">{buttonState.text}</span>
              </motion.button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}