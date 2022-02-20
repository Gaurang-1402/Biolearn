import React from "react"
import Link from "next/link"
// import { ScienceImg } from "../../assets/science.svg"
import Image from "next/image"
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Biolearn</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className=' md:pt-24 bg-tertiary h-screen w-full'>
        <div className='p-4 origin-bottom-right lg:mx-36 md:mx-8'>
          <div className='p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2'>
            <div className='pr-4 md:flex md:flex-col md:justify-center align-middle pt-24'>
              <h2 className='self-center mb-4 text-5xl font-bold tracking-wider text-indigo-200 font-carattere md:text-4xl lg:text-7xl'>
                Biolearn
              </h2>

              <p className='self-center text-xl tracking-wide text-justify text-indigo-100 font-sourceSerifPro'>
              We never get perspectives on other organs vital to our body. All we have are static images on boring textbooks. This makes students disengaged with the study material and underperform in their exams. The absence of an interactive biology education during our middle school inspired us to make Biolearn- an interactive education platform to learn Biology.
              </p>

              <Link href='/bio' className='' passHref>
                <button className='p-2 px-8 mt-4 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-sourceSerifPro md:w-full bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg '>
                  Explore
                </button>
              </Link>
            </div>

            <div className='px-10 py-10 h-full'>
              <Image width={700} height={500} src='/science.svg' alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
