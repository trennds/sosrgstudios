<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-4 col-lg-8 offset-md-1">
        <div class="role-container">
          <h1 class="role-title">{{ notifs[currIndex].title }}</h1>
          <p class="role-description">
            {{ notifs[currIndex].description }}
          </p>
        </div>
      </div>
      <div class="col-sm-1 col-lg-2 offset-md-1 pointer-container d-none d-lg-block">
        <div class="pointer" :class="index == currIndex ? 'pointer-active' : 'none'" v-for="(item, index) in notifs" :key="item.title" @click="click(index)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/contents/notifications.json'

export default {
  data() {
    return {
      currIndex: 0,
      notifs: data
    }
  },
  mounted() {
    setInterval(this.changeSlide, 4000)
  },
  methods: {
    click(index) {
      this.currIndex = index
    },
    changeSlide() {
      if(this.notifs.length - 1 ==  this.currIndex) this.currIndex = 0
      else this.currIndex++
    }
  }
}
</script>

<style scoped>
.role-container {
  background-color: transparent;
  padding: 20px;
  color: white;
  opacity: 0.5;
  margin: 20px 10px;
  box-shadow: none;
  border-radius: 10px;
  margin-bottom: 60px;
  transition: opacity 2s, box-shadow 3s;
}

.role-container:hover {
  opacity: 1;
  box-shadow: 3px 4px 35px 19px rgba(255, 255, 255, 1);
}

.role-container .role-title {
  font-size: 3rem;
}

.role-container h1:after {
  position: absolute;
  content: '';
  /* top: 9rem; */
  width: 20%;
  left: 50px;
  height: 2px;
  border-style: solid;
  border-color: rgb(241, 82, 8);
  background-color: rgb(241, 82, 8);
  transition: width 1s;
  transform: translate(0%, 70px);
}

.role-container:hover h1:after {
  width: 70%;
}

.role-container .role-description {
  margin-top: 30px;
  font-size: 2rem;
}
.pointer-container {
  padding-top: 50px;
}
.pointer {
  margin-bottom: 20px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: white;
}

.pointer-active {
  border-color: blue;
  border-width: 5px;
  border-style: solid;
}
</style>
