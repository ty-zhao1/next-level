// components/SphereGrid.tsx
'use client'
import * as THREE from "three";
import React, { useEffect, useRef } from "react";

let time = 0;
export default function SphereGrid(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const screenWidth = window.innerWidth;
    const isSmallScreen = screenWidth < 768;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    const sphereRadius = 0.05; // Twice the original size
    const sphereCount = 30;  // 20x20 grid
    const spheres: THREE.Mesh[] = [];
    const geometry = new THREE.SphereGeometry(sphereRadius, 32, 32);

    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const sphereColor = isDarkMode ? 0x8db3a0 : 0xbfdbfe; // replace 0xabcdef with the desired color for dark mode

    const material = new THREE.MeshBasicMaterial({ color: sphereColor });
    const spacing = 0.5; // Less than 1 will make the spacing tighter, adjust to your liking


    for (let i = -sphereCount/2; i <= sphereCount/2; i++) {
        for (let j = -sphereCount/2; j <= sphereCount/2; j++) {
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.set(i * spacing, j * spacing, 0);
            sphere.userData = { mouseZ: 0 };  // Initialize userData.mouseZ
            spheres.push(sphere);
            scene.add(sphere);
        }
    }

    const onMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        spheres.forEach((sphere) => {
            sphere.userData.mouseZ = 0; // Reset all spheres
        });
        spheres.forEach((sphere) => {
          const dx = sphere.position.x - x * 10;
          const dy = sphere.position.y - y * 10;
          const dist = Math.sqrt(dx * dx + dy * dy);
          //const forceMultiplier = isSmallScreen ? 0.75 : 1.5;
          const force = Math.max(0, (1 - dist / 2) * 1.5);
          if (force > 0.1) {  // Apply the effect only if the force is significant
            sphere.userData.mouseZ = force;
        }
        //   sphere.userData.mouseZ = force;
        });
      };

      const onTouchMove = (event: TouchEvent) => {
        // Ensure you're accessing touch event properties correctly
        if (event.touches.length > 0) {
            const touch = event.touches[0];
            onMouseMove({
                clientX: touch.clientX,
                clientY: touch.clientY
            } as MouseEvent); // We're reusing the onMouseMove function by passing in the touch event properties in the format it expects.
        }
    };
      
      const animate = () => {
        requestAnimationFrame(animate);
    
        time += 0.02;
    
        spheres.forEach((sphere) => {
            const rippleEffect = Math.sin(sphere.position.x + time) + Math.sin(sphere.position.y + time);
            const rippleMult = isSmallScreen ? 0.2 : 0.1;
            sphere.position.z = rippleEffect * rippleMult + (sphere.userData.mouseZ || 0);
            //sphere.userData.mouseZ *= 0.9;
        });
    
        renderer.render(scene, camera);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener("touchmove", onTouchMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.addEventListener("touchmove", onTouchMove);
      spheres.forEach((sphere) => scene.remove(sphere));
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />;
}
