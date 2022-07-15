import { h } from 'vue'
import Theme from 'vitepress/theme'
import { EnhanceAppContext, inBrowser } from 'vitepress'
import '../style/main.css'
import '../style/vars.css'
import 'uno.css'

import { watch } from 'vue'

import HomePage from '../components/HomePage.vue';

type WindowConfig = (typeof window) & {
  gtag: Function;
  twttr: {
    widgets: {
      load: () => void;
    }
  }
}

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomePage),
    })
  },
  enhanceApp(ctx: EnhanceAppContext) {
    watch(ctx.router.route, () => {

      if (inBrowser) {
        // send GA page_view event
        if ((window as WindowConfig).gtag) {
          (window as WindowConfig).gtag('event', 'page_view', {
            page_path: ctx.router.route.path,
          })
        }

        // added by twitter widget script
        if ((window as WindowConfig).twttr) {
          (window as WindowConfig).twttr.widgets.load()
        }
      }


    })
  }
}

