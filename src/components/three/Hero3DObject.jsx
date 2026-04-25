import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PresentationControls } from '@react-three/drei';

const Hero3DObject = () => {
    const meshRef = useRef();
    const wireframeRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
        }
        if (wireframeRef.current) {
            wireframeRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
            wireframeRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
        }
    });

    return (
        <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                {/* Inner Core */}
                <mesh ref={meshRef}>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <meshStandardMaterial color="#0f766e" roughness={0.4} metalness={0.8} />
                </mesh>
                
                {/* Outer Wireframe */}
                <mesh ref={wireframeRef} scale={[1.2, 1.2, 1.2]}>
                    <icosahedronGeometry args={[1.5, 1]} />
                    <meshStandardMaterial color="#2dd4bf" wireframe transparent opacity={0.3} />
                </mesh>

                {/* Ambient Light for the core */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} color="#5eead4" />
                <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#3b82f6" />
            </Float>
        </PresentationControls>
    );
};

export default Hero3DObject;
