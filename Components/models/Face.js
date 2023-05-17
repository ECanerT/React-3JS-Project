import React, { useRef,Suspense } from 'react'
import {Canvas,useLoader} from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls, Stars} from "@react-three/drei";
import { useGLTF } from '@react-three/drei'
import demon from './demon.glb'

function Face(props) {
    const group = useRef()
  const { nodes, materials } = useGLTF('/demon.glb')
  return (
    <div className='Face' style={{backgroundColor:'black'}}>
         <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Curve007_1.geometry} material={materials['Material.001']} />
      <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} />
    </group>
    </div>
  )
}
useGLTF.preload('/demon.glb')
export default Face