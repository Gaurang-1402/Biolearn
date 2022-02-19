import React from "react"
import Link from "next/link"
// import { ScienceImg } from "../../assets/science.svg"
import Image from "next/image"
export default function LandingPage() {
  return (
    <>
      <div className=' md:pt-24 bg-tertiary h-screen w-full'>
        <div className='p-4 origin-bottom-right lg:mx-36 md:mx-8'>
          <div className='p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2'>
            <div className='pr-4 md:flex md:flex-col md:justify-center align-middle pt-24'>
              <h2 className='self-center mb-4 text-5xl font-bold tracking-wider text-indigo-200 font-carattere md:text-4xl lg:text-7xl'>
                Biolearn
              </h2>

              <p className='self-center text-xl tracking-wide text-justify text-indigo-100 font-sourceSerifPro'>
                Biolearn is an AR-based web platform where students come across
                and learn about various complex chemical structures. Learn with
                the help of interactive 3D Models and AR
              </p>

              <Link href='/chemMolecule' className='md:w-1/3'>
                <a>
                  <button className='p-2 px-8 mt-4 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-sourceSerifPro md:w-full bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg '>
                    Explore
                  </button>
                </a>
              </Link>
            </div>

            <div className='px-10 py-10 h-full'>
              <Image width={700} height={500} src='/science.svg' />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
