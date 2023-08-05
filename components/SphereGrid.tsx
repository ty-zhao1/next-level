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
        const raycaster = new THREE.Raycaster();


        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        containerRef.current.appendChild(renderer.domElement);

        const sphereRadius = 0.04; // Twice the original size
        const sphereCount = 40;  // 20x20 grid
        const spheres: THREE.Mesh[] = [];
        const geometry = new THREE.SphereGeometry(sphereRadius, 32, 32);

        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const sphereColor = isDarkMode ? 0x8db3a0 : 0xbfdbfe; // replace 0xabcdef with the desired color for dark mode

        const material = new THREE.MeshBasicMaterial({ color: sphereColor });
        const spacing = 0.4; // Less than 1 will make the spacing tighter, adjust to your liking

        const fragmentShader = `
            varying vec3 vUv;

            vec3 hsl2rgb(float h, float s, float l){
                vec3 rgb = clamp(abs(mod(h*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0,0.0,1.0);
                rgb = l - l * s + s * rgb; // Luminance
                return rgb;
            }

            void main() {
                float h = atan(vUv.y, vUv.x) / (2.0 * 3.14159265) + 0.5; // Convert Cartesian to polar coordinates (range [-pi, pi] -> [0, 1] for hue)
                vec3 color = hsl2rgb(h, 1.0, 0.5); // Full saturation, half luminance
                gl_FragColor = vec4(color, 1.0);
            }
            `;



        const vertexShader = `
        varying vec3 vUv; 
        void main() {
            vUv = position; 
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
        `;


        for (let i = -sphereCount / 2; i <= sphereCount / 2; i++) {
            for (let j = -sphereCount / 2; j <= sphereCount / 2; j++) {
                // const sphere = new THREE.Mesh(geometry, material);
                // sphere.position.set(i * spacing, j * spacing, 0);
                // sphere.userData = { mouseZ: 0 };  // Initialize userData.mouseZ
                // spheres.push(sphere);
                // scene.add(sphere);
                const sphereMaterial = new THREE.ShaderMaterial({
                    uniforms: {},
                    vertexShader,
                    fragmentShader,
                    transparent: true,
                  });
                const sphere = new THREE.Mesh(geometry, sphereMaterial);
                sphere.position.set(i * spacing, j * spacing, 0);
                sphere.userData = { mouseZ: 0 };  // Initialize userData.mouseZ
                spheres.push(sphere);
                scene.add(sphere);
                // const sphere = new THREE.Mesh(geometry, material);
                // sphere.position.set(i * spacing, j * spacing, 0);
                // sphere.userData = { mouseZ: 0 };  // Initialize userData.mouseZ
                // spheres.push(sphere);
                // scene.add(sphere);

                // // Set the color of the sphere based on its position
                // const hueStep = 1 / sphereCount;  // hue changes per sphere, adjust as needed
                // sphere.material.color = getSphereColor(sphere, sphereCount, hueStep);
            }
        }

        const onMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;

            // Calculate the real-world coordinates from the normalized device coordinates
            const vector = new THREE.Vector3(x, y, 0.5);  // Z should be 0.5
            vector.unproject(camera);

            const dir = vector.sub(camera.position).normalize();
            const distance = -camera.position.z / dir.z;
            const pos = camera.position.clone().add(dir.multiplyScalar(distance));

            spheres.forEach((sphere) => {
                sphere.userData.mouseZ = 0; // Reset all spheres
            });

            spheres.forEach((sphere) => {
                const dx = sphere.position.x - pos.x;
                const dy = sphere.position.y - pos.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const force = Math.max(0, (1 - dist / 2) * 1.5);
                if (force > 0.1) {  // Apply the effect only if the force is significant
                    sphere.userData.mouseZ = force;
                }
            });
        };

        const onTouchMove = (event: TouchEvent) => {
            if (event.touches.length > 0) {
                const touch = event.touches[0];
                const x = (touch.clientX / window.innerWidth) * 2 - 1;
                const y = -(touch.clientY / window.innerHeight) * 2 + 1;

                // Calculate the real-world coordinates from the normalized device coordinates
                const vector = new THREE.Vector3(x, y, 0.5);  // Z should be 0.5
                vector.unproject(camera);

                const dir = vector.sub(camera.position).normalize();
                const distance = -camera.position.z / dir.z;
                const pos = camera.position.clone().add(dir.multiplyScalar(distance));

                spheres.forEach((sphere) => {
                    sphere.userData.mouseZ = 0; // Reset all spheres
                });

                spheres.forEach((sphere) => {
                    const dx = sphere.position.x - pos.x;
                    const dy = sphere.position.y - pos.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const force = Math.max(0, (1 - dist / 2) * 1.5);

                    if (force > 0.1) {  // Apply the effect only if the force is significant
                        sphere.userData.mouseZ = force;
                    }
                });
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
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener("touchmove", onTouchMove);
            spheres.forEach((sphere) => scene.remove(sphere));
            renderer.dispose();
        };
    }, []);

    return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />;
}
