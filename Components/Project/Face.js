
import React, { useEffect, useRef } from "react";
import { useGLTF,useAnimations } from "@react-three/drei";
import {useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import faceModel from './Models/face27ani.glb'
import hairTex from './Models/hairTex.png'

export default function Face(props) {
  const group = useRef();
  const { nodes, materials,animations } = useGLTF(faceModel);
  const { actions } = useAnimations(animations, group);
  const colorMap = useLoader(TextureLoader, hairTex)
  const action =props.action;
  const preAction = usePrevious(action);
  console.log('x:'+props.position.x,'y:'+ props.position.y,'z:'+ props.position.x)
  useEffect(()=> {
    console.log(actions);
    actions.browLAction.play();
    actions.browRAction.play();
    actions.irisLAction.play();
    actions.irisRAction.play();
    actions.pupilLAction.play();
    actions.pupilRAction.play();
    actions.hairAction.play();
    if(preAction){
      actions[preAction].fadeOut(0.2)
      actions[preAction].stop()  
    }
    actions[action].play();
    actions[action].fadeIn(0.2);
    actions[action].fadeOut(1.8);
    actions.Base.play()
  },[actions,preAction,action])
  return (
    <group ref={group} {...props} dispose={null} position={[props.positionx,props.positiony,props.positionz]} rotation={[-0.12,0.1,0]}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.root} />
          <primitive object={nodes.neck} />
          <skinnedMesh
            name="teethBot"
            geometry={nodes.teethBot.geometry}
            material={materials.teeth}
            skeleton={nodes.teethBot.skeleton}
          />
          <skinnedMesh
            name="teethTop"
            geometry={nodes.teethTop.geometry}
            material={materials.teeth}
            skeleton={nodes.teethTop.skeleton}
          />
          <skinnedMesh
            name="tongue"
            geometry={nodes.tongue.geometry}
            material={materials.tongue}
            skeleton={nodes.tongue.skeleton}
          />
          <skinnedMesh
            name="face"
            geometry={nodes.face.geometry}
            material={materials.face}
            material-color={props.skinColor}
            skeleton={nodes.face.skeleton}
            morphTargetDictionary={nodes.face.morphTargetDictionary}
            morphTargetInfluences={nodes.face.morphTargetInfluences}
          />
        </group>
        <mesh
          name="browL"
          castShadow
          receiveShadow
          geometry={nodes.browL.geometry}
          material={materials["brow.001"]}
          material-color={props.hairColor}
        />
        <mesh
          name="browR"
          castShadow
          receiveShadow
          geometry={nodes.browR.geometry}
          material={materials.brow}
          material-color={props.hairColor}
        />
        <mesh
          name="eye"
          castShadow
          receiveShadow
          geometry={nodes.eye.geometry}
          material={materials.eye}
        />
        <mesh
          name="irisL"
          castShadow
          receiveShadow
          geometry={nodes.irisL.geometry}
          material={materials.iris}
          material-color={props.eyeColor}
        />
        <mesh
          name="irisR"
          castShadow
          receiveShadow
          geometry={nodes.irisR.geometry}
          material={materials.iris}
          material-color={props.eyeColor}
        />
        <mesh
          name="pupilL"
          castShadow
          receiveShadow
          geometry={nodes.pupilL.geometry}
          material={materials.pupil}
        />
        <mesh
          name="pupilR"
          castShadow
          receiveShadow
          geometry={nodes.pupilR.geometry}
          material={materials.pupil}
        />
        <mesh
          name="hair"
          castShadow
          receiveShadow
          geometry={nodes.hair.geometry}
          material={materials.hair}
          material-color={props.hairColor}
          morphTargetDictionary={nodes.hair.morphTargetDictionary}
          morphTargetInfluences={nodes.hair.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload(faceModel);

function usePrevious(value){

  const ref = useRef();
  useEffect(()=>{
    ref.current=value;
  },[value]);
  return ref.current;
}
