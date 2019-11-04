<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="title-container">
        <h1 class="display-4">{{ title }}</h1>
        <div class="controls">
          <div class="control-left" @click="prev"><i class="fa fa-chevron-left"></i></div>
          <div class="control-right" @click="next"><i class="fa fa-chevron-right"></i></div>
        </div>
        <div class="works">
          <img :src="images[index]" alt="cowmedy-poster" />
          <!-- <h2>
            <a
              href="https://www.facebook.com/SpinningWorldProductions/videos/t.100002973274636/1532307493545761/?type=2&video_source=user_video_tab"
              class="text-white"
              >Cawmedy - Gaurav Asri</a
            >
          </h2> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'images'],
  data() {
    return {
      index: 0
    }
  },
  methods: {
    next() {
      if(this.index == this.images.length - 1) this.index = 0;
      else this.index++;
    },
    prev() {
      if(this.index == 0) this.index = this.images.length - 1;
      else this.index--;
    }
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

@media screen and (max-width: 991px) {
  .title-container p {
    margin-top: 50px;
    padding: 20px 10px;
    line-height: 2.5rem;
    font-size: 1.2rem;
  }
}

.works img {
  max-height: 400px;
  max-width: 400px;
  padding: 5px;
  margin: 25px 0px;
  border-radius: 5px;
}

.works {
  margin-bottom: 60px;
}

.works h2::after {
  content: '';
  position: absolute;
  width: 50%;
  background-color: white;
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

.control-left {
  position: absolute;
  left: 30%;
  transform: translate(0%, 200px) scale(2);
}

.control-right {
  position: absolute;
  left: 70%;
  transform: translate(0%, 200px) scale(2);
}

.control-right:hover, .control-left:hover {
  background-color: rgba(32, 98, 241, 0.2);
  /* border-radius: 50%; */
  padding: 5px;
}
</style>
