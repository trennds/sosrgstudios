<template>
  <div>
    <Hero
      videoUrl="hero.mp4"
      title="Welcome to Art Industries"
      description="A platform to perform."
    />
    <div class="container">
      <div class="row justify-content-center p-4">
        <h1
          class="display-3 text-white"
          align="center"
          style="font-family: 'Bitter', serif;"
        >
          Welcome to SosrG StudioS
        </h1>
        <p class="lead text-white" align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odit quasi
          optio fugit nihil architecto!
        </p>
      </div>
      <hr />
    </div>
    <Services />
    <div class="container">
      <div class="row justify-content-center p-3">
        <h1
          class="display-4 text-white"
          align="center"
          style="font-family: 'Bitter', serif;"
        >
          Notifications
        </h1>
      </div>
      <hr />
    </div>
    <Notifications />
    <Banner />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Banner from '@/components/Banner'
import Notifications from '@/components/Notifications'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  components: {
    Hero,
    Services,
    Banner,
    Notifications
  }
}
</script>
