/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Vida Systems (https://sketchfab.com/objects1)
license: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
source: https://sketchfab.com/3d-models/plant-cell-cell-structure-1c5ce80d03d149208d30cc5aeb6e42fb
title: Plant Cell - Cell Structure
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
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

useGLTF.preload('/scene.gltf')
