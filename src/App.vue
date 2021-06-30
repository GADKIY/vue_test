<template>
  <div id="app">

  <siteHeader></siteHeader>

  <router-view/>

  <siteFooter></siteFooter> 
  </div>
</template>

<style>
@import url('assets/css/bootstrap.min.css');
@import url('assets/css/main.css');
</style>

<script>
import siteHeader from '@/components/header.vue';
import siteFooter from '@/components/footer.vue';

export default {
  components:{
    siteHeader,
    siteFooter
  }
}
</script>




