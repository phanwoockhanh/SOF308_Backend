<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top py-1">
          <div class="container ">
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
                  <router-link class="nav-link" to="/profile">Profile</router-link>
                </li>
              </ul>
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


      <h2 class="text-center my-4">Bài Viết Trang 2</h2>
      <div class="row">
        <!-- Post Loop (Dynamic Posts) -->
        <div class="col-md-4" v-for="(post, index) in posts" :key="index">
          <div class="post-card">
            <img :src="post.image" alt="Post Image" class="post-img" />
            <div class="post-content">
              <h5 class="post-title">{{ post.title }}</h5>
              <p class="post-excerpt">{{ post.excerpt }}</p>
              <router-link :to="'/postdetail/' + post.id" class="read-more">Đọc Thêm &rarr;</router-link>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Xem thêm Button -->
      <div class="more-btn">
        <router-link to="/page3" class="btn btn-outline-primary">Xem Thêm</router-link>
      </div>
  
  
    </div>
    <!-- Pagination (Phân trang) -->
    <nav aria-label="Page navigation" class="my-4">
        <ul class="pagination justify-content-center">
          <!-- Previous Button -->
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click="goToPage(currentPage - 1)" aria-label="Previous">Trước</a>
          </li>
  
          <!-- Page Numbers (Số trang) -->
          <li class="page-item" :class="{ active: currentPage === 1 }">
            <a class="page-link" href="#" @click="goToPage(1)">1</a>
          </li>
          <li class="page-item" :class="{ active: currentPage === 2 }">
            <a class="page-link" href="#" @click="goToPage(2)">2</a>
          </li>
          <li class="page-item" :class="{ active: currentPage === 3 }">
            <a class="page-link" href="#" @click="goToPage(3)">3</a>
          </li>
  
          <!-- Next Button -->
          <li class="page-item" :class="{ disabled: currentPage === 3 }">
            <a class="page-link" href="#" @click="goToPage(currentPage + 1)" aria-label="Next">Tiếp</a>
          </li>
        </ul>
      </nav>
      <!-- Footer -->
      <footer class="py-4 bg-dark text-white text-center ">
      <p>&copy; 2024 Blog 60</p>
    </footer>

  </template>
  
  <script>
  export default {
    data() {
      return {
        // Example post data - you can replace this with actual dynamic data
        posts: [
          { id: 7, title: 'Tiêu Đề Bài Viết 13', excerpt: 'Đây là đoạn mô tả ngắn gọn...', image: '/images/video4.jpg' },
          { id: 8, title: 'Tiêu Đề Bài Viết 14', excerpt: 'Đây là đoạn mô tả ngắn gọn...', image: '/images/video3.jpg' },
          { id: 9, title: 'Tiêu Đề Bài Viết 15', excerpt: 'Đây là đoạn mô tả ngắn gọn...', image: '/images/video2.jpg' },
          { id: 10, title: 'Tiêu Đề Bài Viết 16', excerpt: 'Đây là đoạn mô tả ngắn gọn...', image: '/images/video1.jpg' },
          { id: 11, title: 'Tiêu Đề Bài Viết 17', excerpt: 'Đây là đoạn mô tả ngắn gọn...', image: '/images/video2.jpg' },
          { id: 12, title: 'Tiêu Đề Bài Viết 18', excerpt: 'Đây là đoạn mô tả ngắn gọn...', image: '/images/video3.jpg' },

        ],
        currentPage: 1,
      };
    },
    methods: {
      goToPage(page) {
        if (page >= 1 && page <= 3) {
          this.currentPage = page;
          this.$router.push({ path: `/post${page}.html`, query: { page: page } });
        }
      },
    },
    watch: {
      // Watch the page query parameter to update the current page
      '$route.query.page': function (newPage) {
        this.currentPage = parseInt(newPage) || 1;
      },
    },
  };
  </script>
  
  <style scoped>
  
  .navbar {
  padding: 0.8rem 1.5rem; /* Tăng khoảng cách padding cho cân đối */
  background-color: #ffffff; /* Màu nền trắng tinh */
  border-bottom: 1px solid #eaeaea; /* Đường viền mỏng ở dưới */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05); /* Bóng nhẹ để phân tách */
}

.navbar-brand {
  font-size: 1.3rem; /* Chỉnh font chữ thương hiệu lớn hơn một chút */
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center; /* Canh logo và chữ ở giữa */
  margin-top: -45px;
}

.navbar-brand img {
  height: 35px; /* Logo nhỏ hơn để hài hòa */
  margin-right: 10px; /* Khoảng cách giữa logo và chữ */
}

.navbar-nav .nav-item .nav-link {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: #555; /* Màu chữ dịu mắt hơn */
  transition: color 0.3s ease; /* Hiệu ứng chuyển đổi màu */
  margin-top: -45px;
}

.navbar-nav .nav-item .nav-link:hover {
  color: #007bff; /* Màu xanh đậm hơn khi hover */
}

.social-links a {
  margin-top: -40px;
  font-size: 1.1rem; /* Giảm kích thước icon */
  color: #555; /* Màu tối hơn cho dễ nhìn */
  margin-left: 15px; /* Cách đều các icon */
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #007bff; /* Hiệu ứng màu xanh khi hover */
}

.navbar-toggler {
  border: none;
  outline: none;
}



/* Footer */
footer {
  font-size: 0.9rem;
}
  .post-card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
  }
  .post-img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  .post-content {
    padding: 20px;
  }
  .post-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
  .post-excerpt {
    color: #555;
    font-size: 1rem;
    margin: 15px 0;
  }
  .read-more {
    text-decoration: none;
    color: #3897f0;
    font-weight: bold;
  }
  .read-more:hover {
    text-decoration: underline;
  }
  .container {
    margin-top: 50px;
  }
  .more-btn {
    text-align: center;
    margin-top: 20px;
  }
  .pagination .active .page-link {
    background-color: #3897f0;
    color: white;
  }
  </style>
  