import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshWobbleMaterial } from '@react-three/drei'

export default function AnimatedCube() {
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.01
  })

  return (
    <mesh ref={mesh} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <MeshWobbleMaterial
        color="#64ffda"
        factor={0.3}
        speed={2}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}
