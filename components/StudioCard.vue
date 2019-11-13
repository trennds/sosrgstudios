<template>
<div v-observe-visibility="onEntered">
  <div class="service-lg service md-4" :class="cardClass">
    <img :src="image" alt="..." />
    <div class="desc">
      <div class="title" align="center">
        <nuxt-link :to="url">{{ title }}</nuxt-link>
      </div>
      <p align="center">
        {{ description }}
      </p>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'


Vue.use(VueObserveVisibility)

export default {
  props: ['image', 'title', 'description', 'url'],
  data() {
    return {
      cardClass: ''
    }
  },
  methods: {
    onEntered(isVisible, entry) {
      console.log('wdw')
      if(isVisible) this.cardClass = 'opacityEnter'
      else this.cardClass = 'opacityExit'
    }
  }
}
</script>

<style scoped>
.service {
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 1px -1px 32px 1px rgba(22, 21, 21, 0.85);
}

.service-lg {
  height: 550px !important;
}

.service-lg .title {
  font-size: 2.5rem !important;
}

.service {
  height: 500px;
}

.service .title {
  font-size: 2.2rem;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
}

.service .desc {
  padding: 15px 15px;
  font-size: 1.1rem;
}

.service img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0%, 100% 80%, 0% 100%);
  transition: clip-path 1s;
}

.service:hover img {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
}
.opacityEnter {
  animation: opacityEnter 2s;
}
.opacityExit {
  opacity: 0.2;
  box-shadow: none;
  /* animation: opacityExit 2s; */
}
@keyframes opacityEnter {
  0% {
    opacity: 0.2;
    box-shadow: none;
  }
  50% {
    opacity: 0.75;
  }
}
@keyframes opacityExit {
  from {
    box-shadow: 1px -1px 32px 1px rgba(31, 29, 29, 0.85);
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
}
</style>
