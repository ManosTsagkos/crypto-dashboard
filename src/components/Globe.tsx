import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface GlobeProps {
  width?: number
  height?: number
}

const Globe: React.FC<GlobeProps> = ({ width = 400, height = 400 }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const globeRef = useRef<THREE.Mesh | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 2.5
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setClearColor(0x0a0a15, 0.1)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create Globe
    const geometry = new THREE.IcosahedronGeometry(1, 64)
    const canvas = document.createElement('canvas')
    canvas.width = 2048
    canvas.height = 1024
    const ctx = canvas.getContext('2d')!

    // Draw Earth texture
    ctx.fillStyle = '#1a3a52'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw continents (simplified)
    ctx.fillStyle = '#2d5a3d'
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const size = Math.random() * 100 + 50
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }

    // Add glow cities
    ctx.fillStyle = '#00d4ff'
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fill()
    }

    const texture = new THREE.CanvasTexture(canvas)
    const material = new THREE.MeshPhongMaterial({
      map: texture,
      emissive: 0x111122,
      shininess: 5,
    })

    const globe = new THREE.Mesh(geometry, material)
    scene.add(globe)
    globeRef.current = globe

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1.5)
    light.position.set(5, 5, 5)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight(0x404040, 1)
    scene.add(ambientLight)

    // Glow effect with wireframe
    const glowGeometry = new THREE.IcosahedronGeometry(1.05, 64)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial)
    scene.add(glowMesh)

    // Animation loop
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      if (globeRef.current) {
        globeRef.current.rotation.x += 0.0005
        globeRef.current.rotation.y += 0.001
      }

      if (glowMesh) {
        glowMesh.rotation.x += 0.0003
        glowMesh.rotation.y += 0.0008
      }

      renderer.render(scene, camera)
    }
    animate()

    // Handle mouse interaction
    const onMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / width) * 2 - 1
      const y = -(event.clientY / height) * 2 + 1

      if (globeRef.current) {
        globeRef.current.rotation.y += x * 0.01
        globeRef.current.rotation.x += y * 0.01
      }
    }

    containerRef.current.addEventListener('mousemove', onMouseMove)

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return
      const newWidth = containerRef.current.clientWidth
      const newHeight = containerRef.current.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', onMouseMove)
        containerRef.current.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [width, height])

  return <div ref={containerRef} style={{ width, height }} className="rounded-lg overflow-hidden" />
}

export default Globe
