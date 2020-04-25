<template>
  <div id="studios" v-observe-visibility="print">
    <img src="/assets/camera.png" class="side-image d-none d-lg-block" :class="className" />
    <div class="container">
      <div class="row">
        <div class="col-lg-4 p-4 offset-lg-4">
          <StudioCard
            :image="studios[0].image"
            :title="studios[0].title"
            :description="studios[0].description"
            :url="studios[0].url"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 p-4 offset-lg-1">
          <StudioCard
            :image="studios[1].image"
            :title="studios[1].title"
            :description="studios[1].description"
            :url="studios[1].url"
          />
        </div>
        <div class="col-lg-4 p-4 offset-lg-2">
          <StudioCard
            :image="studios[2].image"
            :title="studios[2].title"
            :description="studios[2].description"
            :url="studios[2].url"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 p-4">
          <StudioCard
            :image="studios[3].image"
            :title="studios[3].title"
            :description="studios[3].description"
            :url="studios[3].url"
          />
        </div>
        <div class="col-lg-4 p-4">
          <StudioCard
            :image="studios[4].image"
            :title="studios[4].title"
            :description="studios[4].description"
            :url="studios[4].url"
          />
        </div>
        <div class="col-lg-4 p-4">
          <StudioCard
            :image="studios[5].image"
            :title="studios[5].title"
            :description="studios[5].description"
            :url="studios[5].url"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)

import StudioCard from '@/components/StudioCard'
import data from '@/contents/studios.json'
export default {
  components: {
    StudioCard
  },
  data() {
    return {
      studios: data,
      className: '',
      className2: ''
    }
  },
  methods: {
    print(isVisible, entry) {
      if (isVisible) {
        this.className = 'popOut'
      } else {
        this.className = 'none'
      }
    }
  }
}
</script>

<style scoped>
.side-image {
  position: absolute;
  left: 0%;
  transform: translate(-50%, 0%) rotate(60deg);
  height: 800px;
}
.popOut {
  animation: popOut 1s;
}

@keyframes popOut {
  from {
    transform: translate(-50%, 0%) rotate(0deg);
  }
  to {
    transform: translate(-50%, 0%) rotate(60deg);
  }
}
</style>
