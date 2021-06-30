<template>
  <div class="about">
    <services></services>
    <about></about>
  </div>
</template>

<script>
import Services from '../components/services.vue';
import About from '../components/about.vue'
export default {
  components:{
    Services,
    About
  }
}
</script>