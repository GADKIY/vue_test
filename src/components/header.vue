<template>
        <header id="home">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <!-- Change Logo Img Here -->
        <a class="navbar-brand" href="#"><img src="../assets/images/logo.svg" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <div class="interactive-menu-button">
            <a href="#">
              <span>Menu</span>
            </a>
          </div>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <!-- Nav Link -->
              <router-link class="nav-link" to="/">Home.</router-link>
            </li>
            <li class="nav-item">
              <!-- Nav Link -->
              <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
            <li class="nav-item">
              <!-- Nav Link -->
              <router-link class="nav-link" to="/blog">Blog.</router-link>
            </li>
            <!-- <li class="nav-item">
              
              <a class="nav-link" data-scroll href="#portfolio">Portfolio.</a>
            </li>
            <li class="nav-item">
              
              <a class="nav-link" data-scroll href="#blog">Blog.</a>
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" to="/contacts">Contact Us</router-link>              
            </li>
          </ul>
          <form data-scroll href="#contact-us" class="contact-btn form-inline my-2 my-lg-0">
            <!-- Contacgt Us Button -->
            <button>Contact Us</button>
          </form>
        </div>
      </nav>
    </div>
    <!-- HERO SECTION -->    
    <div class="container-fluid hero" v-if="$route.path==='/'">
      <img src="../assets/images/hero.svg" alt="">
      <div class="container">
        <!-- Hero Title -->
        <h1>The Spirit of<br>Digital Agency.</h1>
        <!-- Hero Title Info -->
        <p>Vestibulum ac diam sit amet quam vehicula elementum<br> amet est on dui. Nulla porttitor accumsan tincidunt.</p>
        <div class="hero-btns">
          <!-- Hero Btn First -->
          <a data-scroll href="#about-us">More About us</a>
          <!-- Hero Btn Second -->
          <a data-scroll href="#contact-us">Get in Touch.</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>


export default {
    name:'siteHeader'
    
}
</script>