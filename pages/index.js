import Head from "next/head"
import Image from "next/image"
import Navbar from "../components/Navbar"
import LandingPage from "./LandingPage/LandingPage.js"
export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <LandingPage></LandingPage>
    </>
  )
}
