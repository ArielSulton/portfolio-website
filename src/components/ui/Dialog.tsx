'use client'

import type { DialogProps } from '@/types'
import { Fragment } from 'react'
import { Dialog as HeadlessDialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Dialog({ 
  isOpen, 
  onClose, 
  children 
}: DialogProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <HeadlessDialog onClose={() => {}} className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPanel className="fixed inset-0 bg-black/70" />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative bg-black rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              {children}
            </div>
          </TransitionChild>
        </div>
      </HeadlessDialog>
    </Transition>
  )
}