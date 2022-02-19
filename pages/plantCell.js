import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import React, { Suspense, useRef, useState } from "react"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
  current: null,
})

function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/plant_cell_-_cell_structure/scene.gltf')
  const [hovered, set] = useState(null)

  console.log(hovered)
  return (
    <group ref={group} {...props} dispose={null}
      //@ts-ignore
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      //@ts-ignore
      onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, -18.04, 8.3]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.cytoplasm_TT_checker_512x512_UV_GRID_0.geometry}
              material={nodes.cytoplasm_TT_checker_512x512_UV_GRID_0.material}
            />
          </group>
          <group position={[8.5, 32.58, -26.91]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.chloroplastin_TT_checker_512x512_UV_GRID_0.geometry}
              material={nodes.chloroplastin_TT_checker_512x512_UV_GRID_0.material}
            />
          </group>
          <group position={[3.76, 28.84, -27.54]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.chloroplastout_TT_checker_512x512_UV_GRID_0.geometry}
              material={nodes.chloroplastout_TT_checker_512x512_UV_GRID_0.material}
            />
          </group>
          <group position={[-24.12, -0.87, -23.89]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.nucleus_TT_checker_512x512_UV_GRID_0.geometry}
              material={nodes.nucleus_TT_checker_512x512_UV_GRID_0.material}
            />
          </group>
          <group position={[9.76, -9.49, 39.45]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.ribosomes_TT_checker_512x512_UV_GRID_0.geometry}
              material={nodes.ribosomes_TT_checker_512x512_UV_GRID_0.material}
            />
          </group>
          <group position={[-20.65, -23.39, 9.16]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.roughER_TT_checker_512x512_UV_GRID_0.geometry}
              material={nodes.roughER_TT_checker_512x512_UV_GRID_0.material}
            />
          </group>
          <group position={[0.98, 0.05, -1.95]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.golgiappratus_TT_checker_512x512_UV_GRID_0.geometry}
              material={nodes.golgiappratus_TT_checker_512x512_UV_GRID_0.material}
            />
          </group>
          <group position={[0.98, 0.05, 0.06]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.lysosome_TT_checker_512x512_UV_GRID_0.geometry}
              material={nodes.lysosome_TT_checker_512x512_UV_GRID_0.material}
            />
          </group>
          <group position={[0.98, 0.05, 0.06]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.peroxisome_TT_checker_512x512_UV_GRID_0.geometry}
              material={nodes.peroxisome_TT_checker_512x512_UV_GRID_0.material}
            />
          </group>
          <group position={[0.98, 0.05, 0.06]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.vacuole_TT_checker_512x512_UV_GRID_0.geometry}
              material={nodes.vacuole_TT_checker_512x512_UV_GRID_0.material}
            />
          </group>
          <group position={[0.98, 0.05, 0.06]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.plasmodesma_TT_checker_512x512_UV_GRID_0.geometry}
              material={nodes.plasmodesma_TT_checker_512x512_UV_GRID_0.material}
            />
          </group>
          <group position={[0, -18.04, 8.3]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.cell_TT_checker_512x512_UV_GRID_0.geometry}
              material={nodes.cell_TT_checker_512x512_UV_GRID_0.material}
            />
          </group>
          <group position={[-47.73, -8.06, 14.4]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.mitochondria_TT_checker_512x512_UV_GRID_0.geometry}
              material={nodes.mitochondria_TT_checker_512x512_UV_GRID_0.material}
            />
          </group>
          <group position={[-27.71, -9.85, 31.13]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.smoothER_TT_checker_512x512_UV_GRID_0.geometry}
              material={nodes.smoothER_TT_checker_512x512_UV_GRID_0.material}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

function Details() {

  const snap = useSnapshot(state)
  if (snap.current === "TT_checker_512x512_UV_GRID") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Cell Wall</h1>
        <h1 className="text-xl ">The plant cell wall has a diversity of functions. It provides a structural framework to support plant growth and acts as the first line of defense when the plant encounters pathogens. The cell wall must also retain some flexibility, such that when subjected to developmental, biotic, or abiotic stimuli it can be rapidly remodeled in response.</h1>
      </div>
    )
  }
  else {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-2xl tracking-wider">Click on diffrent parts of 3D model to know more</h1>
        <p className="self-center mx-8 text-xl tracking-wide text-justify">To view the 3D model in AR, scan the QR code or click on the button below.</p>

        <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex p-6 text-6xl rounded-xl h-48 w-48">
            {/* <Image width="250" height="250" src="/.jpeg" alt="" /> */}
          </div>
          <a href="https://go.echo3d.co/Kn7b" target="_blank" rel="noreferrer">
            <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
          </a>
        </div>
      </div>
    )
  }
}

export default function PlantCell() {
  return (
    <>

      <Head>
        <title>Plant Cell | Biolearn</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-4 bg-tertiary text-white font-bold">

        <Link href="/bio" passHref><span className="ml-8 cursor-pointer">Go Back</span></Link>

        <div className="grid w-full py-10 place-items-center">
          <h1 className="pb-2 text-5xl font-semibold tracking-wide lg:text-6xl">
            Plant Cell
          </h1>
          <div className="inline-flex mt-2 h-1 bg-secondary rounded-full w-96"></div>
          <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">Plant cells are eukaryotic cells present in green plants, photosynthetic eukaryotes of the kingdom Plantae. Their distinctive features include primary cell walls containing cellulose, hemicelluloses and pectin, the presence of plastids with the capability to perform photosynthesis and store starch, a large vacuole that regulates turgor pressure, the absence of flagella or centrioles, except in the gametes, and a unique method of cell division involving the formation of a cell plate or phragmoplast that separates the new daughter cells.</div>
        </div>

        <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

          <div className="w-full h-screen px-4 outline-none md:col-span-2 lg:block cursor-grab">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
              <ambientLight intensity={0.1} />
              <spotLight intensity={0.7} angle={0.1} penumbra={1} position={[10, 10, 10]} castShadow />
              <Suspense fallback={null}>
                <Model scale={0.01} />
                <Environment preset="city" />
                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
              </Suspense>
              <OrbitControls autoRotate />
            </Canvas>
          </div>

          <div className="mt-56 md:mt-0 md:col-span-1 p-4">
            <Details />
          </div>

        </div>

      </div>

    </>
  )
}
