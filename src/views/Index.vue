<script setup lang="ts">
  import { Virtual } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import YouTube from '../components/YouTube.vue';
  
  const videos = [
    "UVQefAy6u_0",
    "tL3XXHXnn20"
  ];

  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  const modules = [Virtual];
  
</script>
<style scoped>
  .swiper {
    width: 400px;
    height: 84vh;
  }
  .swiper-slide {
    background-color: aliceblue;
    position: relative;
  }
  .mask {
    height: 100%;
    position: absolute;
    left:0;
    top:0;
    width:100%;
  }
  .control {
    position: absolute;
    right: 0;
    height: 100%;
    width: 60px;
  }
  .circle {
    font-size: 18px;
    line-height: 48px;
    text-align: center;
    width: 48px;
    padding: 0;
    height: 48px;
    border-radius: 24px;
  }
</style>

<template>
  <div class="container mx-auto">
    <swiper
      :direction="'vertical'"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      :spaceBetween="30"
      class="video-item"
    >
      <swiper-slide v-for:="video in videos">
        <div class="control">
          <div class="right-side">
            <div class="circle">
              <font-awesome-icon icon="fa-solid fa-user-secret" />
            </div>
          </div>
        </div>
        <div class="mask"></div>
        <YouTube :code="video"></YouTube>
      </swiper-slide>
    </swiper>
    <div  class="mb-10">
      
    </div>
  </div>
</template>
