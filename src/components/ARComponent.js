import React, { Suspense } from 'react'
import { ARButton, Controllers, XR } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import { Amongus } from './Model'
import { OrbitControls } from '@react-three/drei'


const ARComponent = () => {
  return (
      <>
        <ARButton />
        <Canvas camera={{ position: [0.05, 0.05, 0.05]}}       style={{ height:"100vh", width: '100%'}}>
        <directionalLight color={"#ffffff"}
          position={[5, 5, 5]} />
          <ambientLight intensity={0.8}/>
          <XR referenceSpace="local">
          <Suspense fallback={null} >
            <Amongus />
          </Suspense>
          <Controllers />
          <OrbitControls target={[0, 0, -0.3]}/>
          </XR>
        </Canvas>
      </>
  )
}

export default ARComponent