import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - esap',
    title: 'esap',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.tailwindcss.com' },
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/custom.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          esap_primary: "#FF7640",
          esap_accent: "#FFEAE3",
          esap_error: '#EFF2F7',
          // esap_secondary: colors.amber.darken3,
          // esap_info: colors.teal.lighten1,
          // esap_warning: colors.amber.base,
          // esap_success: colors.green.accent3,


          headmenu: '#FFE0D3',
          secondary: '#FE7640',
          iconfile: '#F1B44C',
          base: "#FE7640",
          purple_base: "#4F4BFF",
          //button
          ready: "#F15412",
          accepted: "#F7D716",
          greenline: "#28A745",
          redline: "#F32424",
          rejected: "#B20600",
          error: "#990000",
          cancel: "#748DA6",
          wait: "#1363DF",
          waitcancel: "#1363DF",
          checked: "#47B5FF",
          loaded: "#3EC70B",
          //
          default: "#FF7640",
          red: "#F46A6A",
          green: "#34C38F",
          yellow: "#F1B44C",
          black: "#212529",
          gray1: "#495057",
          gray2: "#ADB5BD",
          white: "#FFFFFF",

        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: false,
  }
}
