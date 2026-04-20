import DefaultTheme from 'vitepress/theme'
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import './custom.css'

let zoom: ReturnType<typeof import('medium-zoom').default> | undefined

async function initZoom() {
  const mediumZoom = (await import('medium-zoom')).default

  zoom?.detach()
  zoom = mediumZoom('.vp-doc img:not(.no-zoom)', {
    margin: 24,
    background: 'var(--vp-c-bg)'
  })
}

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()

    onMounted(() => {
      initZoom()

      watch(
        () => route.path,
        () => nextTick().then(initZoom)
      )
    })
  }
}
