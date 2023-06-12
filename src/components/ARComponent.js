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
        <XR>
          <Controllers />
                    <mesh position={[0, 2, 3]}> 
            <boxGeometry scale={[0.5, 0.5, 0.5]}/>
            <meshBasicMaterial color="blue" />
          </mesh>
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