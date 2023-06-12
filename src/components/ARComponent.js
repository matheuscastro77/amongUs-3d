import React, { Suspense } from 'react'
import { ARButton, Controllers, Hands, XR, XRController } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import { Amongus } from './Model'
import { OrbitControls } from '@react-three/drei'


const ARComponent = () => {
  return (
    <>
       <ARButton />
      <Canvas camera={{ position: [0, 2, 0] }}>
        <XR referenceSpace="local-floor">
          <color attach="background" args={["#111"]} />
          <ambientLight intensity={2} />
          <pointLight position={[20, 10, -10]} intensity={2} />
          <primitive object={new THREE.AxesHelper(2)} />
          <primitive object={new THREE.GridHelper(20, 20)} />
          <OrbitControls />

          <Box key="companionCube">
            <meshPhongMaterial color="#440066" />
          </Box>
        </XR>
      </Canvas>
      {/* <ARButton />
      <Canvas vr="true" camera={{position: [0.1, 0.1, 0.1] }}>
        <directionalLight color={"#ffffff"}
          position={[5, 5, 5]} />
        <XR>
          <XRController />
          <Suspense fallback={null}>
            <Amongus />
          </Suspense>
        </XR>
      </Canvas> */}
    </>
  )
}

export default ARComponent