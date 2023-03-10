/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 network.gltf --transform
Author: camaal (https://sketchfab.com/camaal)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/knowledge-network-37448fd3933f4394aea66ee92b8f2053
Title: Knowledge Network
*/

import React, { useRef } from 'react'
import { useGLTF  } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/network.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh  geometry={nodes.Default.geometry} material={materials['Scene_-_Root']} position={[1979.77, -1375.57, -1809.22]} rotation={[-Math.PI / 2, 0, 0]} scale={2.3} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/network.glb')
