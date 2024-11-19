<template>
    <div>
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
        <div class="container">
          <!-- Logo -->
          <a class="navbar-brand fw-bold" href="/home">
            <img src="@/assets/images/Logo.png" alt="Logo" class="rounded-circle me-2" style="height: 40px;">
            BLOG - 60
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/post1">Bài Viết</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">Giới Thiệu</router-link>
              </li>
            </ul>
            <!-- Social Media Links -->
            <div class="social-links d-flex ms-4">
              <a href="https://facebook.com/phanquockhanh01" target="_blank" class="me-3">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com/phanquockhanh01" target="_blank" class="me-3">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@phanquockhanh01" target="_blank">
                <i class="bi bi-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
  
      <!-- Profile Section -->
      <section class="profile-section py-2 mt-5">
        <div class="container">
          <h2 class="text-center mb-4">Thông Tin Cá Nhân</h2>
          <div class="profile-container d-flex align-items-center">
            <div class="profile-picture" @click="changeAvatar" :style="{ backgroundImage: `url(${avatarUrl})` }"></div>
            <input type="file" ref="fileInput" @change="updateAvatar" style="display: none;">
            <div class="profile-details ms-4">
              <h4>{{ username }}</h4>
              <p>Email: {{ email }}</p>
              <p>Mật khẩu: ********</p>
              <button class="btn btn-primary" @click="toggleEditForm">Chỉnh Sửa Hồ Sơ</button>
            </div>
          </div>
  
          <!-- Edit Profile Form -->
          <div v-if="isEditing" class="form-container mt-4">
            <form @submit.prevent="updateProfile">
              <label for="name">Họ và Tên:</label>
              <input type="text" v-model="formData.name" id="name" required>
  
              <label for="email">Email:</label>
              <input type="email" v-model="formData.email" id="email" required>
  
              <label for="password">Mật khẩu:</label>
              <input type="password" v-model="formData.password" id="password" required>
  
              <button type="submit" class="btn btn-primary">Cập Nhật</button>
            </form>
          </div>
        </div>
      </section>
  
      <!-- Author's Posts Section -->
      <section class="author-posts-section py-5 bg-light">
        <div class="container">
          <h2 class="text-center mb-4">Bài Viết Của Tôi</h2>
          <div class="row g-4">
            <div class="col-md-4" v-for="post in posts" :key="post.id">
              <div class="card">
                <img :src="post.image" class="card-img-top" :alt="post.title">
                <div class="card-body">
                  <h5 class="card-title">{{ post.title }}</h5>
                  <p class="card-text">{{ post.description }}</p>
                  <div class="post-stats">
                    <span><i class="bi bi-heart-fill"></i> {{ post.likes }} Likes</span> |
                    <span><i class="bi bi-chat-left-text-fill"></i> {{ post.comments }} Comments</span>
                  </div>
                  <router-link :to="`/post/${post.id}`" class="btn btn-primary">Đọc Thêm</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer id="contact" class="py-3 bg-dark text-white text-center">
        <p>&copy; 2024 Blog 60 </p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "Tên Hiện Tại",
        email: "email@example.com",
        avatarUrl: "/images/avatar.png", // Default avatar
        isEditing: false,
        formData: {
          name: "Tên Hiện Tại",
          email: "email@example.com",
          password: ""
        },
        posts: [
          {
            id: 1,
            title: "Tiêu Đề Bài Viết 1",
            description: "Đây là đoạn mô tả ngắn về bài viết thú vị này.",
            image: "/images/video1.jpg",
            likes: 120,
            comments: 45
          },
          {
            id: 2,
            title: "Tiêu Đề Bài Viết 2",
            description: "Đây là đoạn mô tả ngắn về bài viết thú vị này.",
            image: "/images/video2.jpg",
            likes: 85,
            comments: 23
          },
          {
            id: 3,
            title: "Tiêu Đề Bài Viết 3",
            description: "Đây là đoạn mô tả ngắn về bài viết thú vị này.",
            image: "/images/video3.jpg",
            likes: 45,
            comments: 12
          }
        ]
      };
    },
    methods: {
      changeAvatar() {
        this.$refs.fileInput.click();
      },
      updateAvatar(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            this.avatarUrl = reader.result;
          };
          reader.readAsDataURL(file);
        }
      },
      toggleEditForm() {
        this.isEditing = !this.isEditing;
      },
      updateProfile() {
        // Simulate a profile update
        this.username = this.formData.name;
        this.email = this.formData.email;
        this.isEditing = false;
        alert('Cập nhật thông tin thành công!');
      }
    }
  };
  </script>
  
  <style scoped>
  .profile-container {
    display: flex;
    align-items: center;
  }
  
  .profile-picture {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #ddd;
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }
  
  .profile-details {
    margin-left: 20px;
  }
  
  .form-container form {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  .form-container label {
    font-weight: bold;
    color: #333;
    display: block;
    margin-top: 10px;
  }
  
  .form-container input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    margin-top: 5px;
    font-size: 14px;
  }
  
  .form-container button {
    width: 100%;
    padding: 10px;
    background-color: #0095f6;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .author-posts-section .post-stats {
    font-size: 14px;
    color: #777;
    margin-top: 10px;
  }
  </style>
  