"use client"

import { Canvas } from '@react-three/fiber'

import { Environment, PointerLockControls, Text } from '@react-three/drei'

export default function Home() {
  return (
    <div id="three-canvas">
      <Canvas>
        <ambientLight />
        <Environment files="/mountain_lookout_4k.hdr" background />
        <Text color="black" anchorX="center" anchorY="middle" position={[0, 3, 0]}>
          How did you get here?
        </Text>
        <PointerLockControls />
      </Canvas>
    </div>
  )
}
