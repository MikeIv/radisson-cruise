import Vue from 'vue'
import PreloaderYacht from '~/components/PreloaderYacht.vue'
import PreloaderMain from "../components/PreloaderMain.vue";
export default function ({ app, route }) {
    if (process.client) {
        if (route.path === '/') {
            const preloader = new Vue(PreloaderMain).$mount();
            document.body.appendChild(preloader.$el);
            preloader.start();
        } else {
            const preloader = new Vue(PreloaderYacht).$mount();
            document.body.appendChild(preloader.$el);
            preloader.start();
        }
    }
}
