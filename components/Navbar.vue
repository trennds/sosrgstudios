<template>
  <b-navbar
    toggleable="lg"
    fixed="top"
    type="light"
    variant="light"
    :class="$store.state.navbarClass"
  >
    <b-navbar-brand href="#">Sosrg StudioS</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"
          ><nuxt-link to="/" class="text-secondary">Home</nuxt-link></b-nav-item
        >
        <b-nav-item href="#">Contact Us</b-nav-item>
        <b-nav-item-dropdown text="Our Studios" right>
          <b-dropdown-item href="#"
            ><nuxt-link to="/cinestudio"
              >SosrG Cine Studio</nuxt-link
            ></b-dropdown-item
          >
          <b-dropdown-item href="#"
            ><nuxt-link to="/actingstudio"
              >SosrG Acting and Casting Studio</nuxt-link
            ></b-dropdown-item
          >
          <b-dropdown-item href="#"
            ><nuxt-link to="/musicstudio"
              >SosrG Music Studio</nuxt-link
            ></b-dropdown-item
          >
          <b-dropdown-item href="#"
            ><nuxt-link to="/dancestudio"
              >SosrG Dance Studio</nuxt-link
            ></b-dropdown-item
          >
          <b-dropdown-item href="#"
            ><nuxt-link to="/artstudio"
              >SosrG Art and Craft Studio</nuxt-link
            ></b-dropdown-item
          >
          <b-dropdown-item href="#"
            ><nuxt-link to="/literarystudio"
              >SosrG Literary Studio</nuxt-link
            ></b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-button size="sm" class="my-2 my-sm-0 connect-button" type="submit"
            ><a
              href="https://connect.sosrgstudios.com/welcome"
              class="text-white"
              >SosrG Connect</a
            ></b-button
          >
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
export default {}
</script>

<style scoped>
.none {
  visibility: hidden;
}
.show {
  visibility: visible;
}

.connect-button {
  background-color: rgba(241, 82, 8, 1) !important;
  color: white !important;
}
</style>
