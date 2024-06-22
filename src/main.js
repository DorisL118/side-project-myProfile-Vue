import { createApp } from 'vue';
import App from './App.vue';
import $ from 'jquery';
import './assets/js/jquery.smoove.min.js';

// 將 $ 和 jQuery 設置為全局變數
window.$ = $;
window.jQuery = $;

// 創建 Vue 應用並掛載到 #app 元素上
createApp(App).mount('#app');
