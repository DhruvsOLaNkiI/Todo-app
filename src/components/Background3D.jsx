import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Sphere, Stars } from '@react-three/drei'
import * as THREE from 'three'

function FloatingShape({ position, color }) {
  const mesh = useRef()
  
  useFrame((state) => {
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2
  })

  return (
    <Float
      speed={1.5}
      rotationIntensity={1.5}
      floatIntensity={2}
      position={position}
    >
      <mesh ref={mesh} scale={1.5}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial
          color={color}
          wireframe
          wireframeLinewidth={2}
        />
      </mesh>
    </Float>
  )
}

function ShapesGroup() {
  const shapes = useMemo(() => [
    { position: [4, 2, -4], color: '#64ffda' },
    { position: [-4, -2, -2], color: '#64ffda' },
    { position: [0, 3, -3], color: '#64ffda' },
    { position: [-3, 1, -4], color: '#64ffda' },
    { position: [3, -3, -5], color: '#64ffda' },
  ], [])

  return shapes.map((shape, i) => (
    <FloatingShape key={i} {...shape} />
  ))
}

function MovingSpheres() {
  const groupRef = useRef()
  const spheres = useMemo(() => {
    return new Array(100).fill().map(() => ({
      position: [
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
      ],
      size: Math.random() * 0.1
    }))
  }, [])

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
  })

  return (
    <group ref={groupRef}>
      {spheres.map((sphere, i) => (
        <Sphere key={i} position={sphere.position} args={[sphere.size, 8, 8]}>
          <meshBasicMaterial color="#64ffda" transparent opacity={0.2} />
        </Sphere>
      ))}
    </group>
  )
}

export default function Background3D() {
  return (
    <div className="h-full w-full absolute top-0 left-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars
          radius={50}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <ShapesGroup />
        <MovingSpheres />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
