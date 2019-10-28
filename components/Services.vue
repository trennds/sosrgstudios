<template>
  <div id="studios">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 p-4 offset-lg-4">
          <StudioCard
            :image="studios[0].image"
            :title="studios[0].title"
            :description="studios[0].description"
            :url="studios[0].url"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 p-4 offset-lg-1">
          <StudioCard
            :image="studios[1].image"
            :title="studios[1].title"
            :description="studios[1].description"
            :url="studios[1].url"
          />
        </div>
        <div class="col-lg-4 p-4 offset-lg-2">
          <StudioCard
            :image="studios[2].image"
            :title="studios[2].title"
            :description="studios[2].description"
            :url="studios[2].url"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 p-4">
          <StudioCard
            :image="studios[3].image"
            :title="studios[3].title"
            :description="studios[3].description"
            :url="studios[3].url"
          />
        </div>
        <div class="col-lg-4 p-4">
          <StudioCard
            :image="studios[4].image"
            :title="studios[4].title"
            :description="studios[4].description"
            :url="studios[4].url"
          />
        </div>
        <div class="col-lg-4 p-4">
          <StudioCard
            :image="studios[5].image"
            :title="studios[5].title"
            :description="studios[5].description"
            :url="studios[5].url"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StudioCard from '@/components/StudioCard'
import data from '@/contents/studios.json'
export default {
  components: {
    StudioCard
  },
  data() {
    return {
      studios: data
    }
  }
}
</script>

<style scoped></style>
