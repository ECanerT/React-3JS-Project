import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

import Face from './Face'

export default function Model() {
  return (
    <div className="Model">
      <Canvas>
        <Suspense fallback={null}>
          <Face />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  )
}