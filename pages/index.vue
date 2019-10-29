<template>
  <div>
    <HeroIndex
      videoUrl="hero.mp4"
      title="Welcome to an Art Industry."
      description="SosrG Studios"
    />
    <div class="container">
      <div class="row justify-content-center p-4">
        <h1
          class="display-3 text-white"
          align="center"
          style="font-family: 'Bitter', serif;"
        >
          About SosrG StudioS
        </h1>
        <p class="lead text-white" align="center">
          Here we innovate, create and work together with the creative minds in the industry.
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
  </div>
</template>

<script>
import HeroIndex from '@/components/HeroIndex'
import Services from '@/components/Services'

import Notifications from '@/components/Notifications'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  components: {
    HeroIndex,
    Services,
    Notifications
  }
}
</script>
