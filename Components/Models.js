import React, { useEffect, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from "@react-three/drei";
import model from './face2.glb'
import { AmbientLight, DirectionalLight } from 'three';
import {ListGroup,ListGroupItem} from 'react-bootstrap'



function Models() {
   
    const gltf = useLoader(GLTFLoader, model);
    const[color,setColor] = useState(0);
  return (
   
    <div>
    <Canvas style={{ height:'800px',background: "#171717" }}>
    <OrbitControls></OrbitControls>
    <pointLight position={[10, 10, 10]}  />
        <ambientLight intensity={0.4} />
        <primitive object={gltf.scene} scale={0.4} position={[color,color,color]} />
       
        
    </Canvas>
    <ListGroup>
          <ListGroupItem action onClick={()=>setColor(color+1)} style={{margin:'10px', marginLeft:'30px'}}> +1 </ListGroupItem>
          <ListGroupItem action onClick={()=>setColor(color-1)} style={{margin:'10px',marginLeft:'30px'}}> -1 </ListGroupItem>
          <ListGroupItem action onClick={()=>setColor(color+0.1)} style={{margin:'10px',marginLeft:'30px'}}> +0.1 </ListGroupItem>
          <ListGroupItem action onClick={()=>setColor(color-0.1)} style={{margin:'10px',marginLeft:'30px'}}> -0.1 </ListGroupItem>
        </ListGroup>
  </div>
  )
}

export default Models