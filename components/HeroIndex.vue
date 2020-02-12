<template>
  <div v-observe-visibility="print">
    <div id="hero">
      <!-- <img src="hero1.png" alt=""> -->
      <img src="undraw.svg" alt />
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
  height: 100vh;
}
#hero h1,
h2 {
  color: black;
  /* animation-name: revealText; */
  animation-timing-function: linear;
}
#hero .content {
  position: absolute;
  text-align: left;
  left: 5%;
  top: 50%;
  transform: translate(-0%, -50%);
}

#hero h1 {
  text-align: left;
  font-size: 2rem;
  font-family: 'Fredericka the Great', cursive !important;
}
#hero h2 {
  margin-top: 10px;
  font-size: 4.5rem;
  font-family: 'Archivo Black', sans-serif !important;
}

#hero p {
  font-size: 2rem;
}

#hero img {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  width: 60%;
  max-height: 500px;
}

@media screen and (max-width: 700px) {
  #hero h1 {
    font-size: 1.5rem;
    margin-left: 2px !important;
    margin-right: 2px !important;
    text-align: center;
  }
  #hero h2 {
    font-size: 2rem;
    text-align: center;
  }

  #hero .content {
    position: absolute;
    text-align: center;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
  }

  #hero img {
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.revealText {
  animation: revealText 4s;
}

@keyframes revealText {
  0% {
    position: absolute;
    opacity: 0;
    top: 100%;
  }
  100% {
    position: absolute;
    opacity: 1;
  }
}
</style>
