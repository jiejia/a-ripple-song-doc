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
    // Envelope for a smooth bell curve shape
    const normalized = (i / (numBars - 1)) * 2 - 1
    const envelope = Math.exp(-Math.pow(normalized * 2.2, 2))
    
    bars.push({
      targetHeight: Math.random(),
      currentHeight: Math.random(),
      envelope: envelope,
      speed: 0.15 + Math.random() * 0.2, // increased speed
      delay: Math.random() * 10 // reduced initial delay
    })
  }

  let time = 0

  const draw = () => {
    time += 1
    
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
      // Update target randomly after a delay
      if (time > bar.delay && Math.abs(bar.currentHeight - bar.targetHeight) < 0.05) {
        bar.targetHeight = Math.random()
        bar.delay = time + 5 + Math.random() * 15 // reduced wait time before next change
      }
      
      // Ease current height to target height
      bar.currentHeight += (bar.targetHeight - bar.currentHeight) * bar.speed

      // The actual height of the bar is influenced by the bell curve envelope
      const actualHeight = Math.max(2, bar.currentHeight * bar.envelope * maxBarHeight)

      const x = startX + i * (barWidth + spacing)
      
      ctx.beginPath()
      // roundRect requires newer browsers, fallback gracefully if needed
      if (ctx.roundRect) {
        ctx.roundRect(x, centerY - actualHeight, barWidth, actualHeight * 2, barWidth / 2)
      } else {
        ctx.rect(x, centerY - actualHeight, barWidth, actualHeight * 2)
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
