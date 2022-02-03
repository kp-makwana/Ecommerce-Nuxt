<template>
  <div class="container emp-profile bg-dark text-white">
    <form action="#" method="POST" name="update" enctype="multipart/form-data"
          @submit.prevent="onSubmit"
    >
      <div class="row">
        <div class="col-md-4">
          <div class="profile-img">
            <img id="imagePreview"
                 :src="user.profile_image"
                 alt=""/>
            <div class="file btn btn-lg btn-primary">
              Change Photo
              <input type="file" class="hide" id="fileUpload" accept="image/*"
                     name="fileUpload"/>
            </div>
          </div>
        </div>
        <div class="col-md-6 text-white">
          <div class="profile-head">
            <h5 class="text-white">
              {{ user.first_name + ' ' + user.last_name }}
            </h5>
            <h6>
              {{ user.details }}
            </h6>
            <p class="profile-rating">Profile Complete : <span>{{ user.profile_complete }}</span></p>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                   aria-controls="home" aria-selected="true">Personal Information</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                   aria-controls="profile" aria-selected="false">Address</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-target="#change_password" data-toggle="modal"
                   aria-controls="password" aria-selected="false">Change Password</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="profile-work">
            <p>WORK LINK</p>
            <a href="">Website Link</a><br/>
            <a href="">Bootsnipp Profile</a><br/>
            <a href="">Bootply Profile</a>
            <p>SKILLS</p>
            <a href="">Web Designer</a><br/>
            <a href="">Web Developer</a><br/>
            <a href="">WordPress</a><br/>
            <a href="">WooCommerce</a><br/>
            <a href="">PHP, .Net</a><br/>
          </div>
        </div>
        <div class="col-md-8">
          <div class="tab-content profile-tab" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div class="row mb-3">
                <div class="col-md-6">
                  <label>First Name</label>
                </div>
                <div class="col-md-6">
                  <input class="bg-dark text-white form-control" name="first_name" type="text" v-model="form.first_name"
                         required
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label>Last Name</label>
                </div>
                <div class="col-md-6">
                  <input class="bg-dark text-white form-control" v-model="form.last_name" name="l_name" type="text"/>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label>Date Of Birth</label>
                </div>
                <div class="col-md-6">
                  <input class="bg-dark text-white form-control" name="dob" type="date" v-model="form.dob"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label>Country Code</label>
                </div>
                <div class="col-md-6">
                  <CountryCode :country="form.country_code" name="countryCode"/>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label>Phone</label>
                </div>
                <div class="col-md-6">
                  <input class="bg-dark text-white form-control" name="phone" maxlength="10"
                         minlength="10" onkeypress="return isNumberKey(event)"
                         v-model="user.phone"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label>Gender</label>
                </div>
                <div class="col-md-6">
                  <select id="gender" name="gender" class="bg-dark text-white form-control">
                    <option value="" disabled selected>select gender</option>
                    <option value="">-select gender-</option>
                    <option value="0">Female</option>
                    <option value="1">Male</option>
                  </select>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label>Email</label>
                </div>
                <div class="col-md-6">
                  <input type="email" name="email" class="bg-dark text-white form-control"
                         v-model="user.email"/>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-12">
                  <div class="error text-danger">* All Error</div>
                </div>
              </div>
            </div>

            <div class="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div class="row mb-3">
                <div class="col-md-6">
                  <label>Street Address</label>
                </div>
                <div class="col-md-6">
                  <input type="text" name="address" class="bg-dark text-white form-control" v-model="user.str_address"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label>ZipCode</label>
                </div>
                <div class="col-md-6">
                  <input type="text" name="zipcode" class="form-control bg-dark text-white"
                         maxlength="6"
                         v-model="user.zipcode"
                         onkeypress="return isNumberKey(event)"/>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label>Country</label>
                </div>
                <div class="col-md-6">
                  <CountryCode :country="user.country_code" name="countryName" value="name"/>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label>State</label>
                </div>
                <div class="col-md-6">
                  <div id="getStatesList">
                    {{ user.state }}
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label>City</label>
                </div>
                <div class="col-md-6" id="getCityList">
                  {{ user.city }}
                </div>
              </div>
            </div>
            <div class="tab-pane fade " id="password" role="tabpanel" aria-labelledby="password-tab">
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="current_password">Current Password</label>
                </div>
                <div class="col-md-6">
                  <input type="password" id="current_password" name="current_password"
                         class="bg-dark text-white form-control"/>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="new_password">New password</label>
                </div>
                <div class="col-md-6">
                  <input type="password" name="new_password" id="new_password"
                         class="form-control bg-dark text-white" maxlength="6"/>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="confirm_new_pass">Current Password</label>
                </div>
                <div class="col-md-6">
                  <input type="password" id="confirm_new_pass" name="confirm_new_pass"
                         class="bg-dark text-white form-control"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "edit",
  data() {
    return {}
  },
  computed: {
    user() {
      return this.$store.getters['auth/getUser'];
    },
    form() {
      return {
        ...this.user
      }
    }
  },
  methods: {
    async onSubmit() {
      console.log('fatesadfsadfdsaf', this.form);
      try {
        await this.$axios.$post(`/user/profileUpdate`,
          {
            first_name: this.form.first_name,
            last_name: this.form.last_name,
            dob: this.form.dob,
            email: this.form.email,
            gender: this.form.gender,
            country_code: this.form.country_code,
            phone: this.form.phone,
            password: this.form.password,
            c_password: this.form.c_password,
          },
          {headers: {"Authorization": `Bearer ${localStorage.getItem('authToken')}`}}
        ).then(response => {
          console.log('this log is print.', response)
          this.storeToken(response.token)
          this.$router.push('/user')
        }).catch(err => {
          console.log('error log is print.', err)
          this.error = err
        })
      } catch ({response}) {
        this.error = response.data.message
      }
    }
  }
}
</script>

<style scoped>

</style>
