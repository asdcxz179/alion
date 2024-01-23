<script setup lang="ts">
    import { onMounted, watch  } from 'vue'

    const props = defineProps({
        code: { type: String, required: true },
        height: {type: String, default: "100%"},
        width: {type: Number, default: 315},
        play: {type: Boolean, default: false}
    });
    
    const youtube_params = {
        autoplay: 0,
        listType: 'user_uploads',
        height: 500,
    }

    watch(() => props.play, (selection, prevSelection) => { 
        console.log(selection);
    })

    onMounted(() => {
        
    })
</script>
<template>
    <VueYtframe
        :video-id="code"
        :player-vars="youtube_params"
        :height="height"
        :width="width"
    />
</template>