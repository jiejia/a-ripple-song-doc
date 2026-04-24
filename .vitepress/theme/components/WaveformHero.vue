<template>
  <div class="waveform-hero-container">
    <canvas ref="canvasEl"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasEl = ref(null)
let animationId = null

onMounted(() => {
  const canvas = canvasEl.value
  const ctx = canvas.getContext('2d')
  
  const resize = () => {
    const container = canvas.parentElement
    // Use devicePixelRatio for sharper rendering on high-DPI displays
    const dpr = window.devicePixelRatio || 1
    const rect = container.getBoundingClientRect()
    
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    
    ctx.scale(dpr, dpr)
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`
  }
  
  window.addEventListener('resize', resize)
  // small delay to ensure container is fully laid out
  setTimeout(resize, 0)

  // Configuration for bars
  const numBars = 40
  const bars = []
  
  for(let i = 0; i < numBars; i++) {
    // Envelope for a smooth curve that is higher in the middle but doesn't drop to 0 at ends
    const normalized = (i / (numBars - 1)) * 2 - 1
    // Math.exp(-Math.pow(normalized * 1.5, 2)) gives a wider bell that doesn't drop as sharply
    // Add a base level (0.3) so the ends still have at least 30% of the maximum possible height
    const envelope = 0.3 + 0.7 * Math.exp(-Math.pow(normalized * 1.5, 2))
    
    bars.push({
      currentHeight: 0.5,
      envelope: envelope,
      // Add random properties for each bar to break pure continuity
      noisePhase: Math.random() * Math.PI * 2,
      noiseSpeed: 1.2 + Math.random() * 2.2, // ~1.5x original speed
      noiseWeight: 0.4 + Math.random() * 0.6
    })
  }

  let time = 0

  const draw = () => {
    time += 0.15 // Increased wave animation speed
    
    // We use the CSS dimensions since we scaled the context
    const width = canvas.clientWidth || 400
    const height = canvas.clientHeight || 400
    
    ctx.clearRect(0, 0, width, height)

    const centerY = height / 2
    const maxBarHeight = height * 0.35
    
    // Calculate width and spacing based on available width
    const totalAvailableWidth = width * 0.9 // use 90% of container width
    const startX = width * 0.05
    
    const barWidth = Math.max(3, (totalAvailableWidth / numBars) * 0.5)
    const spacing = (totalAvailableWidth - barWidth * numBars) / (numBars - 1)

    // Gradient definition (120deg, #0f766e 0%, #14b8a6 28%, #38bdf8 62%, #6366f1 100%)
    // 120deg in CSS is 30 degrees below the horizontal axis (pointing right-down)
    const radian = (120 - 90) * (Math.PI / 180)
    const gradient = ctx.createLinearGradient(0, 0, width, width * Math.tan(radian))
    gradient.addColorStop(0, '#0f766e')
    gradient.addColorStop(0.28, '#14b8a6')
    gradient.addColorStop(0.62, '#38bdf8')
    gradient.addColorStop(1, '#6366f1')

    ctx.fillStyle = gradient

    bars.forEach((bar, i) => {
      // Calculate smooth continuous wave
      const normalizedX = i / numBars
      
      // --- Activity Window Logic ---
      // Create moving "active zones" so only specific segments fluctuate at any given moment
      // Greatly slowed down the multipliers (e.g., 0.8 -> 0.05) so the zones linger for much longer
      const window1 = Math.sin(normalizedX * Math.PI * 3 + time * 0.05)
      const window2 = Math.cos(normalizedX * Math.PI * 2 - time * 0.03)
      
      // Normalize to 0.0 - 1.0
      let activityMask = (window1 + window2 + 2) / 4
      
      // Raise to a power to sharply narrow the active peaks, making them sparse
      activityMask = Math.pow(activityMask, 4)
      // ---------------------------
      
      // Combine multiple sine waves for an organic, fluid motion
      // Set to ~1.5x of original speed
      const wave1 = Math.sin(normalizedX * Math.PI * 4 + time * 1.8)
      const wave2 = Math.sin(normalizedX * Math.PI * 7 - time * 2.7)

      // Local random wave for this specific bar to add independence
      const localNoise = Math.sin(time * bar.noiseSpeed + bar.noisePhase)

      // Normalize combined waves to roughly -1 to 1
      const totalWeight = 1 + 0.5 + bar.noiseWeight
      const combined = (wave1 + wave2 * 0.5 + localNoise * bar.noiseWeight) / totalWeight
      
      // Target height calculation: 
      // Base minimum height + fluctuation scaled strongly by the active zone mask
      const minHeight = 0.05
      const targetHeight = minHeight + ((combined + 1) / 2) * activityMask * 0.95
      
      // Smooth easing (increased for faster reaction)
      bar.currentHeight += (targetHeight - bar.currentHeight) * 0.4

      // The actual height of the bar is influenced by the bell curve envelope
      const actualHeight = Math.max(2, bar.currentHeight * bar.envelope * maxBarHeight)

      const xPos = startX + i * (barWidth + spacing)
      
      ctx.beginPath()
      // roundRect requires newer browsers, fallback gracefully if needed
      if (ctx.roundRect) {
        ctx.roundRect(xPos, centerY - actualHeight, barWidth, actualHeight * 2, barWidth / 2)
      } else {
        ctx.rect(xPos, centerY - actualHeight, barWidth, actualHeight * 2)
      }
      ctx.fill()
    })

    animationId = requestAnimationFrame(draw)
  }

  draw()

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
  })
})
</script>

<style scoped>
.waveform-hero-container {
  width: 100%;
  height: 100%;
  min-height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
