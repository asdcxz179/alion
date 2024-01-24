<script setup lang="ts">
    import { onMounted, watch, ref } from 'vue'

    const props = defineProps({
        index: { type: Number, required: true },
        code: { type: String, required: true },
        height: {type: String, default: "100%"},
        width: {type: String, default: "100%"},
        play: {type: Boolean, default: false},
        show: {type: Boolean, default: false},
    });
    
    const youtube_params = {
        autoplay: ((props.index == 0) ? true: false),
        listType: 'user_uploads',
        height: 500,
        controls:0,
        loop:1,
    }

    var video = ref(null);

    watch(() => props.play, (selection, prevSelection) => { 
        if(selection) {
            video.value.playVideo();
        }else{
            video.value.pauseVideo();
        }
    })

    onMounted(() => {
        // console.log(props.play);
    })
</script>
<template>
    <VueYtframe
        v-if="show"
        ref="video"
        :video-id="code"
        :player-vars="youtube_params"
        :height="height"
        :width="width"
    />
</template>