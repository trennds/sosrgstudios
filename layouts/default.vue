<template>
  <div>
    <Navbar />
    <nuxt />
    <Banner />
    <Footer />
  </div>
</template>

<style>
body {
  background-color: black !important;
  overflow-x: hidden;
}

body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: rgb(94, 82, 82);
  outline: 1px solid rgb(87, 81, 81);
  border-radius: 0.5em;
}
</style>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
export default {
  components: {
    Navbar,
    Footer,
    Banner
  }
}
</script>
