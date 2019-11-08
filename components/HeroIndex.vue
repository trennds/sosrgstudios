<template>
  <div v-observe-visibility="print">
    <div id="hero">
      <video autoplay muted loop class="bg-video">
        <source :src="require(`~/assets/${videoUrl}`)" type="video/mp4" />
      </video>
      <div class="content" :class="revealText">
        <h1>{{ title }}</h1>
        <h2>{{ description }}</h2>
        <p>A platform to perform.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)

export default {
  props: ['videoUrl', 'title', 'description'],
  data() {
    return {
      revealText: 'none'
    }
  },
  methods: {
    print(isVisible, entry) {
      if (isVisible) {
        console.log('ewbdf')
        this.revealText = 'revealText'
        this.$store.commit('change', 'none')
      } else {
        this.revealText = 'none'
        this.$store.commit('change', 'show')
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Archivo+Black|Fredericka+the+Great&display=swap');
#hero {
  top: 0;
  bottom: 0;
  right: 0;
  position: relative;
}
#hero h1,
h2 {
  color: white;
  /* animation-name: revealText; */
  animation-timing-function: linear;
}
#hero .content {
  position: absolute;
  text-align: center;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -60%);
}

#hero h1 {
  text-align: center;
  font-size: 2.25rem;
  font-family: 'Fredericka the Great', cursive !important;
}
#hero h2 {
  margin-top: 40px;
  font-size: 5.5rem;
  font-family: 'Archivo Black', sans-serif !important;
}

#hero p {
  color: white;
  font-size: 2rem;
}
#hero .bg-video {
  position: relative;
  right: 0;
  bottom: 0;
  left: 0px;
  padding: 0;
  /* opacity: 0.7; */
}

@media screen and (max-width: 700px) {
  #hero .bg-video {
    height: 100vh;
    transform: translateX(-50%);
  }
  #hero h1 {
        font-size: 3rem;
        margin-left: 2px !important;
        margin-right: 2px !important;
    }
    #hero h2 {
      font-size: 1.5rem;
    }

   #hero .content {
  position: absolute;
  text-align: center;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -20%);
}
}

@media screen and (min-width: 701px){
  #hero .bg-video {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}

.revealText {
  animation: revealText 4s;
}

@keyframes revealText {
  0% {
    position: absolute;
    opacity: 0;
    left: 50%;
    top: 40%;
    transform: translate(-50%, 100px);
  }
  100% {
    position: absolute;
    opacity: 1;
    left: 50%;
  }
}
</style>
