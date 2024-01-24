<script setup lang="ts">
  import { Virtual,Mousewheel } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import YouTube from '../components/YouTube.vue';
  import videoData from '../assets/videos.json';
  import { onBeforeMount, ref, reactive  } from 'vue'
  
  var videos:any = reactive(videoData);

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

  const makeVideos = async function(){
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
