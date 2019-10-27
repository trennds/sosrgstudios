<template>
  <div id="footer">
  <div class="container p-3 align-middle">
    <div class="row justify-content-center align-middle">
      <div class="col-3"></div>
      <div class="col-6 align-middle">
        <div class="row justify-content-around align-middle p-5">
          <a href="https://www.facebook.com/SosrGStudioS/" class="footer-facebook">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/sosrg_studios/" class="footer-google">
            <i class="fa fa-instagram"></i>
          </a>
          <a href class="footer-twitter">
            <i class="fa fa-twitter"></i>
          </a>
        </div>
        <p
          class="lead p-3"
          align="middle"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aspernatur!</p>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
  </div>
</template>

<style scoped>
#footer {
  height: 200px;
  align-content: center;
  color: white !important;
}

.footer-google,
.footer-twitter,
.footer-facebook {
  color: grey;
  transform: scale(2);
  padding: 4px;
}

.footer-google:hover {
  padding: 4px;
  align-content: center;
  color: pink;
}

.footer-facebook:hover {
  padding: 4px;
  align-content: center;
  color: blue;
}

.footer-twitter:hover {
  padding: 4px;
  align-content: center;
  color: skyblue;
}
</style>
