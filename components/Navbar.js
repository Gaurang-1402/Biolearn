import Link from "next/link"
import React from "react"
import { Menu, Popover, Transition } from "@headlessui/react"
import { MenuAlt3Icon, XIcon, LogoutIcon } from "@heroicons/react/outline"
import { Fragment } from "react"

const Navbar = () => {
  return (
    <div className='fixed z-50 w-full'>
      <Popover className='relative z-10 bg-gray-900'>
        {({ open }) => (
          <div className=''>
            <div className='px-4  mx-auto max-w-7xl sm:px-6'>
              <div className='flex items-center justify-between py-3 border-b-2 border-secondary md:justify-start md:space-x-8'>
                <div className='flex justify-start lg:w-0 lg:flex-1'>
                  <Link
                    href='/'
                    className='w-auto text-5xl text-white no-underline cursor-pointer font-carattere'
                  >
                    <a className='w-auto text-5xl text-white no-underline cursor-pointer font-carattere'>
                      Biolearn
                    </a>
                  </Link>
                </div>
                <div className='-my-2 -mr-2 md:hidden'>
                  <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:text-gray-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Open menu</span>
                    <MenuAlt3Icon
                      className='h-7 w-7 focus:outline-none'
                      aria-hidden='true'
                    />
                  </Popover.Button>
                </div>

                <Popover.Group
                  as='nav'
                  className='hidden md:flex md:space-x-0 lg:space-x-3'
                >
                  <Link
                    href='/'
                    className='px-3 py-2 mx-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white'
                  >
                    <a className='px-3 py-2 mx-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white'>
                      Home
                    </a>
                  </Link>

                  <Link
                    href='/bioMolecule'
                    className='px-3 py-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white'
                  >
                    <a className='px-3 py-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white'>
                      Biology Organs
                    </a>
                  </Link>

                  <Link
                    href='/chatroom'
                    className='px-3 py-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white'
                  >
                    <a className='px-3 py-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white'>
                      Chat
                    </a>
                  </Link>

                  <div className='pl-2 mt-1 cursor-pointer nav-links'>
                    <LogoutIcon className='text-white h-7 w-7 focus:outline-none'></LogoutIcon>
                  </div>
                </Popover.Group>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter='duration-200 ease-out'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='duration-100 ease-in'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Popover.Panel
                focus
                static
                className='absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden'
              >
                <div className='bg-gray-800 divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50'>
                  <div className='px-5 pt-3 pb-6'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <div className='flex justify-start lg:w-0 lg:flex-1'>
                          <Link
                            href='/'
                            className='w-auto h-8 text-5xl text-white no-underline font-carattere'
                          >
                            <a className='w-auto h-8 text-5xl text-white no-underline font-carattere'>
                              Biolearn
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className='-mr-2'>
                        <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                          <span className='sr-only'>Close menu</span>
                          <XIcon className='w-6 h-6' aria-hidden='true' />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className='mt-6'>
                      <nav className='grid text-white font-sourceSerifPro gap-y-8'>
                        Learning Biology made simple...
                      </nav>
                    </div>
                  </div>
                  <div className='px-5 py-6 space-y-6'>
                    <div className='grid place-items-center'>
                      <Link
                        href='/'
                        className='px-3 py-2 text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white'
                      >
                        <a className='px-3 py-2 text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white'>
                          Home
                        </a>
                      </Link>

                      <Link
                        href='/bioMolecule'
                        className='px-3 py-2 text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white'
                      >
                        <a className='px-3 py-2 text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white'>
                          {" "}
                          Organs
                        </a>
                      </Link>

                      <Link
                        href='/chatroom'
                        className='px-3 py-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white'
                      >
                        <a className='px-3 py-2 font-serif text-xl font-medium text-gray-300 no-underline rounded-md font-sourceSerifPro hover:bg-gray-700 hover:text-white'>
                          Biology Chat
                        </a>
                      </Link>
                    </div>

                    <div className='grid justify-center'>
                      <div className='inline-flex w-64 h-1 bg-secondary rounded-full'></div>
                    </div>

                    <div className='grid cursor-pointer place-items-center'>
                      <LogoutIcon className='text-white h-7 w-7 focus:outline-none'></LogoutIcon>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </div>
        )}
      </Popover>
    </div>
  )
}

export default Navbar
