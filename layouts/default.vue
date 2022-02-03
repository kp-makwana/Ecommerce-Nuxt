<template>
  <div class="wrapper d-flex align-items-stretch">
    <nav id="sidebar">
      <div class="p-4 pt-5">
        <router-link to="/user">
          <img v-if="user" :src="user.profile_image" class="img logo rounded-circle mb-5">
        </router-link>
        <a v-if="user" class="mb-5">{{ user.first_name + ' ' + user.last_name }}</a>
        <ul class="list-unstyled components my-4">
          <li class="active">
            <router-link to="/user">Home</router-link>
          </li>
          <li class="">
            <router-link to="/user/profile">My Profile</router-link>
          </li>
          <li class="">
            <a href="">Product</a>
          </li>
          <li class="">
            <a href="">Order</a>
          </li>
          <li class="">
            <a href="">My Wishlist</a>
          </li>
          <li class="">
            <a href="">My Cart</a>
          </li>
          <li class="">
            <a href="">Help & Support</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-danger" @click="logout">Logout</a>
          </li>
        </ul>

        <div class="footer">
          <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy;
            All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
        </div>
      </div>
    </nav>

    <!-- Page Content  -->
    <div id="content" class="p-4 p-md-5">

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid bg-dark">

          <button type="button" id="sidebarCollapse" class="btn btn-primary">
            <i class="fa fa-bars"></i>
            <span class="sr-only">Toggle Menu</span>
          </button>
          <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item active">
                <a v-if="user" class="nav-link" href="#">{{ user.first_name + ' ' + user.last_name }}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">More</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa fa-shopping-cart"></i>
                  cart(1)</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("auth/getUserData");
  },
  computed: {
    user() {
      return this.$store.getters['auth/getUser'];
    }
  },
  methods: {
    async logout() {
      const response = await this.$axios.$get(`/logout`, {headers: {"Authorization": `Bearer ${localStorage.getItem('authToken')}`}})
        .then(response => {
          this.$store.commit('auth/setToken', null)
          localStorage.setItem('authToken', null)
          localStorage.clear()
          this.$router.push('/')
        }).catch(error => {
          console.log(error)
        })
    }
  },
  head: {
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ],
    link: [
      {rel: 'icon', href: '/assets/img/logo.png', type: 'image/ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900'},
      {rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
      {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'},
      {rel: 'stylesheet', href: 'http://localhost:8000/css/user.style.css'},
      {rel: 'stylesheet', href: 'http://localhost:8000/css/product/product.css'},
      {rel: 'stylesheet', href: '/assets/style/style.css'},
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', async: false},
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
        integrity: 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM',
        crossorigin: 'anonymous',
        async: false
      },
      {src: 'https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.js', async: false},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js', async: false},
      {src: 'http://localhost:8000/js/bootstrap.min.js', async: false},
      {src: 'http://localhost:8000/js/popper.js', async: false},
      {src: 'http://localhost:8000/js/main.js', async: false},
    ],
  },

}
</script>
<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
