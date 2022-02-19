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
  const { nodes, materials } = useGLTF('/simple_animal_cell_model/scene.gltf')
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
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.cellmembrane_CellMembrane_0.geometry} material={materials.CellMembrane} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Nucleus_Nucleus_0.geometry} material={materials.Nucleus} />
          </group>
          <group position={[35.12, 16.29, 0.21]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-15.27, 9.58, 29.93]} rotation={[-3.08, 1.18, 2.68]} scale={[0.49, 1, 2.41]}>
              <group position={[13.31, 0, 0.02]}>
                <mesh geometry={nodes.aquaporin_Aquaporin_0.geometry} material={nodes.aquaporin_Aquaporin_0.material} />
              </group>
            </group>
            <group position={[-13.87, -40.97, 6.82]} rotation={[-0.47, -0.14, -1.06]} scale={[0.49, 1, 2.41]}>
              <group position={[13.31, 0, 0.02]}>
                <mesh
                  geometry={nodes.aquaporin_Aquaporin_0_1.geometry}
                  material={nodes.aquaporin_Aquaporin_0_1.material}
                />
              </group>
            </group>
            <group position={[-10.1, 40.93, -0.59]} rotation={[0.35, -0.13, 1.15]} scale={[0.49, 1, 2.41]}>
              <group position={[13.31, 0, 0.02]}>
                <mesh
                  geometry={nodes.aquaporin_Aquaporin_0_2.geometry}
                  material={nodes.aquaporin_Aquaporin_0_2.material}
                />
              </group>
            </group>
            <group position={[2.02, 23.64, -30.09]} rotation={[0.08, 0.59, 0.32]} scale={[0.49, 1, 2.41]}>
              <group position={[13.31, 0, 0.02]}>
                <mesh
                  geometry={nodes.aquaporin_Aquaporin_0_3.geometry}
                  material={nodes.aquaporin_Aquaporin_0_3.material}
                />
              </group>
            </group>
            <group position={[14.97, -5.81, -16.34]} rotation={[0, 0.35, 0]} scale={[0.49, 1, 2.41]}>
              <group position={[13.31, 0, 0.02]}>
                <mesh
                  geometry={nodes.aquaporin_Aquaporin_0_4.geometry}
                  material={nodes.aquaporin_Aquaporin_0_4.material}
                />
              </group>
            </group>
          </group>
          <group position={[50.19, 0.24, 6.06]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.17, 0.47, -0.03]} rotation={[0.01, 0.54, -0.05]}>
              <group position={[0.56, 0, 0]} rotation={[0, 0, Math.PI]}>
                <group position={[-0.01, 0, -0.25]}>
                  <mesh
                    geometry={nodes.phospholipid_Phospholipid_0.geometry}
                    material={nodes.phospholipid_Phospholipid_0.material}
                  />
                </group>
              </group>
              <group position={[-0.56, 0, 0]}>
                <group position={[-0.01, 0, -0.25]}>
                  <mesh
                    geometry={nodes.phospholipid_Phospholipid_0_1.geometry}
                    material={nodes.phospholipid_Phospholipid_0_1.material}
                  />
                </group>
              </group>
            </group>
            <group position={[0.21, 0.81, -0.03]} rotation={[0, 0.54, -0.03]}>
              <group position={[0.56, 0, 0]} rotation={[0, 0, -Math.PI]}>
                <group position={[-0.01, 0, -0.25]}>
                  <mesh
                    geometry={nodes.phospholipid001_Phospholipid_0.geometry}
                    material={nodes.phospholipid001_Phospholipid_0.material}
                  />
                </group>
              </group>
              <group position={[-0.56, 0, 0]}>
                <group position={[-0.01, 0, -0.25]}>
                  <mesh
                    geometry={nodes.phospholipid002_Phospholipid_0.geometry}
                    material={nodes.phospholipid002_Phospholipid_0.material}
                  />
                </group>
              </group>
            </group>
            <group position={[0.25, 1.16, -0.03]} rotation={[0.02, 0.54, -0.05]}>
              <group position={[0.56, 0, 0]} rotation={[0, 0, -Math.PI]}>
                <group position={[-0.01, 0, -0.25]}>
                  <mesh
                    geometry={nodes.phospholipid003_Phospholipid_0.geometry}
                    material={nodes.phospholipid003_Phospholipid_0.material}
                  />
                </group>
              </group>
              <group position={[-0.56, 0, 0]}>
                <group position={[-0.01, 0, -0.25]}>
                  <mesh
                    geometry={nodes.phospholipid004_Phospholipid_0.geometry}
                    material={nodes.phospholipid004_Phospholipid_0.material}
                  />
                </group>
              </group>
            </group>
            <group position={[0.28, 1.53, -0.03]} rotation={[0.03, 0.54, -0.08]}>
              <group position={[0.56, 0, 0]} rotation={[0, 0, Math.PI]}>
                <group position={[-0.01, 0, -0.25]}>
                  <mesh
                    geometry={nodes.phospholipid005_Phospholipid_0.geometry}
                    material={nodes.phospholipid005_Phospholipid_0.material}
                  />
                </group>
              </group>
              <group position={[-0.56, 0, 0]}>
                <group position={[-0.01, 0, -0.25]}>
                  <mesh
                    geometry={nodes.phospholipid006_Phospholipid_0.geometry}
                    material={nodes.phospholipid006_Phospholipid_0.material}
                  />
                </group>
              </group>
            </group>
            <group position={[0.05, -0.38, 0.07]} rotation={[-0.21, 0.52, 0.07]}>
              <group position={[0.56, 0, 0]} rotation={[0, 0, -Math.PI]}>
                <group position={[-0.01, 0, -0.25]}>
                  <mesh
                    geometry={nodes.phospholipid007_Phospholipid_0.geometry}
                    material={nodes.phospholipid007_Phospholipid_0.material}
                  />
                </group>
              </group>
              <group position={[-0.56, 0, 0]}>
                <group position={[-0.01, 0, -0.25]}>
                  <mesh
                    geometry={nodes.phospholipid008_Phospholipid_0.geometry}
                    material={nodes.phospholipid008_Phospholipid_0.material}
                  />
                </group>
              </group>
            </group>
            <group position={[-0.01, -0.77, 0.13]} rotation={[-0.13, 0.54, -0.07]}>
              <group position={[0.56, 0, 0]} rotation={[0, 0, -Math.PI]}>
                <group position={[-0.01, 0, -0.25]}>
                  <mesh
                    geometry={nodes.phospholipid009_Phospholipid_0.geometry}
                    material={nodes.phospholipid009_Phospholipid_0.material}
                  />
                </group>
              </group>
              <group position={[-0.56, 0, 0]}>
                <group position={[-0.01, 0, -0.25]}>
                  <mesh
                    geometry={nodes.phospholipid010_Phospholipid_0.geometry}
                    material={nodes.phospholipid010_Phospholipid_0.material}
                  />
                </group>
              </group>
            </group>
            <group position={[-0.1, -1.13, 0.18]} rotation={[0.09, 0.53, -0.2]}>
              <group position={[0.56, 0, 0]} rotation={[0, 0, Math.PI]}>
                <group position={[-0.01, 0, -0.25]}>
                  <mesh
                    geometry={nodes.phospholipid011_Phospholipid_0.geometry}
                    material={nodes.phospholipid011_Phospholipid_0.material}
                  />
                </group>
              </group>
              <group position={[-0.56, 0, 0]}>
                <group position={[-0.01, 0, -0.25]}>
                  <mesh
                    geometry={nodes.phospholipid012_Phospholipid_0.geometry}
                    material={nodes.phospholipid012_Phospholipid_0.material}
                  />
                </group>
              </group>
            </group>
            <group position={[-0.14, -1.47, 0.25]} rotation={[0.09, 0.53, -0.21]}>
              <group position={[0.56, 0, 0]} rotation={[0, 0, -Math.PI]}>
                <group position={[-0.01, 0, -0.25]}>
                  <mesh
                    geometry={nodes.phospholipid013_Phospholipid_0.geometry}
                    material={nodes.phospholipid013_Phospholipid_0.material}
                  />
                </group>
              </group>
              <group position={[-0.56, 0, 0]}>
                <group position={[-0.01, 0, -0.25]}>
                  <mesh
                    geometry={nodes.phospholipid014_Phospholipid_0.geometry}
                    material={nodes.phospholipid014_Phospholipid_0.material}
                  />
                </group>
              </group>
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.NuclearEnvelope_NuclearEnvelope_0.geometry} material={materials.NuclearEnvelope} />
          </group>
          <group position={[1.54, 0, 0]} rotation={[-1.19, 0.07, 1.22]} scale={[1.31, 1.31, 1.31]}>
            <mesh geometry={nodes.SmoothER_SmoothER_0.geometry} material={materials.SmoothER} />
          </group>
          <group position={[-1.74, -6.04, -31.37]} rotation={[-1.56, -0.04, -1.48]}>
            <mesh geometry={nodes.Golgi_Golgi_0.geometry} material={materials.Golgi} />
          </group>
          <group position={[0.07, -0.78, 0.02]} rotation={[-1.43, 0.23, 0.52]}>
            <group position={[0.19, -0.35, 0.82]}>
              <mesh geometry={nodes.RoughER_RoughER_0.geometry} material={materials.RoughER} />
            </group>
            <group position={[-0.86, -0.19, -0.26]}>
              <group position={[-3.79, -6.7, 10.17]}>
                <mesh
                  geometry={nodes.GeoSphere137_Ribosomes_0.geometry}
                  material={nodes.GeoSphere137_Ribosomes_0.material}
                />
              </group>
              <group position={[-1.34, -6, 8.54]}>
                <mesh
                  geometry={nodes.GeoSphere136_Ribosomes_0.geometry}
                  material={nodes.GeoSphere136_Ribosomes_0.material}
                />
              </group>
              <group position={[3.17, -3.49, 8.05]}>
                <mesh
                  geometry={nodes.GeoSphere135_Ribosomes_0.geometry}
                  material={nodes.GeoSphere135_Ribosomes_0.material}
                />
              </group>
              <group position={[4.36, -2.43, 10.91]}>
                <mesh
                  geometry={nodes.GeoSphere134_Ribosomes_0.geometry}
                  material={nodes.GeoSphere134_Ribosomes_0.material}
                />
              </group>
              <group position={[2.14, -6.93, 9.45]}>
                <mesh
                  geometry={nodes.GeoSphere133_Ribosomes_0.geometry}
                  material={nodes.GeoSphere133_Ribosomes_0.material}
                />
              </group>
              <group position={[4.96, -6.13, 8.9]}>
                <mesh
                  geometry={nodes.GeoSphere132_Ribosomes_0.geometry}
                  material={nodes.GeoSphere132_Ribosomes_0.material}
                />
              </group>
              <group position={[7.37, -2.11, 8.87]}>
                <mesh
                  geometry={nodes.GeoSphere131_Ribosomes_0.geometry}
                  material={nodes.GeoSphere131_Ribosomes_0.material}
                />
              </group>
              <group position={[5.82, -3.25, 6.91]}>
                <mesh
                  geometry={nodes.GeoSphere130_Ribosomes_0.geometry}
                  material={nodes.GeoSphere130_Ribosomes_0.material}
                />
              </group>
              <group position={[5.37, -7.62, 6.91]}>
                <mesh
                  geometry={nodes.GeoSphere129_Ribosomes_0.geometry}
                  material={nodes.GeoSphere129_Ribosomes_0.material}
                />
              </group>
              <group position={[-9.24, -1.08, -1.67]}>
                <mesh
                  geometry={nodes.GeoSphere128_Ribosomes_0.geometry}
                  material={nodes.GeoSphere128_Ribosomes_0.material}
                />
              </group>
              <group position={[-6.01, -2.92, -0.57]}>
                <mesh
                  geometry={nodes.GeoSphere127_Ribosomes_0.geometry}
                  material={nodes.GeoSphere127_Ribosomes_0.material}
                />
              </group>
              <group position={[-7.05, -6.47, -1.39]}>
                <mesh
                  geometry={nodes.GeoSphere126_Ribosomes_0.geometry}
                  material={nodes.GeoSphere126_Ribosomes_0.material}
                />
              </group>
              <group position={[-5.14, -6.47, -3.01]}>
                <mesh
                  geometry={nodes.GeoSphere125_Ribosomes_0.geometry}
                  material={nodes.GeoSphere125_Ribosomes_0.material}
                />
              </group>
              <group position={[-8.51, 0.61, -5.46]}>
                <mesh
                  geometry={nodes.GeoSphere124_Ribosomes_0.geometry}
                  material={nodes.GeoSphere124_Ribosomes_0.material}
                />
              </group>
              <group position={[-6.78, -0.23, -3.72]}>
                <mesh
                  geometry={nodes.GeoSphere123_Ribosomes_0.geometry}
                  material={nodes.GeoSphere123_Ribosomes_0.material}
                />
              </group>
              <group position={[-6.7, -2.68, -4.49]}>
                <mesh
                  geometry={nodes.GeoSphere122_Ribosomes_0.geometry}
                  material={nodes.GeoSphere122_Ribosomes_0.material}
                />
              </group>
              <group position={[-6.29, 5.66, 5.32]}>
                <mesh
                  geometry={nodes.GeoSphere121_Ribosomes_0.geometry}
                  material={nodes.GeoSphere121_Ribosomes_0.material}
                />
              </group>
              <group position={[-9.05, -0.24, 6.73]}>
                <mesh
                  geometry={nodes.GeoSphere120_Ribosomes_0.geometry}
                  material={nodes.GeoSphere120_Ribosomes_0.material}
                />
              </group>
              <group position={[-6.59, 1.33, 5.73]}>
                <mesh
                  geometry={nodes.GeoSphere119_Ribosomes_0.geometry}
                  material={nodes.GeoSphere119_Ribosomes_0.material}
                />
              </group>
              <group position={[-2.69, 5.14, 6.47]}>
                <mesh
                  geometry={nodes.GeoSphere118_Ribosomes_0.geometry}
                  material={nodes.GeoSphere118_Ribosomes_0.material}
                />
              </group>
              <group position={[-1.19, 9.81, 5.42]}>
                <mesh
                  geometry={nodes.GeoSphere117_Ribosomes_0.geometry}
                  material={nodes.GeoSphere117_Ribosomes_0.material}
                />
              </group>
              <group position={[-1.19, 6.21, 8.46]}>
                <mesh
                  geometry={nodes.GeoSphere116_Ribosomes_0.geometry}
                  material={nodes.GeoSphere116_Ribosomes_0.material}
                />
              </group>
              <group position={[-5.78, 7.49, 6.34]}>
                <mesh
                  geometry={nodes.GeoSphere115_Ribosomes_0.geometry}
                  material={nodes.GeoSphere115_Ribosomes_0.material}
                />
              </group>
              <group position={[0.47, 7.56, 5.35]}>
                <mesh
                  geometry={nodes.GeoSphere114_Ribosomes_0.geometry}
                  material={nodes.GeoSphere114_Ribosomes_0.material}
                />
              </group>
              <group position={[2.67, 7.02, 7.07]}>
                <mesh
                  geometry={nodes.GeoSphere113_Ribosomes_0.geometry}
                  material={nodes.GeoSphere113_Ribosomes_0.material}
                />
              </group>
              <group position={[6.56, 3.65, 9.24]}>
                <mesh
                  geometry={nodes.GeoSphere112_Ribosomes_0.geometry}
                  material={nodes.GeoSphere112_Ribosomes_0.material}
                />
              </group>
              <group position={[2.44, 3.65, 9.69]}>
                <mesh
                  geometry={nodes.GeoSphere111_Ribosomes_0.geometry}
                  material={nodes.GeoSphere111_Ribosomes_0.material}
                />
              </group>
              <group position={[1.26, 4.13, 8.71]}>
                <mesh
                  geometry={nodes.GeoSphere110_Ribosomes_0.geometry}
                  material={nodes.GeoSphere110_Ribosomes_0.material}
                />
              </group>
              <group position={[8.05, 2.37, 7.92]}>
                <mesh
                  geometry={nodes.GeoSphere109_Ribosomes_0.geometry}
                  material={nodes.GeoSphere109_Ribosomes_0.material}
                />
              </group>
              <group position={[5.37, 2.45, 6.91]}>
                <mesh
                  geometry={nodes.GeoSphere108_Ribosomes_0.geometry}
                  material={nodes.GeoSphere108_Ribosomes_0.material}
                />
              </group>
              <group position={[7.82, 3.13, -0.65]}>
                <mesh
                  geometry={nodes.GeoSphere107_Ribosomes_0.geometry}
                  material={nodes.GeoSphere107_Ribosomes_0.material}
                />
              </group>
              <group position={[10.28, 2.98, 2.36]}>
                <mesh
                  geometry={nodes.GeoSphere106_Ribosomes_0.geometry}
                  material={nodes.GeoSphere106_Ribosomes_0.material}
                />
              </group>
              <group position={[8.68, -1.21, 3.23]}>
                <mesh
                  geometry={nodes.GeoSphere105_Ribosomes_0.geometry}
                  material={nodes.GeoSphere105_Ribosomes_0.material}
                />
              </group>
              <group position={[9.96, -3.07, 4.59]}>
                <mesh
                  geometry={nodes.GeoSphere104_Ribosomes_0.geometry}
                  material={nodes.GeoSphere104_Ribosomes_0.material}
                />
              </group>
              <group position={[10.05, -5.94, 5.1]}>
                <mesh
                  geometry={nodes.GeoSphere103_Ribosomes_0.geometry}
                  material={nodes.GeoSphere103_Ribosomes_0.material}
                />
              </group>
              <group position={[10.96, -6.5, 1.9]}>
                <mesh
                  geometry={nodes.GeoSphere102_Ribosomes_0.geometry}
                  material={nodes.GeoSphere102_Ribosomes_0.material}
                />
              </group>
              <group position={[9.1, -1.75, 1.07]}>
                <mesh
                  geometry={nodes.GeoSphere101_Ribosomes_0.geometry}
                  material={nodes.GeoSphere101_Ribosomes_0.material}
                />
              </group>
              <group position={[10.57, -3.87, 1.97]}>
                <mesh
                  geometry={nodes.GeoSphere100_Ribosomes_0.geometry}
                  material={nodes.GeoSphere100_Ribosomes_0.material}
                />
              </group>
              <group position={[9.01, -5.1, 1.4]}>
                <mesh
                  geometry={nodes.GeoSphere099_Ribosomes_0.geometry}
                  material={nodes.GeoSphere099_Ribosomes_0.material}
                />
              </group>
              <group position={[5.63, 1.25, -9.07]}>
                <mesh
                  geometry={nodes.GeoSphere098_Ribosomes_0.geometry}
                  material={nodes.GeoSphere098_Ribosomes_0.material}
                />
              </group>
              <group position={[1.11, 0.61, -9.02]}>
                <mesh
                  geometry={nodes.GeoSphere097_Ribosomes_0.geometry}
                  material={nodes.GeoSphere097_Ribosomes_0.material}
                />
              </group>
              <group position={[1.92, -4.61, -9.45]}>
                <mesh
                  geometry={nodes.GeoSphere096_Ribosomes_0.geometry}
                  material={nodes.GeoSphere096_Ribosomes_0.material}
                />
              </group>
              <group position={[0.84, -1.45, -9.26]}>
                <mesh
                  geometry={nodes.GeoSphere095_Ribosomes_0.geometry}
                  material={nodes.GeoSphere095_Ribosomes_0.material}
                />
              </group>
              <group position={[0.35, 1.63, -7.19]}>
                <mesh
                  geometry={nodes.GeoSphere094_Ribosomes_0.geometry}
                  material={nodes.GeoSphere094_Ribosomes_0.material}
                />
              </group>
              <group position={[0.78, 1.16, -7.98]}>
                <mesh
                  geometry={nodes.GeoSphere093_Ribosomes_0.geometry}
                  material={nodes.GeoSphere093_Ribosomes_0.material}
                />
              </group>
              <group position={[1.8, 3.91, -8.78]}>
                <mesh
                  geometry={nodes.GeoSphere092_Ribosomes_0.geometry}
                  material={nodes.GeoSphere092_Ribosomes_0.material}
                />
              </group>
              <group position={[8.36, 2.5, -4.92]}>
                <mesh
                  geometry={nodes.GeoSphere091_Ribosomes_0.geometry}
                  material={nodes.GeoSphere091_Ribosomes_0.material}
                />
              </group>
              <group position={[8.46, 4.26, -5.12]}>
                <mesh
                  geometry={nodes.GeoSphere090_Ribosomes_0.geometry}
                  material={nodes.GeoSphere090_Ribosomes_0.material}
                />
              </group>
              <group position={[9.97, 2.31, -4.73]}>
                <mesh
                  geometry={nodes.GeoSphere089_Ribosomes_0.geometry}
                  material={nodes.GeoSphere089_Ribosomes_0.material}
                />
              </group>
              <group position={[9.02, 1.54, -2.42]}>
                <mesh
                  geometry={nodes.GeoSphere088_Ribosomes_0.geometry}
                  material={nodes.GeoSphere088_Ribosomes_0.material}
                />
              </group>
              <group position={[11, 0.62, 0.45]}>
                <mesh
                  geometry={nodes.GeoSphere087_Ribosomes_0.geometry}
                  material={nodes.GeoSphere087_Ribosomes_0.material}
                />
              </group>
              <group position={[11.37, 3.88, 1.48]}>
                <mesh
                  geometry={nodes.GeoSphere086_Ribosomes_0.geometry}
                  material={nodes.GeoSphere086_Ribosomes_0.material}
                />
              </group>
              <group position={[10.44, 5.07, -1.17]}>
                <mesh
                  geometry={nodes.GeoSphere085_Ribosomes_0.geometry}
                  material={nodes.GeoSphere085_Ribosomes_0.material}
                />
              </group>
              <group position={[9.8, 5.07, -2.78]}>
                <mesh
                  geometry={nodes.GeoSphere084_Ribosomes_0.geometry}
                  material={nodes.GeoSphere084_Ribosomes_0.material}
                />
              </group>
              <group position={[6.81, 4.03, -2.79]}>
                <mesh
                  geometry={nodes.GeoSphere083_Ribosomes_0.geometry}
                  material={nodes.GeoSphere083_Ribosomes_0.material}
                />
              </group>
              <group position={[-3.68, -6.92, -5.11]}>
                <mesh
                  geometry={nodes.GeoSphere082_Ribosomes_0.geometry}
                  material={nodes.GeoSphere082_Ribosomes_0.material}
                />
              </group>
              <group position={[-2.48, -6.04, -4.53]}>
                <mesh
                  geometry={nodes.GeoSphere081_Ribosomes_0.geometry}
                  material={nodes.GeoSphere081_Ribosomes_0.material}
                />
              </group>
              <group position={[-0.49, -5.48, -4.01]}>
                <mesh
                  geometry={nodes.GeoSphere080_Ribosomes_0.geometry}
                  material={nodes.GeoSphere080_Ribosomes_0.material}
                />
              </group>
              <group position={[4.34, -6.66, -3.95]}>
                <mesh
                  geometry={nodes.GeoSphere079_Ribosomes_0.geometry}
                  material={nodes.GeoSphere079_Ribosomes_0.material}
                />
              </group>
              <group position={[6.27, -9.02, -3.92]}>
                <mesh
                  geometry={nodes.GeoSphere078_Ribosomes_0.geometry}
                  material={nodes.GeoSphere078_Ribosomes_0.material}
                />
              </group>
              <group position={[6.27, -9.02, -2.4]}>
                <mesh
                  geometry={nodes.GeoSphere077_Ribosomes_0.geometry}
                  material={nodes.GeoSphere077_Ribosomes_0.material}
                />
              </group>
              <group position={[6.27, -9.81, -2.69]}>
                <mesh
                  geometry={nodes.GeoSphere076_Ribosomes_0.geometry}
                  material={nodes.GeoSphere076_Ribosomes_0.material}
                />
              </group>
              <group position={[6, -6.65, 0.28]}>
                <mesh
                  geometry={nodes.GeoSphere075_Ribosomes_0.geometry}
                  material={nodes.GeoSphere075_Ribosomes_0.material}
                />
              </group>
              <group position={[8.44, -7.6, 1.4]}>
                <mesh
                  geometry={nodes.GeoSphere074_Ribosomes_0.geometry}
                  material={nodes.GeoSphere074_Ribosomes_0.material}
                />
              </group>
              <group position={[3.34, 7.14, -5]}>
                <mesh
                  geometry={nodes.GeoSphere073_Ribosomes_0.geometry}
                  material={nodes.GeoSphere073_Ribosomes_0.material}
                />
              </group>
              <group position={[4.05, 7.6, -5]}>
                <mesh
                  geometry={nodes.GeoSphere072_Ribosomes_0.geometry}
                  material={nodes.GeoSphere072_Ribosomes_0.material}
                />
              </group>
              <group position={[3.97, 8.75, -5.4]}>
                <mesh
                  geometry={nodes.GeoSphere071_Ribosomes_0.geometry}
                  material={nodes.GeoSphere071_Ribosomes_0.material}
                />
              </group>
              <group position={[1.9, 9.27, -5.56]}>
                <mesh
                  geometry={nodes.GeoSphere070_Ribosomes_0.geometry}
                  material={nodes.GeoSphere070_Ribosomes_0.material}
                />
              </group>
              <group position={[1.88, 7.98, -5.11]}>
                <mesh
                  geometry={nodes.GeoSphere069_Ribosomes_0.geometry}
                  material={nodes.GeoSphere069_Ribosomes_0.material}
                />
              </group>
              <group position={[-0.06, 4.31, -6.38]}>
                <mesh
                  geometry={nodes.GeoSphere068_Ribosomes_0.geometry}
                  material={nodes.GeoSphere068_Ribosomes_0.material}
                />
              </group>
              <group position={[3.38, 0.41, -6.66]}>
                <mesh
                  geometry={nodes.GeoSphere067_Ribosomes_0.geometry}
                  material={nodes.GeoSphere067_Ribosomes_0.material}
                />
              </group>
              <group position={[5.9, 3.66, -8.43]}>
                <mesh
                  geometry={nodes.GeoSphere066_Ribosomes_0.geometry}
                  material={nodes.GeoSphere066_Ribosomes_0.material}
                />
              </group>
              <group position={[1.44, 5.85, -9.61]}>
                <mesh
                  geometry={nodes.GeoSphere065_Ribosomes_0.geometry}
                  material={nodes.GeoSphere065_Ribosomes_0.material}
                />
              </group>
              <group position={[1.22, 5.85, -7.46]}>
                <mesh
                  geometry={nodes.GeoSphere064_Ribosomes_0.geometry}
                  material={nodes.GeoSphere064_Ribosomes_0.material}
                />
              </group>
              <group position={[2.47, -3.93, -8.35]}>
                <mesh
                  geometry={nodes.GeoSphere063_Ribosomes_0.geometry}
                  material={nodes.GeoSphere063_Ribosomes_0.material}
                />
              </group>
              <group position={[3, -2.37, -6.06]}>
                <mesh
                  geometry={nodes.GeoSphere062_Ribosomes_0.geometry}
                  material={nodes.GeoSphere062_Ribosomes_0.material}
                />
              </group>
              <group position={[1.77, -2.75, -7.63]}>
                <mesh
                  geometry={nodes.GeoSphere061_Ribosomes_0.geometry}
                  material={nodes.GeoSphere061_Ribosomes_0.material}
                />
              </group>
              <group position={[1.37, -2.27, -6.66]}>
                <mesh
                  geometry={nodes.GeoSphere060_Ribosomes_0.geometry}
                  material={nodes.GeoSphere060_Ribosomes_0.material}
                />
              </group>
              <group position={[0.4, -6.95, -5.38]}>
                <mesh
                  geometry={nodes.GeoSphere059_Ribosomes_0.geometry}
                  material={nodes.GeoSphere059_Ribosomes_0.material}
                />
              </group>
              <group position={[0.4, -6.95, -7]}>
                <mesh
                  geometry={nodes.GeoSphere058_Ribosomes_0.geometry}
                  material={nodes.GeoSphere058_Ribosomes_0.material}
                />
              </group>
              <group position={[3.96, -6.16, -7]}>
                <mesh
                  geometry={nodes.GeoSphere057_Ribosomes_0.geometry}
                  material={nodes.GeoSphere057_Ribosomes_0.material}
                />
              </group>
              <group position={[4.45, -5.71, -6.46]}>
                <mesh
                  geometry={nodes.GeoSphere056_Ribosomes_0.geometry}
                  material={nodes.GeoSphere056_Ribosomes_0.material}
                />
              </group>
              <group position={[5.5, -5.27, -6.48]}>
                <mesh
                  geometry={nodes.GeoSphere055_Ribosomes_0.geometry}
                  material={nodes.GeoSphere055_Ribosomes_0.material}
                />
              </group>
              <group position={[4.67, -6.42, -7.38]}>
                <mesh
                  geometry={nodes.GeoSphere054_Ribosomes_0.geometry}
                  material={nodes.GeoSphere054_Ribosomes_0.material}
                />
              </group>
              <group position={[3.88, -7.31, -7.99]}>
                <mesh
                  geometry={nodes.GeoSphere053_Ribosomes_0.geometry}
                  material={nodes.GeoSphere053_Ribosomes_0.material}
                />
              </group>
              <group position={[6.76, -7.88, -6.65]}>
                <mesh
                  geometry={nodes.GeoSphere052_Ribosomes_0.geometry}
                  material={nodes.GeoSphere052_Ribosomes_0.material}
                />
              </group>
              <group position={[6.83, -6.03, -8]}>
                <mesh
                  geometry={nodes.GeoSphere051_Ribosomes_0.geometry}
                  material={nodes.GeoSphere051_Ribosomes_0.material}
                />
              </group>
              <group position={[6.48, -6.06, -6.74]}>
                <mesh
                  geometry={nodes.GeoSphere050_Ribosomes_0.geometry}
                  material={nodes.GeoSphere050_Ribosomes_0.material}
                />
              </group>
              <group position={[7.02, -5.04, -8.05]}>
                <mesh
                  geometry={nodes.GeoSphere049_Ribosomes_0.geometry}
                  material={nodes.GeoSphere049_Ribosomes_0.material}
                />
              </group>
              <group position={[6.43, -5.03, -7.17]}>
                <mesh
                  geometry={nodes.GeoSphere048_Ribosomes_0.geometry}
                  material={nodes.GeoSphere048_Ribosomes_0.material}
                />
              </group>
              <group position={[6.5, -3.29, -8.11]}>
                <mesh
                  geometry={nodes.GeoSphere047_Ribosomes_0.geometry}
                  material={nodes.GeoSphere047_Ribosomes_0.material}
                />
              </group>
              <group position={[6.5, -2.74, -9.12]}>
                <mesh
                  geometry={nodes.GeoSphere046_Ribosomes_0.geometry}
                  material={nodes.GeoSphere046_Ribosomes_0.material}
                />
              </group>
              <group position={[6.12, -1.54, -8.52]}>
                <mesh
                  geometry={nodes.GeoSphere045_Ribosomes_0.geometry}
                  material={nodes.GeoSphere045_Ribosomes_0.material}
                />
              </group>
              <group position={[6.12, -1.96, -7.74]}>
                <mesh
                  geometry={nodes.GeoSphere044_Ribosomes_0.geometry}
                  material={nodes.GeoSphere044_Ribosomes_0.material}
                />
              </group>
              <group position={[4.86, -1.33, -7.73]}>
                <mesh
                  geometry={nodes.GeoSphere043_Ribosomes_0.geometry}
                  material={nodes.GeoSphere043_Ribosomes_0.material}
                />
              </group>
              <group position={[4.86, -1.33, -8.52]}>
                <mesh
                  geometry={nodes.GeoSphere042_Ribosomes_0.geometry}
                  material={nodes.GeoSphere042_Ribosomes_0.material}
                />
              </group>
              <group position={[3.83, -0.68, -7.65]}>
                <mesh
                  geometry={nodes.GeoSphere041_Ribosomes_0.geometry}
                  material={nodes.GeoSphere041_Ribosomes_0.material}
                />
              </group>
              <group position={[3.29, 5.07, -4.6]}>
                <mesh
                  geometry={nodes.GeoSphere040_Ribosomes_0.geometry}
                  material={nodes.GeoSphere040_Ribosomes_0.material}
                />
              </group>
              <group position={[3.76, 5.64, -5.11]}>
                <mesh
                  geometry={nodes.GeoSphere039_Ribosomes_0.geometry}
                  material={nodes.GeoSphere039_Ribosomes_0.material}
                />
              </group>
              <group position={[4.16, 5.35, -5.97]}>
                <mesh
                  geometry={nodes.GeoSphere038_Ribosomes_0.geometry}
                  material={nodes.GeoSphere038_Ribosomes_0.material}
                />
              </group>
              <group position={[1.13, 5.35, -6.45]}>
                <mesh
                  geometry={nodes.GeoSphere037_Ribosomes_0.geometry}
                  material={nodes.GeoSphere037_Ribosomes_0.material}
                />
              </group>
              <group position={[1.28, 4.17, -6.31]}>
                <mesh
                  geometry={nodes.GeoSphere036_Ribosomes_0.geometry}
                  material={nodes.GeoSphere036_Ribosomes_0.material}
                />
              </group>
              <group position={[0.89, 5.52, -6.34]}>
                <mesh
                  geometry={nodes.GeoSphere035_Ribosomes_0.geometry}
                  material={nodes.GeoSphere035_Ribosomes_0.material}
                />
              </group>
              <group position={[0.73, 6.88, -2.59]}>
                <mesh
                  geometry={nodes.GeoSphere034_Ribosomes_0.geometry}
                  material={nodes.GeoSphere034_Ribosomes_0.material}
                />
              </group>
              <group position={[-1.79, 7.76, -2.86]}>
                <mesh
                  geometry={nodes.GeoSphere033_Ribosomes_0.geometry}
                  material={nodes.GeoSphere033_Ribosomes_0.material}
                />
              </group>
              <group position={[-0.49, 8.48, -4.78]}>
                <mesh
                  geometry={nodes.GeoSphere032_Ribosomes_0.geometry}
                  material={nodes.GeoSphere032_Ribosomes_0.material}
                />
              </group>
              <group position={[-11.37, 3.59, -2.37]}>
                <mesh
                  geometry={nodes.GeoSphere031_Ribosomes_0.geometry}
                  material={nodes.GeoSphere031_Ribosomes_0.material}
                />
              </group>
              <group position={[-2.61, 7.07, -7.2]}>
                <mesh
                  geometry={nodes.GeoSphere030_Ribosomes_0.geometry}
                  material={nodes.GeoSphere030_Ribosomes_0.material}
                />
              </group>
              <group position={[-6.78, 5.84, -2.37]}>
                <mesh
                  geometry={nodes.GeoSphere029_Ribosomes_0.geometry}
                  material={nodes.GeoSphere029_Ribosomes_0.material}
                />
              </group>
              <group position={[-3.36, 6.23, -6.09]}>
                <mesh
                  geometry={nodes.GeoSphere028_Ribosomes_0.geometry}
                  material={nodes.GeoSphere028_Ribosomes_0.material}
                />
              </group>
              <group position={[-6.21, 5.07, -5.7]}>
                <mesh
                  geometry={nodes.GeoSphere027_Ribosomes_0.geometry}
                  material={nodes.GeoSphere027_Ribosomes_0.material}
                />
              </group>
              <group position={[-1.07, 5, -4.33]}>
                <mesh
                  geometry={nodes.GeoSphere026_Ribosomes_0.geometry}
                  material={nodes.GeoSphere026_Ribosomes_0.material}
                />
              </group>
              <group position={[1.4, 0.92, -10.91]}>
                <mesh
                  geometry={nodes.GeoSphere025_Ribosomes_0.geometry}
                  material={nodes.GeoSphere025_Ribosomes_0.material}
                />
              </group>
              <group position={[-1.82, 9.26, -4.75]}>
                <mesh
                  geometry={nodes.GeoSphere024_Ribosomes_0.geometry}
                  material={nodes.GeoSphere024_Ribosomes_0.material}
                />
              </group>
              <group position={[-3.16, 5.72, -4.51]}>
                <mesh
                  geometry={nodes.GeoSphere023_Ribosomes_0.geometry}
                  material={nodes.GeoSphere023_Ribosomes_0.material}
                />
              </group>
              <group position={[-8.47, 6.21, -2.15]}>
                <mesh
                  geometry={nodes.GeoSphere022_Ribosomes_0.geometry}
                  material={nodes.GeoSphere022_Ribosomes_0.material}
                />
              </group>
              <group position={[-4.92, 5.49, -1.2]}>
                <mesh
                  geometry={nodes.GeoSphere021_Ribosomes_0.geometry}
                  material={nodes.GeoSphere021_Ribosomes_0.material}
                />
              </group>
              <group position={[-6.99, 5.36, -2.03]}>
                <mesh
                  geometry={nodes.GeoSphere020_Ribosomes_0.geometry}
                  material={nodes.GeoSphere020_Ribosomes_0.material}
                />
              </group>
              <group position={[-7.71, 6.57, 2.5]}>
                <mesh
                  geometry={nodes.GeoSphere019_Ribosomes_0.geometry}
                  material={nodes.GeoSphere019_Ribosomes_0.material}
                />
              </group>
              <group position={[-10.79, 3.56, 2.11]}>
                <mesh
                  geometry={nodes.GeoSphere018_Ribosomes_0.geometry}
                  material={nodes.GeoSphere018_Ribosomes_0.material}
                />
              </group>
              <group position={[-9.84, 1.82, 2.22]}>
                <mesh
                  geometry={nodes.GeoSphere017_Ribosomes_0.geometry}
                  material={nodes.GeoSphere017_Ribosomes_0.material}
                />
              </group>
              <group position={[-7.96, 2.4, 2.09]}>
                <mesh
                  geometry={nodes.GeoSphere016_Ribosomes_0.geometry}
                  material={nodes.GeoSphere016_Ribosomes_0.material}
                />
              </group>
              <group position={[-6.2, 3.3, 2.99]}>
                <mesh
                  geometry={nodes.GeoSphere015_Ribosomes_0.geometry}
                  material={nodes.GeoSphere015_Ribosomes_0.material}
                />
              </group>
              <group position={[-5.47, 2.97, 5.23]}>
                <mesh
                  geometry={nodes.GeoSphere014_Ribosomes_0.geometry}
                  material={nodes.GeoSphere014_Ribosomes_0.material}
                />
              </group>
              <group position={[-5.11, -6.38, 4.18]}>
                <mesh
                  geometry={nodes.GeoSphere013_Ribosomes_0.geometry}
                  material={nodes.GeoSphere013_Ribosomes_0.material}
                />
              </group>
              <group position={[-6.12, -4.52, 3.23]}>
                <mesh
                  geometry={nodes.GeoSphere012_Ribosomes_0.geometry}
                  material={nodes.GeoSphere012_Ribosomes_0.material}
                />
              </group>
              <group position={[-6.19, -3.61, 2.9]}>
                <mesh
                  geometry={nodes.GeoSphere011_Ribosomes_0.geometry}
                  material={nodes.GeoSphere011_Ribosomes_0.material}
                />
              </group>
              <group position={[-6.65, -2.62, 5.49]}>
                <mesh
                  geometry={nodes.GeoSphere010_Ribosomes_0.geometry}
                  material={nodes.GeoSphere010_Ribosomes_0.material}
                />
              </group>
              <group position={[-8.26, -3.11, 2.72]}>
                <mesh
                  geometry={nodes.GeoSphere009_Ribosomes_0.geometry}
                  material={nodes.GeoSphere009_Ribosomes_0.material}
                />
              </group>
              <group position={[-8.91, -5.44, 2.92]}>
                <mesh
                  geometry={nodes.GeoSphere008_Ribosomes_0.geometry}
                  material={nodes.GeoSphere008_Ribosomes_0.material}
                />
              </group>
              <group position={[-8.15, -7.01, 0.11]}>
                <mesh
                  geometry={nodes.GeoSphere007_Ribosomes_0.geometry}
                  material={nodes.GeoSphere007_Ribosomes_0.material}
                />
              </group>
              <group position={[-5.52, -5.52, 0.32]}>
                <mesh
                  geometry={nodes.GeoSphere006_Ribosomes_0.geometry}
                  material={nodes.GeoSphere006_Ribosomes_0.material}
                />
              </group>
              <group position={[-4.72, -4.51, 3.99]}>
                <mesh
                  geometry={nodes.GeoSphere005_Ribosomes_0.geometry}
                  material={nodes.GeoSphere005_Ribosomes_0.material}
                />
              </group>
              <group position={[-7.32, -5.71, 4.73]}>
                <mesh
                  geometry={nodes.GeoSphere004_Ribosomes_0.geometry}
                  material={nodes.GeoSphere004_Ribosomes_0.material}
                />
              </group>
              <group position={[-6.61, -5.51, 3.74]}>
                <mesh
                  geometry={nodes.GeoSphere003_Ribosomes_0.geometry}
                  material={nodes.GeoSphere003_Ribosomes_0.material}
                />
              </group>
              <group position={[-7.54, -6.28, 2.04]}>
                <mesh
                  geometry={nodes.GeoSphere002_Ribosomes_0.geometry}
                  material={nodes.GeoSphere002_Ribosomes_0.material}
                />
              </group>
              <group position={[-7.66, -6.62, 0.44]} scale={[1.36, 1.36, 1.36]}>
                <mesh
                  geometry={nodes.GeoSphere001_Ribosomes_0.geometry}
                  material={nodes.GeoSphere001_Ribosomes_0.material}
                />
              </group>
            </group>
          </group>
          <group position={[-2.35, 5.9, -10.4]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-14.29, -14.72, 23.15]} scale={[1, 1.55, 1]}>
              <mesh geometry={nodes.vacuole001_Vacuole_0.geometry} material={nodes.vacuole001_Vacuole_0.material} />
            </group>
            <group position={[-14.29, 21.08, 8]} scale={[1, 1.55, 1]}>
              <mesh geometry={nodes.vacuole002_Vacuole_0.geometry} material={nodes.vacuole002_Vacuole_0.material} />
            </group>
            <group position={[14.04, 22.26, -24.08]} scale={[1, 1.55, 1]}>
              <mesh geometry={nodes.vacuole003_Vacuole_0.geometry} material={nodes.vacuole003_Vacuole_0.material} />
            </group>
            <group position={[-14.29, -22.78, -24.08]} scale={[1, 1.55, 1]}>
              <mesh geometry={nodes.vacuole004_Vacuole_0.geometry} material={nodes.vacuole004_Vacuole_0.material} />
            </group>
          </group>
          <group position={[1.22, 11.94, -7.37]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-20.2, 26.64, -20.24]} rotation={[-0.32, -0.18, 0.49]} scale={[1, 1.55, 1]}>
              <mesh
                geometry={nodes.mitochondria008_Mitochondria_0.geometry}
                material={nodes.mitochondria008_Mitochondria_0.material}
              />
            </group>
            <group position={[-20.2, 10.76, 7.06]} rotation={[1.03, -1.1, -1.98]} scale={[1, 1.55, 1]}>
              <mesh
                geometry={nodes.mitochondria007_Mitochondria_0.geometry}
                material={nodes.mitochondria007_Mitochondria_0.material}
              />
            </group>
            <group position={[-23.41, -25.12, 1.26]} rotation={[1.99, -1.26, -0.57]} scale={[1, 1.55, 1]}>
              <mesh
                geometry={nodes.mitochondria006_Mitochondria_0.geometry}
                material={nodes.mitochondria006_Mitochondria_0.material}
              />
            </group>
            <group position={[10.47, 5.23, 20.41]} rotation={[-0.08, -0.61, -0.2]} scale={[1, 1.55, 1]}>
              <mesh
                geometry={nodes.mitochondria003_Mitochondria_0.geometry}
                material={nodes.mitochondria003_Mitochondria_0.material}
              />
            </group>
            <group position={[22.71, 8.52, 18.95]} rotation={[1.73, 0.78, -0.78]} scale={[0.56, 0.56, 0.56]}>
              <mesh
                geometry={nodes.Mitochondria001_Mitochondria_0.geometry}
                material={nodes.Mitochondria001_Mitochondria_0.material}
              />
            </group>
            <group position={[-20.24, -26.64, 2.88]} rotation={[-1.4, 1, -2.77]} scale={[0.56, 0.56, 0.56]}>
              <mesh
                geometry={nodes.Mitochondria_Mitochondria_0.geometry}
                material={nodes.Mitochondria_Mitochondria_0.material}
              />
            </group>
          </group>
          <group position={[4.7, 10.95, 14]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[25.88, 14, -15.18]} rotation={[Math.PI / 2, -0.95, 0]}>
              <mesh geometry={nodes.Centriol_Centrioles_0.geometry} material={nodes.Centriol_Centrioles_0.material} />
            </group>
            <group position={[8.98, -11.84, -3.23]} rotation={[2.42, -0.51, 1.16]}>
              <mesh
                geometry={nodes.Centriol001_Centrioles_0.geometry}
                material={nodes.Centriol001_Centrioles_0.material}
              />
            </group>
            <group position={[-22.49, 14, 13.34]} rotation={[0.4, -1.04, -1.22]}>
              <mesh
                geometry={nodes.Centriol002_Centrioles_0.geometry}
                material={nodes.Centriol002_Centrioles_0.material}
              />
            </group>
          </group>
          <group position={[2.82, 7.31, -0.18]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[21.42, 13.31, -23.75]}>
              <mesh geometry={nodes.Lysosome003_Lysosome_0.geometry} material={nodes.Lysosome003_Lysosome_0.material} />
            </group>
            <group position={[22.14, -19.68, -21.69]}>
              <mesh geometry={nodes.Lysosome002_Lysosome_0.geometry} material={nodes.Lysosome002_Lysosome_0.material} />
            </group>
            <group position={[-22.14, -25.82, -2.85]}>
              <mesh geometry={nodes.Lysosome001_Lysosome_0.geometry} material={nodes.Lysosome001_Lysosome_0.material} />
            </group>
            <group position={[21.42, 25.82, 19.75]}>
              <mesh geometry={nodes.Lysosome_Lysosome_0.geometry} material={nodes.Lysosome_Lysosome_0.material} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

