<template>
<div class="header_section1">
  <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="logo"><router-link :to="{name: 'Home'}"><img src="@/assets/images/logo.png"></router-link></div>
            </div>
            <div class="col-md-9">
              <div class="menu_text">
                <ul>
                  <div class="togle_3">
                    <div class="menu_main">
                      <div class="padding_left0" ><router-link :to="{name: 'Signup'}">Signup</router-link>
                      <span class="padding_left0"><router-link :to="{name: 'Login'}">Login</router-link></span></div>
                    </div>
                    <div class="shoping_bag"><img src="@/assets/images/search-icon.png"></div>
                  </div>
                  <div id="myNav" class="overlay">
                    <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
                    <div class="overlay-content">
                      <router-link :to="{name: 'Home'}" class="menuBtn" @click="closeNav">Home</router-link>
                      <!-- <router-link :to="{name: 'Services'}" class="menuBtn">Services</router-link>
                      <router-link :to="{name: 'About'}" class="menuBtn">About</router-link>
                      <router-link :to="{name: 'Choose'}" class="menuBtn">Choose</router-link>
                      <router-link :to="{name: 'Team'}" class="menuBtn">Team</router-link>
                      <router-link :to="{name: 'Contact'}" class="menuBtn">Contact Us</router-link> -->
                    </div>
                  </div>
                  <span class="navbar-toggler-icon"></span>
                  <span @click="openNav"><img src="@/assets/images/toggle-icon.png" class="toggle_menu"></span>
                </ul>
              </div>      
            </div>
          </div>
        </div>
</div>
  <router-view/>
</template>

<script>

export default {
  
}
</script>

<style>
@import "@/assets/css/bootstrap.min.css";
@import "@/assets/css/style.css";
@import "@/assets/css/responsive.css";
@import "@/assets/css/jquery.mCustomScrollbar.min.css";
@import "@/assets/css/owl.carousel.min.css";
@import url("https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css");

</style>
