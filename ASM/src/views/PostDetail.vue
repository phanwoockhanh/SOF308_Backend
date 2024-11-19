<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
        <div class="container">
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
                <router-link class="nav-link" to="/home">Trang Chính</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">Giới Thiệu</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Liên Hệ</a>
              </li>
            </ul>
            <div class="social-links d-flex ms-4">
              <a href="https://facebook.com/phanquockhanh01" target="_blank" class="me-3"><i class="bi bi-facebook"></i></a>
              <a href="https://instagram.com/phanquockhanh01" target="_blank" class="me-3"><i class="bi bi-instagram"></i></a>
              <a href="https://www.tiktok.com/@phanquockhanh01" target="_blank"><i class="bi bi-tiktok"></i></a>
            </div>
            <!-- Login Button (Visible if user is not logged in) -->
            <div class="d-flex ms-4">
              <button class="btn btn-outline-primary" @click="redirectToLogin" v-if="!isLoggedIn">Đăng Nhập</button>
            </div>
          </div>
        </div>
      </nav>
    <div class="container py-3">
      <!-- Navbar -->
  
      <!-- Post Content Section -->
      <section class="post-content py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <h1 class="display-4 mb-3">{{ post.title }}</h1>
              <p class="text-muted mb-4">
                Đăng vào: <span class="fw-bold">{{ post.date }}</span> | Tác giả: <span class="fw-bold">{{ post.author }}</span>
              </p>
              <img :src="post.image" class="img-fluid mb-4" :alt="post.title">
  
              <!-- Post Content -->
              <div class="post-body">
                <p>{{ post.content }}</p>
              </div>
  
              <!-- Heart Like Button -->
              <div class="mb-4">
                <button class="btn btn-outline-danger" @click="handleLike">
                  <i class="bi bi-heart"></i> Thả Tym
                </button>
                <span class="ms-2">{{ likeCount }} Tym</span>
              </div>
  
              <!-- Comment Section -->
              <div class="comments mt-5">
                <h4>Bình Luận</h4>
                <div class="comment-box mt-4">
                  <div v-if="isLoggedIn">
                    <textarea class="form-control" rows="3" v-model="commentText" placeholder="Viết bình luận..."></textarea>
                    <button class="btn btn-primary mt-3" @click="submitComment">Gửi Bình Luận</button>
                  </div>
                  <div v-else>
                    <button class="btn btn-warning mt-3" @click="redirectToLogin">Đăng Nhập Để Bình Luận</button>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Sidebar Section -->
            <div class="px-5 col-lg-4">
              <div class="sidebar">
                <h5 class="mb-3">Bài Viết Mới Nhất</h5>
                <ul class="list-unstyled">
                  <li><router-link to="#">Bài Viết 1</router-link></li>
                  <li><router-link to="#">Bài Viết 2</router-link></li>
                  <li><router-link to="#">Bài Viết 3</router-link></li>
                  <li><router-link to="#">Bài Viết 4</router-link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  
    <!-- Footer -->
    <footer id="contact" class="py-4 bg-dark text-white text-center">
      <p>&copy; 2024 Blog Cá Nhân. Thiết Kế bởi Tôi.</p>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        post: {
          title: "Tiêu Đề Bài Viết",
          date: "Ngày, Tháng, Năm",
          author: "PQK",
          image: "/images/video2.jpg",
          content: "Đây là nội dung chi tiết của bài viết. Bạn có thể thêm các đoạn văn, hình ảnh, video hoặc bất kỳ nội dung nào liên quan đến bài viết tại đây."
        },
        likeCount: 0,
        commentText: "",
        isLoggedIn: false, // Giả sử người dùng chưa đăng nhập
      };
    },
    mounted() {
      const postId = this.$route.params.id;
      this.loadPostDetails(postId); // Tải thông tin bài viết theo id
    },
    methods: {
      loadPostDetails(postId) {
        if (postId == 1) {
          this.post = {
            title: "Tiêu Đề Bài Viết 1",
            date: "2024-11-17",
            author: "Phan Quốc Khánh",
            image: "/images/video1.jpg",
            content: "Đây là nội dung chi tiết của bài viết 1."
          };
        }
      },
      handleLike() {
        if (this.isLoggedIn) {
          this.likeCount++;
        } else {
          alert('Bạn cần đăng nhập để thả tym!');
          this.redirectToLogin();
        }
      },
      submitComment() {
        if (this.isLoggedIn) {
          alert("Bình luận của bạn đã được gửi!");
          this.commentText = "";
        } else {
          alert('Bạn cần đăng nhập để bình luận!');
          this.redirectToLogin();
        }
      },
      redirectToLogin() {
        this.$router.push({ name: 'login' }); // Điều hướng đến trang đăng nhập
      }
    }
  };
  </script>
  
  <style src="@/assets/Css/Home.css">
  .post-content {
  padding-top: 100px;
    }
  </style>
  