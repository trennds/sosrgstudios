<template>
  <div id="studios">
    <div class="container">
      <div class="row justify-content-center p-4">
        <h1
          class="display-3"
          align="center"
          style="font-family: 'Bitter', serif;"
        >Welcome to SosrG StudioS</h1>
        <p class="lead" align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odit quasi
          optio fugit nihil
          architecto!
        </p>
      </div>
      <hr />
    </div>

    <div class="container">
      <div class="row align-items-middle">
        <div class="col-sm-6 col-md-4 p-4">
          <div class="service">
            <img src="@/assets/acting.jpg" alt="..." />
            <div class="desc">
              <div class="title" align="center">Acting Studio</div>
              <p align="center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit illum quia, quas
                fugit
                perferendis doloremque voluptates. Quod amet aspernatur eaque.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 p-1">
          <div class="service-lg service">
            <img src="@/assets/cine.jpg" alt="..." />
            <div class="desc">
              <div class="title" align="center"><nuxt-link to="/cinestudio">Cine Studio</nuxt-link></div>
              <p align="center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit illum quia, quas
                fugit
                perferendis doloremque voluptates. Quod amet aspernatur eaque.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 p-4">
          <div class="service">
            <img src="~/assets/dance.jpg" alt="..." />
            <div class="desc">
              <div class="title" align="center">Dance Studio</div>
              <p align="center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit illum quia, quas
                fugit
                perferendis doloremque voluptates. Quod amet aspernatur eaque.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 p-4">
          <div class="service">
            <img src="@/assets/art.jpg" alt="..." />
            <div class="desc">
              <div class="title" align="center">Art Studio</div>
              <p align="center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit illum quia, quas
                fugit
                perferendis doloremque voluptates. Quod amet aspernatur eaque.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 p-4">
          <div class="service">
            <img src="@/assets/music.jpg" alt="..." />
            <div class="desc">
              <div class="title" align="center">Music Studio</div>
              <p align="center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit illum quia, quas
                fugit
                perferendis doloremque voluptates. Quod amet aspernatur eaque.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 p-4">
          <div class="service">
            <img src="@/assets/literature.jpg" alt="..." />
            <div class="desc">
              <div class="title" align="center">Literature Studio</div>
              <p align="center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit illum quia, quas
                fugit
                perferendis doloremque voluptates. Quod amet aspernatur eaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid welcome p-4">
      <div class="desc">
        <h1 class="display-4 text-white">Want to connect with people</h1>
        <p class="lead text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          quibusdam
          animi maxime
          cupiditate consequatur dicta sed id corrupti possimus voluptate provident saepe porro, quas
          molestias?
        </p>
        <a class="btn btn-primary btn-lg m-2" href="#" role="button">Open Sosrg Connect</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service {
  border: 1px solid;
  transition: box-shadow 0.6s ease-out;
  box-shadow: 0.8px 0.9px 3px grey;
}

.card:hover {
  box-shadow: 1px 8px 20px grey;
  transition: box-shadow 0.6s ease-in;
}

.service-lg {
  height: 550px !important;
}

.service-lg .title {
  font-size: 3rem !important;
}

.service {
  height: 500px;
}

.service:hover {
  box-shadow: 5px 5px #888888;
}

.service .title {
  font-size: 2.2rem;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
}

.service .desc {
  padding: 15px 15px;
  font-size: 1.1rem;
}

.service img {
  width: 100%;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0%, 100% 80%, 0% 100%);
  transition: clip-path 1s;
}

.service:hover img {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
}

.welcome {
  background-image: url('../assets/drawing.jpg');
  background-size: cover;
  background-attachment: fixed;
  font-family: 'Roboto', sans-serif;
}
</style>
