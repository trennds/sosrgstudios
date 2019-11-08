export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            // { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" },
            { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        '@/assets/bootstrap.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/vue-lazysizes.client.js',
        { src: '~plugins/ga.js', mode: 'client' },
        { src: '~plugins/jquery.js', ssr: false }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@bazzite/nuxt-optimized-images',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    generate: {
        "dir": "public"
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, { isDev, isClient, loaders: { vue } }) {
            if (isClient) {
                vue.transformAssetUrls.img = ['data-src', 'src']
                vue.transformAssetUrls.source = ['data-srcset', 'srcset']
            }
        }
    },
    optimizedImages: {
        inlineImageLimit: -1,
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        defaultImageLoader: 'img-loader',
        mozjpeg: {
            quality: 85
        },
        optipng: false,
        pngquant: {
            speed: 7,
            quality: [0.65, 0.8]
        },
        webp: {
            quality: 85
        }
    }
}
