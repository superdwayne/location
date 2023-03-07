/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Bernardo  Lucas (https://sketchfab.com/BernardoLucas)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/planet-earth-6fd2c9748b12401ca087ed805ebf579d
title: planet Earth
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function World(props) {
  const { nodes, materials } = useGLTF('/6fd2c9748b12401ca087ed805ebf579d.glb')
  return (
    <group {...props} dispose={null} scale="0.7">
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.planeta_terra} />
      </group>
    </group>
  )
}

useGLTF.preload('/6fd2c9748b12401ca087ed805ebf579d.glb')
