<template>
  <div class="container-fluid content-right" v-if="!isLeft">
    <div class="row">
      <div class="col-12 col-lg-7 content">
        <h1 class="title">{{ title }}</h1>
        <p>
          {{ description }}
        </p>
      </div>
      <div class="d-none d-md-block col-5">
        <img src="/assets/beach.jpg" alt="" />
      </div>
    </div>
  </div>
  <div class="container-fluid content-left" v-else>
    <div class="row">
      <div class="col-5 d-none d-md-block">
        <img src="/assets/graphics.jpg" alt="" />
      </div>
      <div class="col-12 col-lg-7 content">
        <h1 class="title">{{ title }}</h1>
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'isLeft', 'description']
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Fascinate+Inline|Lobster|Roboto&display=swap');

.content-right img {
  overflow: hidden;
  width: 100%;
  height: 500px;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%, 24% 50%);
  transition: clip-path 1s;
}

.content-right:hover img {
  clip-path: polygon(100% 0, 99% 100%, 36% 100%, 0 51%, 34% 0);
}

.content-right p {
  margin-top: 20px;
  padding: 10px;
  font-size: 2rem;
  align-content: center;
  font-family: 'Lobster', cursive;
}

.content-right h1 {
  padding: 10px;
  font-size: 3rem;
  margin: 10px 0px;
  font-family: 'Fascinate Inline', cursive;
}

.content-right h1:after {
  position: absolute;
  content: '';
  left: 30px;
  top: 6rem;
  width: 20%;
  height: 2px;
  border-style: solid;
  border-color: rgb(241, 82, 8);
  background-color: rgb(241, 82, 8);
  transition: width 2s;
}

.content-right:hover h1:after {
  width: 40%;
}

.content-left {
  padding-left: 0px !important;
  /* color: white;
    background-image: linear-gradient(to right top, #ea5e5e, #f26b7e, #f67b9c, #f78db7, #f49fcf); */
}

.content-left img {
  width: 100%;
  height: 500px;
  clip-path: polygon(100% 0, 68% 49%, 100% 100%, 0% 100%, 0 0);
  transition: clip-path 1s;
}

.content-left:hover img {
  clip-path: polygon(0 0, 71% 0, 100% 50%, 73% 100%, 0 100%);
}

.content-left p {
  margin-top: 20px;
  padding: 10px;
  font-size: 2rem;
  align-content: center;
  font-family: 'Lobster', cursive;
}

.content-left h1 {
  padding: 10px;
  font-size: 3rem;
  margin: 10px 0px;
  font-family: 'Fascinate Inline', cursive;
}

.content-left h1:after {
  position: absolute;
  content: '';
  left: 30px;
  top: 6rem;
  width: 20%;
  height: 2px;
  border-style: solid;
  border-color: rgb(241, 82, 8);
  background-color: rgb(241, 82, 8);
  transition: width 2s;
}

.content-left:hover h1:after {
  width: 40%;
}
</style>
