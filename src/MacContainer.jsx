import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'

const MacContainer = () => {
    let model = useGLTF('/mac.glb')
    let texture = useTexture('/red.jpg')
    let meshes = {}

    //model.scene is not an array but a THREE.Group object. 
    //Therefore, you need to use .traverse() to iterate through
    //all child objects (including nested objects) within the scene.
    model.scene.traverse((e)=>{
        // if(e instanceof THREE.Mesh || e instanceof THREE.Group)
            meshes[e.name] = e
    })

    // console.log(meshes);
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180)
    meshes.matte.material.map = texture
    meshes.matte.material.emissiveIntensity = 0
    meshes.matte.material.metalness = 0
    meshes.matte.material.roughness = 1

    let data = useScroll()

    useFrame((state,delta)=>{
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180-(data.offset*90))
        // console.log(data.offset);
    })
    
  return (
    <group position={[0,-10,20]}>
        <primitive object={model.scene} />
    </group>
  )
}

export default MacContainer