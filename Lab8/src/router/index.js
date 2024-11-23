import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../auth'; // Import trạng thái xác thực

// Import các component
import Home from '../views/Home.vue';
import BlogList from '../views/BlogList.vue';
import BlogPost from '../views/BlogPost.vue';
import UserProfile from '../views/UserProfile.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'BlogList',
    component: BlogList,
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: BlogPost,
    props: true, // Cho phép truyền tham số dưới dạng prop
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile,
    children: [
      {
        path: 'info',
        name: 'UserProfileInfo',
        component: {
          template: '<div><h2>Thông tin cơ bản của người dùng</h2></div>',
        },
      },
      {
        path: 'settings',
        name: 'UserProfileSettings',
        component: {
          template: '<div><h2>Cài đặt người dùng</h2></div>',
        },
      },
    ],
  },
  {
    path: '/me',
    alias: '/profile', // Alias cho /profile
    redirect: '/profile', // Điều hướng đến profile
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }, // Đánh dấu route cần xác thực
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Route guard để bảo vệ các route cần xác thực
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.isAuthenticated()) {
    alert("Bạn cần đăng nhập để truy cập!");
    next('/login'); // Chuyển hướng đến trang đăng nhập nếu chưa xác thực
  } else {
    next(); // Tiếp tục điều hướng
  }
});

export default router;
