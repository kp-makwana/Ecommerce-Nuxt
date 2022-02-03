<template>
  <form @submit.prevent="login">
    <div class="row my-5">
      <!-- Email Address -->
      <div class="input-group col-lg-12 mb-4">
        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-envelope text-muted"></i>
                            </span>
        </div>
        <input id="email" type="email" v-model="email" name="username"
               placeholder="Enter Email or UserName Address"
               class="form-control bg-white border-left-0 border-md">
      </div>
      <!--            @error('username')<p class="text-danger ml-3">*{{ $message }}</p>@enderror-->
      <!-- Password -->
      <div class="input-group col-lg-12 mb-4">
        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-lock text-muted"></i>
                            </span>
        </div>
        <input id="password" type="password" v-model="password" name="password" placeholder="Password"
               class="form-control bg-white border-left-0 border-md">
      </div>
      <p class="text-danger ml-3">{{ error }}</p>
      <!--            @error('password')<p class="text-danger ml-3">*{{ $message }}</p>@enderror-->
      <!--            @if(Session::has('type'))
                  <p class="text-danger ml-3">*{{ Session::get('message')}}</p>
                  @endif-->
      <!-- Submit Button -->
      <div class="form-group col-lg-12 mx-auto mb-0">
        <button type="submit" class="btn btn-primary btn-block py-2">
          <span class="font-weight-bold">Login</span>
        </button>
      </div>

      <!-- Divider Text -->
      <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
        <div class="border-bottom w-100 ml-5"></div>
        <span class="px-2 small text-muted font-weight-bold text-muted">OR</span>
        <div class="border-bottom w-100 mr-5"></div>
      </div>

      <!-- Social Login -->
      <div class="form-group col-lg-12 mx-auto">
        <a href="https://www.facebook.com/" class="btn btn-primary btn-block py-2 btn-facebook">
          <i class="fa fa-facebook-f mr-2"></i>
          <span class="font-weight-bold">Facebook Page</span>
        </a>
        <a href="https://twitter.com/home" class="btn btn-primary btn-block py-2 btn-twitter">
          <i class="fa fa-twitter mr-2"></i>
          <span class="font-weight-bold">Twitter Page </span>
        </a>
      </div>

      <!-- Already Registered -->
      <div class="text-center w-100">
        <p class="text-muted font-weight-bold">I don't have a account
          <router-link to="/signup"
                       class="text-primary ml-2">Sign up
          </router-link>
        </p>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  middleware: 'noAuth',
  layout: 'guest',
  head: {
    title: 'Ecommerce | Login',
  },
  data() {
    return {
      email: 'ecommerce@user.com',
      password: 'password',
      error: '',
    }
  },
  methods: {
    async login({$axios, params}) {
      this.$store.commit('auth/setUser', null)
      this.$store.commit('auth/setToken', null)

      if (this.email === '' || this.password === '') {
        this.error = 'Email Or Password field must be required.'
        return
      }
      try {
        const response = await this.$axios.$post(`/login`, {
          email: this.email,
          password: this.password
        })
            this.storeToken(response.token)
            this.$store.commit('auth/setToken', response.token)
            await this.$router.push('/user')
      } catch ({response}) {
        this.error = response.data.message
        this.email = ''
        this.password = ''
        await this.$router.push('/')
      }
    },
    storeToken(token) {
      localStorage.setItem('authToken', token);
    },
  },
}
</script>

<style scoped>

</style>
