import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'
import './style.css'

function App() {

  const navItems = [
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 384 512" 
    width="16" 
    height="16" 
    fill="currentColor"
    className='text-white'
  >
    <path d="M318.7 268.6c-.3-37.1 16.3-64.9 50.6-86.1-19.2-27.9-47.7-43.5-85.8-47.9-35.9-4.1-74.2 21.4-88.3 21.4-15 0-51.3-20.8-79.5-20.2C64.6 136.3 24 171.2 24 236.3c0 29.8 10.8 61.3 32.5 95.1 27.5 45.1 50 67.7 68.4 67.7 14.4 0 20.5-9.7 41.8-9.7 21.3 0 26.7 9.7 42 9.7 18.9 0 39.9-23.3 66.9-69.8 12.7-22.2 18.6-34.5 18.4-60.7zm-56.5-189.9c16.3-19.7 27.4-47.3 24.3-74.7-23.5 1-51 15.8-67.4 35.5-14.8 17.1-28.1 45.1-24.6 71.5 26 .3 51.8-13 67.7-32.3z"/>
  </svg>,
    'Store', 'Mac', 'iPad', 'iPhone', 'Airpods', 'Watch', 'Accessories', 'Entertainment','Support'
  ];

  return (
  <div className='w-full h-screen text-white'>

    <div className="navbar flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2 line ">
      {navItems.map((e)=>(
        <a href="" className='font-[500] text-sm' key={e}>{e}</a>
      ))}
    </div>

    <div className='flex flex-col items-center absolute top-24 left-1/2 -translate-x-1/2 font-sans'>
      <h3 className='text-5xl tracking-tighter font-[600] glow-text'>mackbook pro.</h3>
      <h5>Oh no pro!</h5>
      <p className='text-center w-1/2 text-sm'>Buy MacBook Pro starting at ₹158900.00 with education savings. And now up to 30 Sep, get AirPods.◊</p>
    </div>

    <Canvas camera={{fov:12, position:[0,-12,220]}}>
      <OrbitControls/>
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