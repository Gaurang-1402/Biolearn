import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import React, { Suspense, useRef, useState } from "react"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls, useAnimations } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
  current: null,
})

function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/visible_interactive_human_-_exploding_skull/scene.gltf')
  const { actions } = useAnimations(animations, group)
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
          <group position={[-0.25, 5.88, 0.96]} rotation={[-2.35, 0, -0.08]}>
            <group position={[0.03, -0.01, -0.01]}>
              <mesh
                geometry={
                  nodes
                    .Left_zygomaticSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .Left_zygomaticSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <group position={[0, 0.02, 0.01]}>
              <mesh
                geometry={
                  nodes
                    .OccipitalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .OccipitalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <group position={[-0.01, -0.01, -0.01]}>
              <mesh
                geometry={
                  nodes
                    .Right_lacrimalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .Right_lacrimalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <group position={[-0.02, 0, 0]}>
              <mesh
                geometry={
                  nodes
                    .Right_maxSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .Right_maxSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <group position={[-0.01, -0.02, -0.02]}>
              <mesh
                geometry={
                  nodes
                    .right_nasalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .right_nasalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <group position={[-0.02, 0.01, -0.01]}>
              <mesh
                geometry={
                  nodes
                    .right_palatineSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .right_palatineSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <group position={[-0.02, -0.01, 0.01]}>
              <mesh
                geometry={
                  nodes
                    .Right_ParietalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .Right_ParietalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <group position={[-0.02, 0, 0]}>
              <mesh
                geometry={
                  nodes
                    .Right_temporalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .Right_temporalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <group position={[-0.02, -0.02, -0.01]}>
              <mesh
                geometry={
                  nodes
                    .Right_zygomaticSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .Right_zygomaticSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <group position={[0, 0, -0.02]}>
              <mesh
                geometry={
                  nodes
                    .TeethSTL_Output_from_geomagic_Studio__________________________________________________pasted__phong3_0
                    .geometry
                }
                material={
                  nodes
                    .TeethSTL_Output_from_geomagic_Studio__________________________________________________pasted__phong3_0
                    .material
                }
              />
            </group>
            <group position={[0, -0.01, -0.02]}>
              <mesh
                geometry={
                  nodes
                    .VomerSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .VomerSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <group position={[0, -0.01, -0.01]}>
              <mesh
                geometry={
                  nodes
                    .EthmoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .EthmoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
              <mesh
                geometry={
                  nodes
                    .EthmoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0_1
                    .geometry
                }
                material={
                  nodes
                    .EthmoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0_1
                    .material
                }
              />
            </group>
            <group position={[0, -0.04, -0.01]}>
              <mesh
                geometry={
                  nodes
                    .FrontalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .FrontalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <group position={[0, -0.02, -0.02]}>
              <mesh
                geometry={
                  nodes
                    .Inferior_conchaeSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .Inferior_conchaeSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <group position={[0.01, -0.01, -0.01]}>
              <mesh
                geometry={
                  nodes
                    .left_lacrimalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .left_lacrimalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <group position={[0.02, 0, 0]}>
              <mesh
                geometry={
                  nodes
                    .Left_maxillaSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .Left_maxillaSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
              <mesh
                geometry={
                  nodes
                    .Left_maxillaSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0_1
                    .geometry
                }
                material={
                  nodes
                    .Left_maxillaSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0_1
                    .material
                }
              />
            </group>
            <group position={[0.01, -0.02, -0.02]}>
              <mesh
                geometry={
                  nodes
                    .Left_nasalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .Left_nasalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <group position={[0.01, 0.01, -0.01]}>
              <mesh
                geometry={
                  nodes
                    .Left_palatineSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .Left_palatineSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <group position={[0.02, -0.01, 0.02]}>
              <mesh
                geometry={
                  nodes
                    .Left_parietalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .Left_parietalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <group position={[0.04, 0, 0]}>
              <mesh
                geometry={
                  nodes
                    .left_temporalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .geometry
                }
                material={
                  nodes
                    .left_temporalSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                    .material
                }
              />
            </group>
            <mesh
              geometry={
                nodes
                  .SphenoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                  .geometry
              }
              material={
                nodes
                  .SphenoidSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                  .material
              }
            />
            <group position={[-0.42, -1.66, 0.93]} rotation={[-0.15, 0.02, 0.05]}>
              <group position={[0, 0.01, -0.02]}>
                <mesh
                  geometry={
                    nodes
                      .Lower_teethSTL_Output_from_geomagic_Studio__________________________________________________pasted__phong3_0
                      .geometry
                  }
                  material={
                    nodes
                      .Lower_teethSTL_Output_from_geomagic_Studio__________________________________________________pasted__phong3_0
                      .material
                  }
                />
              </group>
              <group
                name="MandibleSTL_Output_from_geomagic_Studio_________________________________________________"
                position={[0, 0.03, -0.02]}>
                <mesh
                  geometry={
                    nodes
                      .MandibleSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                      .geometry
                  }
                  material={
                    nodes
                      .MandibleSTL_Output_from_geomagic_Studio__________________________________________________pasted__lambert5_0
                      .material
                  }
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

function Details() {

  const snap = useSnapshot(state)
  if (snap.current === "pasted__phong3") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Human teeth</h1>
        <h1 className="text-xl ">The human teeth function to mechanically break down items of food by cutting and crushing them in preparation for swallowing and digesting. Humans have four types of teeth: incisors, canines, premolars, and molars, which each have a specific function.</h1>
      </div>
    )
  }
  else if (snap.current === "pasted__lambert5") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Frontal Bone</h1>
        <h1 className="text-xl">The frontal bone is a bone in the human skull. The bone consists of two portions. These are the vertically oriented squamous part, and the horizontally oriented orbital part, making up the bony part of the forehead, part of the bony orbital cavity holding the eye, and part of the bony part of the nose respectively.</h1>
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
            <Image width="250" height="250" src="/skullQR.png" alt="" />
          </div>
          <a href="https://go.echo3d.co/4SKp" target="_blank" rel="noreferrer">
            <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
          </a>
        </div>
      </div>
    )
  }
  // return (
  //   <div>
  //     {snap.current}
  //   </div>
  // )
}

export default function Skull() {
  return (
    <>

      <Head>
        <title>Human Skull | Biolearn</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-4 bg-tertiary text-white font-bold">

        <Link href="/bio" passHref><span className="ml-8 cursor-pointer">Go Back</span></Link>

        <div className="grid w-full py-10 place-items-center">
          <h1 className="pb-2 text-5xl font-semibold tracking-wide lg:text-6xl">
            Human Skull
          </h1>
          <div className="inline-flex mt-2 h-1 bg-secondary rounded-full w-96"></div>
          <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">The skull is a bone structure that forms the head in vertebrates. It supports the structures of the face and provides a protective cavity for the brain. The skull is composed of two parts: the cranium and the mandible.</div>
        </div>

        <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

          <div className="w-full h-screen px-4 outline-none md:col-span-2 lg:block cursor-grab">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
              <ambientLight intensity={0.1} />
              <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
              <Suspense fallback={null}>
                <Model scale={0.1} />
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
