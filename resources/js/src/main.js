import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/core/services/store";
import ApiService from "@/core/services/api.service";
import MockService from "@/core/mock/mock.service";
import { VERIFY_AUTH } from "@/core/services/store/auth.module";
import VueSocialauth from 'vue-social-auth';
import GAuth from 'vue-google-oauth2';
import { RESET_LAYOUT_CONFIG } from "@/core/services/store/config.module";
// import {stores} from './store/store';
Vue.config.productionTip = false;

// Global 3rd party plugins
import "popper.js";
import "tooltip.js";
import PerfectScrollbar from "perfect-scrollbar";
window.PerfectScrollbar = PerfectScrollbar;
import ClipboardJS from "clipboard";
window.ClipboardJS = ClipboardJS;

import Swal from 'sweetalert2';
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);

    }
});
window.Toast = Toast;


// Vue.use(VueSocialauth, {
//     providers: {
//         google: {
//             clientId: '642297796375-bfhrfa0pp3unfnqstio3k32uqvhqbn5v.apps.googleusercontent.com',
//             client_secret: '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',
//             redirectUri: 'http://localhost:8000/callback/google'
//         }
//     }
// });
const auth = {
    clientId: '642297796375-bfhrfa0pp3unfnqstio3k32uqvhqbn5v.apps.googleusercontent.com',
    // client_secret: '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',
    scope: 'profile email',
    prompt: 'consent',
    // response_type:'code',
    // fetch_basic_profile:true,
    // redirectUri: 'http://localhost:8000/callback/google'
};
Vue.use(GAuth, auth);
// Vue 3rd party plugins
import i18n from "@/core/plugins/vue-i18n";
import vuetify from "@/core/plugins/vuetify";
import "@/core/plugins/portal-vue";
import "@/core/plugins/bootstrap-vue";
import "@/core/plugins/perfect-scrollbar";
import "@/core/plugins/highlight-js";
import "@/core/plugins/inline-svg";
import "@/core/plugins/apexcharts";
import "@/core/plugins/treeselect";
import "@/core/plugins/metronic";
import "@mdi/font/css/materialdesignicons.css";
import "@/core/plugins/formvalidation";

// API service init
ApiService.init();


// Remove this to disable mock API

// Vue.config.productionTip = false;
// MockService.init();



router.beforeEach((to, from, next) => {
  // Ensure we checked auth before each page load.
  Promise.all([store.dispatch(VERIFY_AUTH)]).then(next);

  // reset config to initial state
  store.dispatch(RESET_LAYOUT_CONFIG);

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

import pagination from 'laravel-vue-pagination';

Vue.component('pagination', pagination);

import quill from 'vue2-quill-editor';
Vue.component('quill-editor', quill);
export const bus = new Vue();
 new Vue({
    // stores:stores,
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");
