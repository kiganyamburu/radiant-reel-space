import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense, useRef } from "react";
import * as THREE from "three";

function SpinningGroup() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const m = (window as any).__mouse || { x: 0, y: 0 };
    // Smooth follow for pointer
    group.current.rotation.x += ((m.y * 0.2) - group.current.rotation.x) * 0.02;
    group.current.rotation.y += ((m.x * 0.4) - group.current.rotation.y) * 0.02;
    // Gentle idle motion
    group.current.position.y = Math.sin(t * 0.8) * 0.05;
  });

  return (
    <group ref={group}>
      <mesh castShadow receiveShadow position={[-0.8, 0, 0]}>
        <torusKnotGeometry args={[0.6, 0.18, 180, 32]} />
        <meshStandardMaterial
          color={new THREE.Color("hsl(222, 84%, 56%)")}
          metalness={0.6}
          roughness={0.25}
        />
      </mesh>

      <mesh castShadow receiveShadow position={[0.95, 0.2, 0]}>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial
          color={new THREE.Color("hsl(210, 40%, 70%)")}
          metalness={0.4}
          roughness={0.35}
        />
      </mesh>

      <mesh castShadow receiveShadow position={[0.2, -0.9, -0.4]}>
        <dodecahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial
          color={new THREE.Color("hsl(215, 16%, 47%)")}
          metalness={0.3}
          roughness={0.6}
        />
      </mesh>
    </group>
  );
}

export const HeroCanvas: React.FC = () => {
  return (
    <div
      className="relative w-full h-[420px] sm:h-[520px] rounded-xl border border-border overflow-hidden"
      onMouseMove={(e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - bounds.left) / bounds.width;
        const y = (e.clientY - bounds.top) / bounds.height;
        // Store on dataset for frame hook to read via window, or use event listener
        (window as any).__mouse = { x: x - 0.5, y: 0.5 - y };
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent" />
      <Suspense fallback={null}>
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 4.4], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          className="w-full h-full"
          onCreated={({ gl }) => {
            gl.setClearAlpha(0);
          }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 3]} intensity={1.2} castShadow />
          <directionalLight position={[-3, -2, -2]} intensity={0.4} />

          <SpinningGroup />

          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
        </Canvas>
      </Suspense>
    </div>
  );
};


export default HeroCanvas;
