'use client'

import { Dialog, Transition } from "@headlessui/react"
import { Fragment, FunctionComponent, PropsWithChildren, useRef } from "react"
import { XMarkIcon } from "@heroicons/react/24/outline"

interface Props {
  open: boolean;
  handleOnClose: () => void
}

const Modal: FunctionComponent<PropsWithChildren<Props>> = ({ open, handleOnClose, children }) => {
  const cancelButtonRef = useRef(null)
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50"
        initialFocus={cancelButtonRef} onClose={handleOnClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className=" flex min-h-screen items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className=" w-full sm:w-4/5 lg:w-1/2 2xl:w-1/3 mx-auto relative overflow-auto rounded-lg bg-white shadow-xl transition-all sm:my-8  ">
                <div className="bg-white px-4 pb-4">
                  <div className="">
                    <div className="mt-3 mx-2 text-left">
                      <div className="flex justify-end text-gray-900">
                        <button
                          type="button"
                          className="w-auto sm:text-sm hover:bg-tertiary-100 p-2 rounded-full"
                          onClick={handleOnClose}
                          ref={cancelButtonRef}
                        >
                          <XMarkIcon className="h-5 w-5 " />
                        </button>
                      </div>
                      <div className="">
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root >
  )
}

export default Modal