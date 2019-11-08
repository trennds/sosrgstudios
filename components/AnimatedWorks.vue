<template>
  <div>
    <div class="title">{{ title }}</div>
    <div class="body">
      <div class="loader">
        <Loader />
      </div>
      <img :src="i" alt="..." v-for="i in images" :key="i" />
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'

export default {
  props: ['title', 'images'],
  components: {
    Loader
  },
  mounted() {
    $('.loader').hide()

    // main image loaded ?
    $('img').on('load', function() {
      // hide/remove the loading image
      // $('.loader').hide()
    })
  }
}
</script>

<style scoped>
.body {
  display: flex;
}

.body img {
  width: 20%;
  margin: 30px;
  height: 200px;
}
</style>
