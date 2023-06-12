import React from 'react'
import { ARButton, Controllers, Hands, VRButton, XR } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'


const ARComponent = () => {
  return (
    <>
    <VRButton />
    <Canvas>
      <XR>
        <Controllers />
        <Hands />
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color="blue" />
        </mesh>
      </XR>
    </Canvas>
  </>
  )
}

export default ARComponent