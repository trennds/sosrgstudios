<template>
  <div>
    <HeroIndex videoUrl="hero.mp4" title="Welcome to an Art Industry." description="SosrG StudioS" />
    <div class="container">
      <img
        src="@/assets/cuteCamera.png"
        alt="Cute Camera"
        class="bottom-right"
        :class="$store.state.navbarClass"
      />
      <div class="row justify-content-center p-4">
        <h1
          class="display-3"
          align="center"
          style="font-family: 'Bitter', serif;"
        >About SosrG StudioS</h1>
        <p class="lead" align="center">
          Here we innovate, create and work together with the creative minds in
          the industry.
        </p>
      </div>
      <hr />
    </div>
    <Services />
    <div class="container">
      <div class="row justify-content-center p-3">
        <h1 class="display-4" align="center" style="font-family: 'Bitter', serif;">Notifications</h1>
      </div>
      <hr />
    </div>
    <Notifications />
    <div class="title-container mt-5">
      <h1 class="display-4">Our Missions</h1>
    </div>
    <p class="mission-text">
      <ol>
        <li>To guide with the helps of our respective expertise in a proper way to all artist, belongings to any departments.</li>
        <li>To present Public Exhibition/Event in minimum 3 states in a year.</li>
        <li>To provide better platform for artist to perform.</li>
        <li>To develop and maintain equipment to artist in their work.</li>
        <li>To provide an Art educational opportunity and job.</li>
        <li>To offer regularly adult and children classes/Auditions/Seminar/workshops.</li>
        <li>To expand program and activities with increased facilities.</li>
      </ol>  
    </p>
  </div>
</template>

<script>
import HeroIndex from '@/components/HeroIndex'
import Services from '@/components/Services'
import Post from '@/components/Post'

import Notifications from '@/components/Notifications'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  components: {
    HeroIndex,
    Services,
    Notifications,
    Post
  },
  mounted() {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date()
    ;(function() {
      var s1 = document.createElement('script'),
        s0 = document.getElementsByTagName('script')[0]
      s1.async = true
      s1.src = 'https://embed.tawk.to/5dfe5abb27773e0d832a3529/default'
      s1.charset = 'UTF-8'
      s1.setAttribute('crossorigin', '*')
      s0.parentNode.insertBefore(s1, s0)
    })()
  }
}
</script>

<style scoped>
.title-container {
  padding-top: 10px;
  text-align: center;
}

.title-container h1::after {
  content: '';
  position: absolute;
  width: 20%;
  background-color: red;
  height: 5px;
  left: 50%;
  transform: translate(-50%, 5rem);
  transition: width 3s;
}

.title-container:hover h1::after {
  width: 50%;
}

.bottom-right {
  position: fixed;
  left: 100%;
  z-index: -1;
  opacity: 0.7;
  transform: translate(-70%, -100%) rotate(-30deg);
}

@media only screen and (max-width: 500px) {
  .bottom-right {
    display: none;
    }
}

.mission-text {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 2rem;
  }

.none {
  visibility: hidden;
}

.show {
  visibility: visible;
  animation: popOut 0.5s;
}

@keyframes popOut {
  0% {
    transform: translate(100%, 100%);
  }
  50% {
    transform: translate(-50%, -50%) rotate(-30deg);
  }
}
</style>
