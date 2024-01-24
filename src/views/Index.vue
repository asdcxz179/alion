<script setup lang="ts">
  import { Virtual,Mousewheel } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import YouTube from '../components/YouTube.vue';
  import { onBeforeMount, ref  } from 'vue'
  
  var videos = [
    {
      code: "UVQefAy6u_0",
      show: false,
    },
    {
      code: "tL3XXHXnn20",
      show: false,
    },
    {
      code: "ttMrQkBa38E",
      show: false,
    },
    {
      code: "N9fKBve_qpQ",
      show: false,
    },
    {
      code: "_XoCezcrKgU",
      show: false,
    },
  ];

  const default_show = ref(3);
  var show_index = ref(0);
  var swiperList: any;

  const modules = [Virtual, Mousewheel];

  const onSwiper = (swiper: any) => {
    swiperList = swiper;
  };

  const showVideo = function(){
    show_index.value = swiperList.activeIndex;
    makeVideos()
  };

  const makeVideos = function(){
    for(let i= show_index.value; i < (show_index.value + default_show.value); i++) {
      if(typeof(videos[i]) != 'undefined' && !videos[i].show) {
        videos[i].show = true;
      }
    }
  }

  onBeforeMount(() => {
    makeVideos()
  })
</script>

<template>
  <div class="container mx-auto">
    <swiper
      :mousewheel="true"
      :activeIndex="show_index"
      :direction="'vertical'"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      :spaceBetween="30"
      class="video-item"
      @swiper="onSwiper"
      @slideChange="showVideo"
    >
      <swiper-slide v-for:="(video, key) in videos">
        <YouTube :code="video.code" :show="video.show" :index="key" :activeIndex="show_index"></YouTube>
      </swiper-slide>
    </swiper>
  </div>
</template>
