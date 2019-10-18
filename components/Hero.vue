<template>
  <div id="hero-section">
    <div id="hero-back"></div>
    <!-- <img src="s.png" alt="" class="mx-auto d-none d-lg-block" align="center"> -->
    <div class="row description justify-content-center text-white">
      <h1 class="display-1 mx-auto d-block" align="center">SosrG StudioS</h1>
      <p class="mx-auto d-block desc" align="center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Totam laborum asperiores, iusto corporis
        officiis atque dignissimos voluptas ratione veniam dolorum!
      </p>
    </div>
    <div id="godown">
      <a href="#studios">
        <i class="fa fa-arrow-down"></i>
      </a>
    </div>
  </div>
</template>

<style scoped>
#hero-section #hero-back {
  background-image: url('../assets/beach.jpg');
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

#godown a {
  color: white;
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
</style>
