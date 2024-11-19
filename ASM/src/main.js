import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Vue Router để quản lý routing
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

// Tạo ứng dụng Vue
const app = createApp(App);

// Tích hợp Vue Router vào ứng dụng
app.use(router);

// Mount ứng dụng vào phần tử DOM với id là #app
app.mount('#app');
