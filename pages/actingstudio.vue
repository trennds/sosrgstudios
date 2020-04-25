<template>
  <div>
    <Hero
      videoUrl="acting.mp4"
      title="Welcome to SosrG Acting and Casting Studio"
      description=""
    />
    <div class="container">
      <div class="row justify-content-center">
        <div class="title-container">
          <h1 class="display-4">About the Studio</h1>
          <p>
            Making all actors related to acting aware of every aspect of the
            audition process and also our expert is available to answer all the
            questions related to Acting And casting.
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="title-container">
          <h1 class="display-4">Bhram- A Webseries by ZEE5</h1>
          <div class="works">
            <img src="https://s3.ap-south-1.amazonaws.com/assets.sosrgstudios.com/works/bhram.jpeg" alt="cowmedy-poster" />
            <h2>
              Samsher Singh Sam as Casting Director
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="title-container">
          <h1 class="display-4">Choose Your Role</h1>
        </div>
      </div>
      <div class="roles-container">
        <div class="row">
          <div class="col-lg-6 p-4" v-for="item in roles" :key="item">
            <Role :name="item.name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Feature from '@/components/Feature'
import StudioCard from '@/components/StudioCard'
import Works from '@/components/Works'
import Hero from '@/components/Hero'
import Role from '@/components/Role'
import Youtube from '@/components/Youtube'
import contents from '@/contents/cinestudio.json'

import axios from 'axios'

export default {
  components: {
    Feature,
    Works,
    Youtube,
    StudioCard,
    Hero,
    Role
  },
  data() {
    return {
      content: contents,
      roles: []
    }
  },
  mounted() {
    var self = this
    axios.get('https://pxpwk6ap0j.execute-api.ap-south-1.amazonaws.com/latest/roles/4c888370-f2b8-11e9-bba2-d1d49d62f296').then(res => {
      self.roles = res.data
    })
  }
}
</script>

<style scoped>
#hero-section #hero-back {
  /* background-image: url('/assets/cine.jpg'); */
  opacity: 0.9;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

#hero-section .description {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Roboto', sans-serif;
}

#hero-section .description .desc {
  font-size: 1.3rem;
}

#hero-section img {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  height: 100px;
}

#godown {
  position: absolute;
  left: 50%;
  /* transform: translate(0%, -50%);*/
  transform: scale(3);
  bottom: 5%;
  animation: vibrate 2s infinite;
}

@keyframes vibrate {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

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

.roles-container {
  margin-top: 40px;
}
.role {
  box-shadow: 1px -1px 10px 1px rgba(26, 25, 25, 0.85);
  padding: 30px;
  font-size: 2rem;
  border-radius: 5px;
}

.role i {
  transform: scale(2);
  margin-right: 20px;
  color: green;
}

@media screen and (max-width: 991px) {
  .title-container p {
    margin-top: 50px;
    padding: 20px 10px;
    line-height: 2.5rem;
    font-size: 1.5rem;
  }

  .role {
    font-size: 1.5rem;
    padding-right: 10px;
  }
}

@media screen and (min-width: 992px) {
  .title-container p {
    margin-top: 50px;
    padding: 20px 100px;
    line-height: 2.5rem;
    font-size: 1.5rem;
  }
}

.works img {
  width: 80%;
  padding: 5px;
  margin: 25px 0px;
}

.works {
  margin-bottom: 60px;
}

.works h2::after {
  content: '';
  position: absolute;
  width: 50%;
  height: 2px;
  left: 50%;
  transform: translate(-50%, 3.5rem);
}
</style>
