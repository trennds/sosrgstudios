<template>
  <div class="row">
    <div class="col-2 d-none d-lg-block"></div>
    <div class="col-sm-12 col-lg-8">
      <div class="post" v-for="i in posts" :key="i.id">
        <div class="header row align-content-center">
            <img :src="i.profilePic" alt="">
          <div class="name">{{ i.name }}</div>
        </div>
        <div class="ruler"></div>
        <div class="body">
          <div class="description" v-if="i.description != 'null'">
            {{ i.description }}
          </div>
          <div class="image" v-if="i.image != 'null'">
            <img :src="i.image" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="col-2 d-none d-lg-block"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    var self = this
    axios.get('https://m2bdxdzx0m.execute-api.ap-south-1.amazonaws.com/latest/posts').then(res => {
      console.log(res.data)
      for(let i=0; i < res.data.length; i++) {
        axios.get(`https://6bockwmbv5.execute-api.ap-south-1.amazonaws.com/latest/account/${res.data[i].uploader}`).then(val => {
          self.posts.push({
            id: res.data[i].id,
            name: val.data[0].givenName,
            profilePic: val.data[0].picture,
            description: res.data[i].description,
            image: res.data[i].image
          })
        })
      }
    })
  }
}
</script>

<style scoped>
.post {
  padding: 20px;
  margin-top: 30px;
  border-style: solid;
  color: white;
  border-width: 1px;
}

.post .header {
  margin-left: 5px;
  padding: 10px;
  font-size: 1.7rem;
  color: white;
}

.post .header img {
  height: 50px;
  margin-right: 20px;
}

.post .body {
  color: white;
  font-size: 1.2rem;
  margin-top: 10px;
  padding: 10px;
  display: flex;
}

@media screen and (max-width: 700px) {
  .post .body {
    flex-direction: column;
  }
}

.post .body img {
  padding: 10px;
  max-width: 100%;
  max-height: 400px;
  margin-left: auto;
  margin-right: auto;
}

.ruler {
  width: 98%;
  height: 2px;
  background-color: white;
}
</style>
