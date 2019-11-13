<template>
  <div>
    <Hero
      videoUrl="forest.mp4"
      title="Welcome to Cine Studio"
      description="This is the parent studio where movie editing, final cutting and production management takes place."
    />
    <div class="container">
      <div class="row justify-content-center">
        <div class="title-container">
          <h1 class="display-4">About the Studio</h1>
          <p>
            We fulfil the need of filmmakers in every region of the
            country/world. ie: Casting(Crew and cast), Production Unit, Post
            Production(Editing,VFX,BGM,CC,CGI,DI etc),Music Direction, Art and
            costume Designing, Distributors, and Publicity as well as Marketing
            And also our expert is available to answer all the questions related
            to filmmaking or queries regarding function of production house.
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="title-container">
          <h1 class="display-4">Our Works</h1>
          <div class="works">
            <img src="@/assets/cowmedy.jpeg" alt="cowmedy-poster" />
            <h2>
              <a
                href="https://www.facebook.com/SpinningWorldProductions/videos/t.100002973274636/1532307493545761/?type=2&video_source=user_video_tab"
                class="text-white"
                >Cawmedy - Gaurav Asri</a
              >
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="title-container">
          <h1 class="display-4">Our New Film Release</h1>
          <div class="works">
            <img src="https://s3.ap-south-1.amazonaws.com/assets.sosrgstudios.com/works/abhinav.jpeg" alt="cowmedy-poster" />
            <h2>
              Abhinav- Film by Yogesh Bhardwaj
            </h2>
          </div>
        </div>
      </div>
    </div>
    <AnimatedWorks title="Movie Releases" :images="images" />
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
import AnimatedWorks from '@/components/AnimatedWorks'
import contents from '@/contents/cinestudio.json'

import axios from 'axios'

export default {
  components: {
    Feature,
    Works,
    Youtube,
    StudioCard,
    Hero,
    Role,
    AnimatedWorks
  },
  data() {
    return {
      content: contents,
      roles: [],
      images: [
        'https://s3.ap-south-1.amazonaws.com/assets.sosrgstudios.com/works/ek+ladki+ko+dekha+toh+aisa+laga.jpeg',
        'https://s3.ap-south-1.amazonaws.com/assets.sosrgstudios.com/works/janbaaz.jpeg',
        'https://s3.ap-south-1.amazonaws.com/assets.sosrgstudios.com/works/malaal.jpeg',
        'https://s3.ap-south-1.amazonaws.com/assets.sosrgstudios.com/works/nakhra.jpeg',
        'https://s3.ap-south-1.amazonaws.com/assets.sosrgstudios.com/works/satellite+shankar.jpeg',
        'https://s3.ap-south-1.amazonaws.com/assets.sosrgstudios.com/works/sp+chauhan.jpeg'
      ]
    }
  },
  mounted() {
    var self = this
    axios.get('https://pxpwk6ap0j.execute-api.ap-south-1.amazonaws.com/latest/roles/c55ea5e0-f2a9-11e9-b681-eb6326813aa9').then(res => {
      self.roles = res.data
    })
  }
}
</script>

<style scoped>
#hero-section #hero-back {
  /* background-image: url('../assets/cine.jpg'); */
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
  box-shadow: 1px -1px 10px 1px rgba(22, 21, 21, 0.85);
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
    font-size: 1.2rem;
  }

  .role {
    font-size: 1.5rem;
    padding-right: 10px;
  }
}

.works img {
  width: 40%;
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

@media screen and (min-width: 992px) {
  .title-container p {
    margin-top: 50px;
    padding: 20px 100px;
    line-height: 2.5rem;
    font-size: 1.5rem;
  }
}
</style>
