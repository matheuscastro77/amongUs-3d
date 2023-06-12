import React, { Suspense } from 'react'
import { ARButton, Controllers, Hands, XR, XRController } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import { Amongus } from './Model'
import { Box, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'


const ARComponent = () => {
  return (
    <>
      <>
        <ARButton />
        <Canvas>
          <XR referenceSpace="local-floor">
            <OrbitControls />
            <Suspense fallback={null}>
            <Amongus />
          </Suspense>
          </XR>
        </Canvas>
      </>
      {/* <ARButton />
      <Canvas vr="true" camera={{position: [0.1, 0.1, 0.1] }}>
        <directionalLight color={"#ffffff"}
          position={[5, 5, 5]} />
        <XR referenceSpace="local-floor">
        <OrbitControls />
          <Suspense fallback={null}>
            <Amongus />
          </Suspense>
        </XR>
      </Canvas> */}
    </>
  )
}

export default ARComponent