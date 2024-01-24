<script setup lang="ts">
  import { Virtual,Mousewheel } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import YouTube from '../components/YouTube.vue';
  import axios from 'axios'
  import { onBeforeMount, ref, reactive, onMounted, watch  } from 'vue'
  
  var videos:any = reactive([
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
  ]);

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

  const getList = async function() {
    await axios.get(`https://youtube.googleapis.com/youtube/v3/search?channelId=${import.meta.env.VITE_YOUTUBE_CHANNEL_ID}&order=date&type=video&videoDuration=short&key=${import.meta.env.VITE_GOOGLE_API_KEY}`)
    .then((res) => {
      videos = reactive([]);
      res.data.items.map((item:any)=>{
        videos.push({
          code: item.id.videoId,
          show:false,
        })
      })
    }).catch(() => {
      makeVideos()
    })
  }

  watch(videos, () => {
    makeVideos()
  })

  onBeforeMount(async () => {
    await getList();
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
