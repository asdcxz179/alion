<script setup lang="ts">
    import { onMounted, watch, ref, reactive } from 'vue'

    const props = defineProps({
        index: { type: Number, required: true },
        activeIndex: { type: Number, required: true },
        code: { type: String, required: true },
        height: {type: String, default: "100%"},
        width: {type: String, default: "100%"},
        show: {type: Boolean, default: false},
    });

    const youtube_params:Object = {
        autoplay: ((props.index == 0) ? true: false),
        mute: ((props.index == 0) ? true: false),
        listType: 'user_uploads',
        height: 500,
        controls:0,
        loop:1,
        playlist:props.code,
    }
    var video = ref(null);
    var play = ref(((props.index == 0) ? true: false));
    var mute = ref(((props.index == 0) ? true: false));
    var item_show = ref(false);

    watch(() => props.activeIndex, (selection) => {
        if(video.value) {
            if(selection == props.index) {
                play.value = true;
            }else{
                play.value = false;
            }
        }
    })
    watch(play, (selection) => {
        if(video.value) {
            if(selection) {
                // @ts-ignore
                video.value.playVideo();
            }else{
                // @ts-ignore
                video.value.pauseVideo();
            }
        }
    })

    watch(mute, (selection) => {
        if(video.value) {
            if(selection) {
                // @ts-ignore
                video.value.mute();
            }else{
                // @ts-ignore
                video.value.unMute();
            }
        }
    })

    const videoPlay = function() {
        item_show.value = true;
        if(!play.value) {
            play.value = true;
        }else{
            play.value = false;
        }
    }

    const videoMute = function() {
        if(!mute.value) {
            mute.value = true;
        }else{
            mute.value = false;
        }
    }

    const beforeEnter = function(el:any) {
        el.style.opacity = 100;
    };

    const afterEnter = function(el:any) {
      // 在 3 秒后触发淡出
    setTimeout(() => {
        item_show.value = false;
        }, 1000);
    };

</script>
<template>
    <div class="youtube-short">
        <div class="video-iframe">
            <div class="video-control">
                <div class="mask" @click="videoPlay()"></div>
                <transition name="fade" @before-enter="beforeEnter" @after-enter="afterEnter">
                    <div  v-if="item_show" class="video-circle-status">
                        <font-awesome-icon icon="play" v-if="play" />
                        <font-awesome-icon icon="pause" v-else />
                    </div>
                </transition>
                <div class="video-status" @click="videoPlay()">
                    <font-awesome-icon icon="pause" v-if="play" />
                    <font-awesome-icon icon="play" v-else />
                </div>
                <div class="video-mute" @click="videoMute">
                    <font-awesome-icon icon="volume-mute" v-if="mute" />
                    <font-awesome-icon icon="volume-up" v-else />
                </div>
            </div>
            <VueYtframe
                v-if="show"
                ref="video"
                :video-id="code"
                :player-vars="youtube_params"
                :height="height"
                :width="width"
            />
        </div>
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
    </div>
</template>