import { h } from 'vue'
import Theme from 'vitepress/theme'
import { EnhanceAppContext } from 'vitepress'
import '../style/main.css'
import '../style/vars.css'
import 'uno.css'

import { watch } from 'vue'

import HomePage from '../components/HomePage.vue';

type WindowWithGtag = (typeof window) & {
  gtag: Function;
}
//if (inBrowser)
//  import('./pwa')

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomePage),
    })
  },
  enhanceApp(ctx: EnhanceAppContext) {
    watch(ctx.router.route, () => {
      
      // send GA page_view event
      if (window && (window as WindowWithGtag).gtag) {
        (window as WindowWithGtag).gtag('event', 'page_view', {
         page_path: ctx.router.route.path,
        })
      }
      
    })
  }
}

