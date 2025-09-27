"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const currentMount = mountRef.current;

        // Scene
        const scene = new THREE.Scene();
        
        // Camera
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        currentMount.appendChild(renderer.domElement);

        // Stars
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 5000;
        const positions = new Float32Array(starCount * 3);
        const velocities = new Float32Array(starCount);

        for (let i = 0; i < starCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = Math.random() * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
            // Slower speed for general stars
            velocities[i] = Math.random() * 0.005 + 0.002;
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.02,
            transparent: true,
        });

        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // Falling Stars (Shooting Stars)
        const fallingStarGeometry = new THREE.BufferGeometry();
        const fallingStarCount = 20;
        const fallingStarPositions = new Float32Array(fallingStarCount * 3);
        const fallingStarVelocities = new Float32Array(fallingStarCount * 2); // [vy, vx]

        for (let i = 0; i < fallingStarCount; i++) {
            fallingStarPositions[i * 3] = (Math.random() - 0.5) * 20;
            fallingStarPositions[i * 3 + 1] = Math.random() * 10 + 5; // Start higher up
            fallingStarPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
            fallingStarVelocities[i*2] = Math.random() * 0.1 + 0.05; // Faster Y-velocity
            fallingStarVelocities[i*2+1] = (Math.random() - 0.5) * 0.02; // Slight X-velocity
        }

        fallingStarGeometry.setAttribute('position', new THREE.BufferAttribute(fallingStarPositions, 3));

        const fallingStarMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.05,
            transparent: true,
            opacity: 0.8,
        });

        const fallingStars = new THREE.Points(fallingStarGeometry, fallingStarMaterial);
        scene.add(fallingStars);
        
        // Mouse movement
        let mouseX = 0;
        let mouseY = 0;
        
        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        let time = 0;

        // Animation
        const animate = () => {
            time += 0.005;
            const positions = starGeometry.attributes.position.array as Float32Array;

            // Animate regular stars
            for (let i = 0; i < starCount; i++) {
                positions[i * 3 + 1] -= velocities[i];
                positions[i * 3] += Math.sin(time + i) * 0.0005;

                if (positions[i * 3 + 1] < -5) {
                    positions[i * 3] = (Math.random() - 0.5) * 20;
                    positions[i * 3 + 1] = 5;
                    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
                }
            }
            starGeometry.attributes.position.needsUpdate = true;

            // Animate falling stars
            const fallingPositions = fallingStarGeometry.attributes.position.array as Float32Array;
            for(let i = 0; i < fallingStarCount; i++) {
                fallingPositions[i * 3 + 1] -= fallingStarVelocities[i*2];
                fallingPositions[i * 3] -= fallingStarVelocities[i*2+1];

                if (fallingPositions[i * 3 + 1] < -5) {
                    fallingPositions[i * 3] = (Math.random() - 0.5) * 20;
                    fallingPositions[i * 3 + 1] = Math.random() * 5 + 5;
                }
            }
            fallingStarGeometry.attributes.position.needsUpdate = true;

            
            // Parallax effect
            camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
            camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.02;
            camera.lookAt(scene.position);


            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        // Handle Resize
        const handleResize = () => {
            if (currentMount) {
                const width = currentMount.clientWidth;
                const height = currentMount.clientHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            }
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (currentMount) {
                currentMount.removeChild(renderer.domElement);
            }
            renderer.dispose();
            starGeometry.dispose();
            starMaterial.dispose();
            fallingStarGeometry.dispose();
            fallingStarMaterial.dispose();
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default ThreeScene;
