/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: gabrielyuen (https://sketchfab.com/gabrielyuen)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/segmentation-of-lungs-and-spinal-column-53341767b4a44521b01a42ff8846b089
title: Segmentation of Lungs and Spinal Column
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-8.52, 149.23, -149.23]} rotation={[0, 0, Math.PI]}>
        <mesh geometry={nodes.Object_2.geometry} material={nodes.Object_2.material} />
        <mesh geometry={nodes.Object_3.geometry} material={nodes.Object_3.material} />
        <mesh geometry={nodes.Object_4.geometry} material={nodes.Object_4.material} />
        <mesh geometry={nodes.Object_5.geometry} material={nodes.Object_5.material} />
        <mesh geometry={nodes.Object_6.geometry} material={nodes.Object_6.material} />
        <mesh geometry={nodes.Object_7.geometry} material={nodes.Object_7.material} />
        <mesh geometry={nodes.Object_8.geometry} material={nodes.Object_8.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
