<template>
  <b-navbar
    toggleable="lg"
    fixed="top"
    type="light"
    variant="light"
    :class="$store.state.navbarClass"
  >
    <b-navbar-brand href="#">Sosrg Studios</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Contact Us</b-nav-item>
        <b-nav-item-dropdown text="Our Studios" right>
          <b-dropdown-item href="#">SosrG Cine Studio</b-dropdown-item>
          <b-dropdown-item href="#"
            >SosrG Acting and Casting Studio</b-dropdown-item
          >
          <b-dropdown-item href="#">SosrG Music Studio</b-dropdown-item>
          <b-dropdown-item href="#">SosrG Dance Studio</b-dropdown-item>
          <b-dropdown-item href="#">SosrG Art and Craft Studio</b-dropdown-item>
          <b-dropdown-item href="#">SosrG Literacy Studio</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <!-- <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Search</b-button
          >
        </b-nav-form>
      </b-navbar-nav> -->
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
.none {
  visibility: hidden;
}
.show {
  visibility: visible;
}
</style>
