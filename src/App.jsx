import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'
// import './index.css'
import './style.css'

function App() {
  return (
  <div className='w-full h-screen'>
    <div className='text-white flex flex-col items-center absolute top-24 left-1/2 -translate-x-1/2 font-sans'>
      <h3 className='text-5xl tracking-tighter font-[600] glow-text'>mackbook pro.</h3>
      <h5>Oh no pro!</h5>
    </div>
    <Canvas camera={{fov:12, position:[0,-12,220]}}>
      {/* <OrbitControls/> */}
      <Environment
        files={[
          'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr'
        ]}
      />
      <ScrollControls pages={3}>
        <MacContainer/>
      </ScrollControls>
    </Canvas>
  </div>
  )
}

export default App