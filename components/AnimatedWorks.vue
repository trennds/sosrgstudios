<template>
  <div>
    <div class="title">{{ title }}</div>
    <div class="body">
      <div class="loader">
        <Loader />
      </div>
      <img :src="img[i]" alt="..." v-for="i in currentIndex" :key="i" />
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
  data() {
    return {
      currentIndex: [],
      img: this.images
    }
  },
  mounted() {
    $('.loader').hide()
    this.change()

    // main image loaded ?
    $('img').on('load', function() {
      // hide/remove the loading image
      // $('.loader').hide()
    })
  },
  methods: {
    change() {
      let min = this.img.length < 3 ? this.img.length : 3
      // if(this.currentIndex)
      for(let i=0; i<min;i++) this.currentIndex.push(i)
    }
  }
}
</script>

<style scoped>
.body {
  display: flex;
  justify-content:space-around;
  margin-bottom: 20px;
}

.body img {
  width: 20%;
  margin: 30px;
  height: 200px;
}

.body img:nth-child(odd) {
  transform: scale(1.4);
}
</style>
