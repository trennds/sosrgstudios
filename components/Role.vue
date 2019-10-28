<template>
  <div class="role" @click="onClick" :class="isSelected ? 'selected' : 'none'">
    <i class="fa fa-check-circle"></i>
    <span>{{ name }}</span>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  props: ['name'],
  data() {
    return {
      isSelected: false
    }
  },
  methods: {
    onClick() {
      this.isSelected = !this.isSelected
      if (this.isSelected == true) {
        Swal.fire({
          title: 'Register with Us',
          text: "Please register to find artists and connect with them.",
          type: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Register'
        }).then(result => {
          if (result.value) {
            window.location.href = 'https://connect.sosrgstudios.com'
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.role {
  box-shadow: 1px -1px 10px 1px rgba(255, 255, 255, 0.85);
  padding: 30px;
  font-size: 2rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.role i {
  transform: scale(2);
  margin-right: 20px;
}

.selected {
  color: green !important;
}

@media screen and (max-width: 991px) {
  .role {
    font-size: 1.5rem;
    padding-right: 10px;
  }
}
</style>
