import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/video.css'
import router from './router'
import VueYtframe from "vue3-ytframe"

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faThumbsUp, faThumbsDown, faMessage, faShare, faEllipsisVertical, faWifi, faPlay, faPause, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faThumbsUp, faThumbsDown, faMessage, faShare, faEllipsisVertical, faWifi, faPlay, faPause, faVolumeUp, faVolumeMute)


const app = createApp(App)

app.use(router)
app.use(VueYtframe)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
