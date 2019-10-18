<template>
  <div class="container-fluid works mt-4">
    <div class="row justify-content-center">
      <h2>Our Works</h2>
    </div>
    <hr />
    <div class="row justify-content-around works-images-body">
      <div class="card">
        <img
          src="../assets/graphics.jpg"
          alt=""
          class="img-card-top works-image"
        />
        <div class="card-body">
          <span class="card-title mx-auto d-block " align="center">Work 1</span>
        </div>
      </div>
      <div class="card">
        <img
          src="../assets/graphics.jpg"
          alt=""
          class="img-card-top works-image"
        />
        <div class="card-body">
          <span class="card-title mx-auto d-block" align="center">Work 1</span>
        </div>
      </div>
      <div class="card">
        <img
          src="../assets/graphics.jpg"
          alt=""
          class="img-card-top works-image"
        />
        <div class="card-body">
          <span class="card-title mx-auto d-block" align="center">Work 1</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Fascinate+Inline|Roboto&display=swap');
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');
.works h2 {
  font-size: 3rem;
  font-family: 'Fascinate Inline', cursive;
}

.works .card-title {
  font-size: 2rem;
  font-family: 'Abril Fatface', cursive;
}

.works-images-body {
  padding: 20px;
}

.works-image {
  width: 40vh;
}
</style>