function Details() {

  const snap = useSnapshot(state)
  if (snap.current === "Mitochondria") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Mitochondria</h1>
        <h1 className="text-xl ">Mitochondria are membrane-bound cell organelles (mitochondrion, singular) that generate most of the chemical energy needed to power the cell's biochemical reactions. Chemical energy produced by the mitochondria is stored in a small molecule called adenosine triphosphate (ATP).</h1>
      </div>
    )
  }
  else if (snap.current === "SmoothER") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Smooth ER</h1>
        <h1 className="text-xl">smooth endoplasmic reticulum (SER), meshwork of fine disklike tubular membrane vesicles, part of a continuous membrane organelle within the cytoplasm of eukaryotic cells, that is involved in the synthesis and storage of lipids, including cholesterol and phospholipids.</h1>
      </div>
    )
  }
  else if (snap.current === "Lysosome") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Lysosome</h1>
        <h1 className="text-xl">A lysosome has three main functions: the breakdown/digestion of macromolecules (carbohydrates, lipids, proteins, and nucleic acids), cell membrane repairs, and responses against foreign substances such as bacteria, viruses and other antigens.</h1>
      </div>
    )
  }
  else if (snap.current === "CellMembrane") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Cell Membrane</h1>
        <h1 className="text-xl">The cell membrane, also called the plasma membrane, is found in all cells and separates the interior of the cell from the outside environment. The cell membrane consists of a lipid bilayer that is semipermeable.</h1>
      </div>
    )
  }
  else if (snap.current === "Golgi") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Golgi apparatus</h1>
        <h1 className="text-xl">A Golgi body, also known as a Golgi apparatus, is a cell organelle that helps process and package proteins and lipid molecules, especially proteins destined to be exported from the cell.</h1>
      </div>
    )
  }
  else if (snap.current === "RoughER") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Rough ER</h1>
        <h1 className="text-xl">rough endoplasmic reticulum (RER), series of connected flattened sacs, part of a continuous membrane organelle within the cytoplasm of eukaryotic cells, that plays a central role in the synthesis of proteins.</h1>
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

export default function AnimalCell() {
  return (
    <>

      <Head>
        <title>Animal Cell | Biolearn</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-4 bg-tertiary text-white font-bold">

        <Link href="/bio" passHref><span className="ml-8 cursor-pointer">Go Back</span></Link>

        <div className="grid w-full py-10 place-items-center">
          <h1 className="pb-2 text-5xl font-semibold tracking-wide lg:text-6xl">
            Animal Cell
          </h1>
          <div className="inline-flex mt-2 h-1 bg-secondary rounded-full w-96"></div>
          <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">Animal cells range in size from a few microscopic microns to few millimetres. The largest known animal cell is the ostrich egg, which can stretch over 5.1 inches across and weighs about 1.4 kilograms.  This is in stark contrast to the neuron in the human body, which is just 100 microns across.
          </div>
        </div>

        <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

          <div className="w-full h-screen px-4 outline-none md:col-span-2 lg:block cursor-grab">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
              <ambientLight intensity={0.1} />
              <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
              <Suspense fallback={null}>
                <Model scale={0.02} />
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
