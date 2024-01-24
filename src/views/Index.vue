<script setup lang="ts">
  import { Virtual } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import YouTube from '../components/YouTube.vue';
  import { onBeforeMount, ref  } from 'vue'
  
  var videos = [
    {
      code: "UVQefAy6u_0",
      play: false,
      show: false,
    },
    {
      code: "tL3XXHXnn20",
      play: false,
      show: false,
    },
    {
      code: "ttMrQkBa38E",
      play: false,
      show: false,
    },
    {
      code: "N9fKBve_qpQ",
      play: false,
      show: false,
    },
    {
      code: "_XoCezcrKgU",
      play: false,
      show: false,
    },
  ];

  const default_show = ref(3);
  var show_index = ref(0);
  var pre_index = ref(0);
  var swiperList: any;

  const modules = [Virtual];

  const onSwiper = (swiper: any) => {
    swiperList = swiper;
  };

  const showVideo = function(){
    show_index.value = swiperList.activeIndex;
    if(typeof(videos[swiperList.previousIndex]) != 'undefined' && videos[swiperList.previousIndex].play) {
      videos[swiperList.previousIndex].play = false;
    }
    videoPlay(show_index.value)
    makeVideos()
  };

  const videoPlay = function(index: Number) {
    if(typeof(videos[index]) != 'undefined' && !videos[index].play) {
      videos[index].play = true;
    }
  }

  const videoStop = function(index: Number) {
    if(typeof(videos[index]) != 'undefined' && videos[index].play) {
      videos[index].play = false;
    }
  }

  const makeVideos = function(){
    for(let i= show_index.value; i < (show_index.value + default_show.value); i++) {
      if(typeof(videos[i]) != 'undefined' && !videos[i].show) {
        videos[i].show = true;
      }
    }
  }

  onBeforeMount(() => {
    videoPlay(show_index.value)
    makeVideos()
  })
  
  
</script>

<style scoped>
  .swiper {
    height: 100vh;
  }
  .swiper-slide {
    /* background-color: aliceblue; */
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
    width: 80px;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .right-side {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .button-item {
    color:#fff;
    margin-bottom: 16px;
  }
  .circle {
    color: #0f0f0f;
    background-color: rgba(0,0,0,0.05);
    font-size: 18px;
    line-height: 48px;
    width: 48px;
    padding: 0;
    height: 48px;
    border-radius: 24px;
    
  }
  .square {
    display: flex;
    height: 40px;
    min-width: 40px;
    justify-content: center;
    align-items: center;
  }
  .square-button {
    background-color: #3f3d3d;
    border-radius: 6px;
  }
  .square-icon {
    color: #fff;
    border: 1px solid var(--yt-spec-static-brand-white);
    width: 38px;
    height: 38px;
    padding: 6px;
  }
  .square-icon svg {
    vertical-align: top;
    width: 100%;
    height: 100%;
  }
  .button-item-square {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Roboto","Arial",sans-serif;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 500;
    color: var(--yt-spec-text-secondary);
    justify-content: center;
    
  }
  .button-item-text {
    margin: 4px -8px 0;
    /* font-size: 1.4rem; */
    line-height: 2rem;
    font-weight: 400;
    font-family: "Roboto","Arial",sans-serif;
  }
  .video-iframe {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    /* 在视口宽度大于或等于 768px 时应用的样式 */
    .swiper {
      width: 400px;
      height: 84vh;
    }
    .button-item {
      color: #000;
    }
    
  }

  @media screen and (min-width: 402px) {
    /* 在视口宽度大于或等于 768px 时应用的样式 */
    .video-iframe {
      width: 402px;
      height: 100%;
    }
  }

</style>

<template>
  <div class="container mx-auto">
    <swiper
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
        <div class="control">
          <div class="right-side">
            <div class="button-item text-center">
              <button class="circle">
                <font-awesome-icon icon="thumbs-up" />
              </button>
              <div class="button-item-text">7007</div>
            </div>
            <div class="button-item text-center">
              <button class="circle">
                <font-awesome-icon icon="thumbs-down" />
              </button>
              <div class="button-item-text">不喜歡</div>
            </div>
            <div class="button-item text-center">
              <button class="circle">
                <font-awesome-icon icon="message" />
              </button>
              <div class="button-item-text">46</div>
            </div>
            <div class="button-item text-center">
              <button class="circle">
                <font-awesome-icon icon="share" />
              </button>
              <div class="button-item-text">分享</div>
            </div>
            <div class="button-item text-center">
              <button class="circle">
                <font-awesome-icon icon="ellipsis-vertical" />
              </button>
            </div>
            <div class="button-item text-center button-item-square">
              <div class="square">
                <button class="square-button">
                  <div class="square-icon">
                    <font-awesome-icon icon="wifi" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mask" @click="videoStop(show_index)"></div>
        <div class="video-iframe">
          <YouTube :code="video.code" :play="video.play" :show="video.show" :index="key"></YouTube>
        </div>
      </swiper-slide>
    </swiper>
    <div  class="mb-10">
      
    </div>
  </div>
</template>
