"use client"
import React, {useState, useRef, Suspense} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {Points, PointMaterial} from '@react-three/drei'
import { Group } from 'three'
// @ts-expect-error - maath has no type exports for this subpath in our setup
import * as random from "maath/random/dist/maath-random.esm";

const StartBackground = () => {
    const ref = useRef<Group | null>(null);
    const [sphere]= useState(()=>
        random.inSphere(new Float32Array(5001), {radius: 1.2})
    );
    
    useFrame((_, delta)=>{
        if (!ref.current) return;
        ref.current.rotation.x -= delta/10;
        ref.current.rotation.y -= delta/15;
    })

  return (
    <group rotation={[0, 0, Math.PI/4]} ref={ref}>
        <Points positions={sphere} stride={3} frustumCulled>
            <PointMaterial transparent color="$fff" size={0.002} sizeAttenuation={true} depthWrite={false} />
        </Points>
    </group>
  );
}

const StarsCanvas = ()=>{
    return(
        <div className='w-full h-auto fixed inset-0 z-[20]'>
            <Canvas camera={{position: [0,0,1]}}>
                <Suspense fallback={null}>
                    <StartBackground />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default StarsCanvas;
