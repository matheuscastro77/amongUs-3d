import React, { Suspense } from 'react'
import { ARButton, Controllers, Hands, XR } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import { Amongus } from './Model'
import { OrbitControls } from '@react-three/drei'


const ARComponent = () => {
  return (
    <div
      className='container3D'
      style={{ width: '100%', height: '100vh' }}>
      <ARButton />
      <Canvas vr="true" camera={{position: [0.1, 0.1, 0.1] }}>
        <directionalLight color={"#ffffff"}
          position={[5, 5, 5]} />
        <XR>
          <Suspense fallback={null}>
            <Amongus />
          </Suspense>
        </XR>
      </Canvas>
    </div>
  )
}

export default ARComponent