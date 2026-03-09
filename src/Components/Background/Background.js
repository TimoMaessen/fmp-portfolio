import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying float vVisible;
  uniform float uTime;
  attribute vec3 aOffset;
  attribute float aInstanceId; // Uniek ID per puntje

  // Snelle noise functie voor individuele variatie
  float hash(float n) { return fract(sin(n) * 43758.5453123); }

  void main() {
    // We creëren een unieke 'fase' voor elk puntje
    float individualPhase = hash(aInstanceId);
    
    // De noise wordt nu beïnvloed door de tijd én de individuele fase
    // Dit zorgt ervoor dat ze niet als één grote golf bewegen
    float speed = 0.6;
    float n = sin(aOffset.x * 2.0 + aOffset.y * 2.0 + uTime * speed + individualPhase * 10.0);
    n += cos(aOffset.x * 1.0 - aOffset.y * 3.0 + uTime * 0.3);

    // Binaire switch: 0.0 of 1.0 (aan of uit)
    // We gebruiken een hoge drempelwaarde zodat het grid 'leeg' blijft met af en toe een stipje
    vVisible = step(0.8, n * individualPhase);

    vec3 newPosition = position + aOffset;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const fragmentShader = `
  varying float vVisible;
  void main() {
    // Als vVisible 0 is, wordt het puntje volledig transparant (discard stopt het tekenen)
    if (vVisible < 0.5) discard;
    
    gl_FragColor = vec4(0.87, 0.86, 0.85, 1.0); 
  }
`;

const GridPoints = () => {
  const { viewport } = useThree();
  const spacing = 0.02; 

  const { count, offsets, instanceIds } = useMemo(() => {
    const cols = Math.ceil((viewport.width * 1.5) / spacing); 
    const rows = Math.ceil((viewport.height * 1.5) / spacing);
    const total = cols * rows;

    const offArr = new Float32Array(total * 3);
    const idArr = new Float32Array(total);

    for (let i = 0; i < total; i++) {
        const r = Math.floor(i / cols);
        const c = i % cols;
        offArr[i * 3] = (c - cols / 2) * spacing;
        offArr[i * 3 + 1] = (r - rows / 2) * spacing;
        offArr[i * 3 + 2] = 0;
        idArr[i] = i; // Uniek ID voor elk puntje
    }
    return { count: total, offsets: offArr, instanceIds: idArr };
  }, [viewport, spacing]);

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);
  useFrame((state) => (uniforms.uTime.value = state.clock.getElapsedTime()));

  return (
    <instancedMesh args={[null, null, count]}>
      <circleGeometry args={[0.006, 6]}>
        <instancedBufferAttribute attach="attributes-aOffset" args={[offsets, 3]} />
        <instancedBufferAttribute attach="attributes-aInstanceId" args={[instanceIds, 1]} />
      </circleGeometry>
      <shaderMaterial 
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
      />
    </instancedMesh>
  );
};

const Background = () => (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: '#f8f7f4' }}>
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
      <GridPoints />
    </Canvas>
  </div>
);

export default Background;