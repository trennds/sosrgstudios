<template>
  <div>
    <div class="title">
      <h1 class="display-4">{{ title }}</h1></div>
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
  margin-top: 100px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 7px 9px 13px 0px rgba(0,0,0,0.75);
}

.title {
  padding-top: 10px;
  text-align: center;
}

.title h1::after {
  content: '';
  position: absolute;
  width: 20%;
  background-color: red;
  height: 5px;
  left: 50%;
  transform: translate(-50%, 5rem);
  transition: width 3s;
}

.title:hover h1::after {
  width: 50%;
}

.body img:nth-child(odd) {
  transform: scale(1.4);
}
</style>
