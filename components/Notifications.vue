<template>
  <div v-observe-visibility="print">
    <img
      src="/assets/lens.png"
      class="side-image d-none d-lg-block"
      :class="className"
    />
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-4 col-lg-8 offset-md-1">
          <div class="role-container" :class="currentClass">
            <h1 class="role-title">{{ notifs[currIndex].title }}</h1>
            <p class="role-description">
              {{ notifs[currIndex].description }}
            </p>
          </div>
        </div>
        <div
          class="col-sm-1 col-lg-2 offset-md-1 pointer-container d-none d-lg-block"
        >
          <div
            class="pointer"
            :class="index == currIndex ? 'pointer-active' : 'none'"
            v-for="(item, index) in notifs"
            :key="item.title"
            @click="click(index)"
          ></div>
        </div>
      </div>
      <div class="row justify-content-between pointer-row">
        <div
          class="pointer"
          :class="index == currIndex ? 'pointer-active' : 'none'"
          v-for="(item, index) in notifs"
          :key="item.title"
          @click="click(index)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/contents/notifications.json'
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
import axios from 'axios'

Vue.use(VueObserveVisibility)

export default {
  data() {
    return {
      currIndex: 0,
      notifs: data,
      currentClass: 'none',
      className: ''
    }
  },
  mounted() {
    var self = this
    setInterval(this.changeSlide, 4000)
    axios
      .get(
        'https://pxpwk6ap0j.execute-api.ap-south-1.amazonaws.com/latest/notifications/index'
      )
      .then(res => {
        self.notifs = res.data.Items
      })
  },
  methods: {
    click(index) {
      this.currIndex = index
    },
    changeSlide() {
      if (this.notifs.length - 1 == this.currIndex) this.currIndex = 0
      else this.currIndex++
    },
    print(isVisible, entry) {
      if (isVisible) {
        this.currentClass = 'brighten'
        this.className = 'slideIn'
      } else {
        this.currentClass = 'none'
        this.className = 'none'
      }
    }
  }
}
</script>

<style scoped>
.role-container {
  background-color: transparent;
  padding: 20px;
  opacity: 0.5;
  margin: 20px 10px;
  box-shadow: none;
  border-radius: 10px;
  margin-bottom: 60px;
  transition: opacity 2s, box-shadow 3s;
}

.brighten {
  opacity: 1;
  box-shadow: 3px 4px 35px 19px rgb(31, 29, 29);
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
  background-color: rgb(26, 25, 25);
}

.pointer-active {
  border-color: rgb(230, 230, 238);
  border-width: 5px;
  border-style: solid;
}

.pointer-row {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.pointer-row div {
  margin-right: 15px;
}

.side-image {
  position: absolute;
  left: 0px;
  height: 300px;
}

.slideIn {
  transform: translate(-50%, -30%);
  animation: slideIn 1s;
}

@keyframes slideIn {
  0% {
    transform: translate(-100%, -30%)
  }
  /* 50% {
    transform: translate(-75%, -30%)
  } */
}

@media screen and (max-width: 699px) {
  .role-container .role-title {
    font-size: 2rem;
  }
  .role-container .role-description {
    font-size: 1.5rem;
  }

  .role-container h1:after {
    transform: translate(0%, 50px);
  }
}

@media screen and (min-width: 700px) {
  .pointer-row {
    visibility: hidden;
  }
}
</style>
