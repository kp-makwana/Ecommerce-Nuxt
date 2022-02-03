<template>
  <form action="#" method="POST" id="registration_form" name="registration_form" @submit.prevent="signup">
    <div class="row">
      <!-- First Name -->
      <div class="input-group col-lg-12 mb-4">
        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-user text-muted"></i>
                            </span>
        </div>
        <input id="first_name" type="text" name="first_name" placeholder="First Name" v-model="first_name"
               class="form-control bg-white border-left-0 border-md">
      </div>

      <!-- Last Name -->
      <div class="input-group col-lg-12 mb-4">
        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-user text-muted"></i>
                            </span>
        </div>
        <input id="last_name" type="text" name="last_name" placeholder="Last Name" v-model="last_name"
               class="form-control bg-white border-left-0 border-md">
      </div>
      <!--            @error('last_name')-->
      <!--            <p class="text-danger ml-3">{{ $message }}</p>-->
      <!--            @enderror-->

      <!-- Email Address -->
      <div class="input-group col-lg-12 mb-4">
        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-envelope text-muted"></i>
                            </span>
        </div>
        <input id="email" type="email" name="email" placeholder="Email Address" v-model="email"
               class="form-control bg-white border-left-0 border-md">
      </div>
      <div class="input-group col-lg-12 mb-4">
        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-user text-muted"></i>
                            </span>
        </div>
        <select id="gender" name="gender" v-model="gender"
                class="form-control custom-select bg-white border-left-0 border-md">
          <option value="" selected>- Select Gender -</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

      </div>

      <!-- date of birth -->
      <div class="input-group col-lg-12 mb-4">
        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     class="bi bi-calendar-date" viewBox="0 0 16 16">
  <path
    d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
  <path
    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>
                            </span>
        </div>
        <input id="dob" type="date" name="dob" v-model="dob"
               class="form-control bg-white border-left-0 border-md">
      </div>

      <!-- Phone Number -->
      <div class="input-group col-lg-12 mb-4">
        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-phone-square text-muted"></i>
                            </span>
        </div>
        <select id="country_code" name="country_code" style="max-width: 80px" v-model="country_code"
                class="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
          <option value="91" selected>+91</option>
          <option value="1">+1</option>
        </select>
        <input id="phone" type="tel" name="phone" placeholder="Phone Number" v-model="phone"
               class="form-control bg-white border-md border-left-0 pl-3">
      </div>

      <!-- Password -->
      <div class="input-group col-lg-12 mb-4">
        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-lock text-muted"></i>
                            </span>
        </div>
        <input id="password" type="password" name="password" placeholder="Password" v-model="password"
               class="form-control bg-white border-left-0 border-md">
      </div>

      <!-- Password Confirmation -->
      <div class="input-group col-lg-12 mb-4">
        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-lock text-muted"></i>
                            </span>
        </div>
        <input id="c_password" type="password" name="c_password" placeholder="Confirm Password"
               v-model="c_password"
               class="form-control bg-white border-left-0 border-md">
      </div>
      <p id="pass" class="text-danger ml-3"></p>


      <p id="error" class="error text-danger">{{ error }}</p>
      <div id="recaptcha-container"></div>

      <!-- Submit Button -->
      <div class="form-group col-lg-12 mx-auto mb-4 mt-3">
        <button type="submit" class="btn btn-primary btn-block py-2">
          <span class="font-weight-bold" id="otp_send_button">Sign Up</span>
        </button>
      </div>

      <!-- Already Registered -->
      <div class="text-center w-100">
        <p class="text-muted font-weight-bold"> Already Registered?
          <router-link to="/"
                       class="text-primary ml-2">Login
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
    title: 'Ecommerce | Signup',
  },
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
      dob: '',
      country_code: 91,
      phone: '',
      password: '',
      c_password: '',
      error: '',
    }
  },
  methods: {
    async signup() {
      try {
        await this.$axios.$post(`/signup`, {
          first_name: this.first_name,
          last_name: this.last_name,
          dob: this.dob,
          email: this.email,
          gender: this.gender,
          country_code: this.country_code,
          phone: this.phone,
          password: this.password,
          c_password: this.c_password,
        }).then(response => {
          this.storeToken(response.token)
          this.$router.push('/user')
        }).catch(err => {
          this.error = err
        })
      } catch ({response}) {
        this.error = response.data.message
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
