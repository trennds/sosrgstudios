<template>
  <div>
    <HeroIndex
      videoUrl="hero.mp4"
      title="Welcome to an Art Industry."
      description="SosrG StudioS"
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
          Here we innovate, create and work together with the creative minds in
          the industry.
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
    <div class="title-container mt-5">
      <h1 class="display-4">Current Posts</h1>
    </div>
    <Post />
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
  }
}
</script>

<style scoped>
.title-container {
  padding-top: 10px;
  text-align: center;
  color: white;
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
</style>
