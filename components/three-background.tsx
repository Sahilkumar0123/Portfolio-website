"use client"

import { useEffect, useRef } from "react"

export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let scene: any, camera: any, renderer: any, particles: any
    let mouseX = 0,
      mouseY = 0

    const init = async () => {
      const THREE = await import("three")

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)

      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement)
      }

      // Create floating particles
      const particleCount = 1000
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 2000
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2000
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2000

        // Neon colors
        const colorChoice = Math.random()
        if (colorChoice < 0.33) {
          colors[i * 3] = 0.03
          colors[i * 3 + 1] = 0.57
          colors[i * 3 + 2] = 0.7 // Cyan
        } else if (colorChoice < 0.66) {
          colors[i * 3] = 0.55
          colors[i * 3 + 1] = 0.36
          colors[i * 3 + 2] = 0.96 // Purple
        } else {
          colors[i * 3] = 1
          colors[i * 3 + 1] = 0
          colors[i * 3 + 2] = 0.5 // Pink
        }
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

      const material = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      })

      particles = new THREE.Points(geometry, material)
      scene.add(particles)

      camera.position.z = 1000

      // Mouse interaction
      const onMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX - window.innerWidth / 2) * 0.0005
        mouseY = (event.clientY - window.innerHeight / 2) * 0.0005
      }

      document.addEventListener("mousemove", onMouseMove)

      const animate = () => {
        requestAnimationFrame(animate)

        particles.rotation.x += 0.0005
        particles.rotation.y += 0.001

        // Mouse interaction
        particles.rotation.x += mouseY * 0.1
        particles.rotation.y += mouseX * 0.1

        renderer.render(scene, camera)
      }

      animate()

      // Handle resize
      const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener("resize", onWindowResize)

      return () => {
        document.removeEventListener("mousemove", onMouseMove)
        window.removeEventListener("resize", onWindowResize)
      }
    }

    init()

    return () => {
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 -z-10" />
}
