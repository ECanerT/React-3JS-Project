import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stars} from "@react-three/drei";





function Box(props) {
  
  const sphere= <mesh position={[1.5, 0, 0 ]}> 
  <sphereGeometry args={[1.5, 5, 16]}/>
  <meshPhysicalMaterial color={props.color}/></mesh>;

  const box= <mesh position={[-3, 0, 0 ]}> 
  <boxGeometry args={[props.size, props.size, props.size]}/>
  <meshPhysicalMaterial color={props.color}/></mesh>;
  
  const cylinder= <mesh position={[5, 0, 0 ]}> 
  <cylinderGeometry args={[1, 1, 3, 16]}/>
  <meshPhysicalMaterial color={props.color}/></mesh>

  return (
    <div className="box">
    <Canvas>
      <OrbitControls></OrbitControls>
      <directionalLight position={[2, 4, 5]}></directionalLight>
      <directionalLight position={[2, 0, -1]}></directionalLight>
      
      {sphere}
      {box}
      {cylinder}
    </Canvas> {console.log("size: "+props.size)}
    </div>
  );
}

export default Box;