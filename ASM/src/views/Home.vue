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
              <li class="nav-item">
                <!-- Change Liên Hệ to Profile -->
                <router-link class="nav-link" to="/profile">Profile</router-link>
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
  
      <!-- Hero Section -->
      <header class="py-5 hero-section d-flex align-items-center text-center text-black">
        <div class="container">
          <div class="hero-overlay rounded"></div>
          <h1 class="display-4 fw-bold ">Chào Mừng Đến Blog 60</h1>
          <p class="lead">Khám phá những câu chuyện, bài viết và phong cách sống của tôi!</p>
          <a href="#" class="btn btn-primary btn-lg mt-4">Khám Phá Ngay</a>
        </div>
      </header>
  
      <!-- Carousel Section -->
      <section class="carousel-section py-5">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="@/assets/images/banner1.jpg" class="d-block w-100" alt="Slide 1">
            </div>
            <div class="carousel-item">
              <img src="@/assets/images/banner2.jpg" class="d-block w-100" alt="Slide 2">
            </div>
            <div class="carousel-item">
              <img src="@/assets/images/banner3.jpg" class="d-block w-100" alt="Slide 3">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
  
      <!-- Blog Posts Section -->
      <section id="blog" class="blog-section py-5 bg-light">
        <div class="container">
          <h2 class="text-center mb-4">Bài Viết Mới</h2>
          <div class="row g-4">
            <div class="col-md-4" v-for="post in posts" :key="post.id">
              <div class="card">
                <img :src="post.image" class="card-img-top" :alt="post.title">
                <div class="card-body">
                  <h5 class="card-title">{{ post.title }}</h5>
                  <p class="card-text">{{ post.description }}</p>
                  <router-link :to="`/post/${post.id}`" class="btn btn-primary">Đọc Thêm</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer id="contact" class="py-4 bg-dark text-white text-center">
        <p>&copy; 2024 Blog 60 </p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [
          {
            id: 1,
            title: "Tiêu Đề Bài Viết 1",
            description: "Đây là đoạn mô tả ngắn về bài viết thú vị này.",
            image: "/images/video1.jpg",
          },
          {
            id: 2,
            title: "Tiêu Đề Bài Viết 2",
            description: "Đây là đoạn mô tả ngắn về bài viết thú vị này.",
            image: "/images/video2.jpg",
          },
          {
            id: 3,
            title: "Tiêu Đề Bài Viết 3",
            description: "Đây là đoạn mô tả ngắn về bài viết thú vị này.",
            image: "/images/video3.jpg",
          },
        ],
      };
    },
  };
  </script>
  
  <style src="@/assets/Css/Home.css">

  </style>
  