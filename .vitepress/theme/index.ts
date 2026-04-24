import DefaultTheme from 'vitepress/theme'
import { nextTick, onMounted, watch, h } from 'vue'
import { useRoute } from 'vitepress'
import './custom.css'
import WaveformHero from './components/WaveformHero.vue'

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
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(WaveformHero)
    })
  },
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
