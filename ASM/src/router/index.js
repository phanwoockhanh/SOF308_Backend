import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Đường dẫn đến Home.vue
import Post1 from '../views/Post1.vue'; // Import Post1.vue
import Post2 from '../views/Post2.vue'; // Import Post2.vue
import Post3 from '../views/Post3.vue';
import PostDetail from '../views/PostDetail.vue'; // Đường dẫn đến PostDetail.vue
import Login from '../views/Login.vue'; // Import Login.vue
import Register from '../views/Register.vue'; // Import Register.vue
import Profile from '../views/Profile.vue'; 
import About from '../views/About.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/home', name: 'Home', component: Home },
    { path: '/post1', name: 'Post1', component: Post1 },
    { path: '/post2', name: 'Post2', component: Post2 },
    { path: '/post3', name: 'Post3', component: Post3 },
    { path: '/post/:id', name: 'PostDetail', component: PostDetail, props: true },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/about', name: 'About', component: About},

    
  ],
});

export default router;
