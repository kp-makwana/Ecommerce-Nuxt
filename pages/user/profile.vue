<template>
  <div v-if="user" class="container emp-profile bg-dark text-white">
    <div class="row">
      <div class="col-md-4">
        <div class="profile-img">
          <img id="imagePreview"
               :src="user.profile_image"
               alt=""/>
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
          <p class="profile-rating">Profile Complete : <span>100%</span></p>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                 aria-controls="home" aria-selected="true">Personal Information</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                 aria-controls="profile" aria-selected="false">Address</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-2">
        <router-link class="btn btn-primary" to="/user/edit">Edit Profile</router-link>
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
            <div class="row">
              <div class="col-md-6">
                <label>First Name</label>
              </div>
              <div class="col-md-6">
                <p>{{ user.first_name }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label>Last Name</label>
              </div>
              <div class="col-md-6">
                <p>{{ user.last_name }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label>Date Of Birth</label>
              </div>
              <div class="col-md-6">
                <p>{{ user.dob }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label>Phone</label>
              </div>
              <div class="col-md-6">
                <p>+{{ user.country_code + ' ' + user.phone }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label>Gender</label>
              </div>
              <div class="col-md-6">
                <p>{{ user.gender }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label>Email</label>
              </div>
              <div class="col-md-6">
                <p>{{ user.email }}</p>
              </div>
            </div>
          </div>
          <div class="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="row">
              <div class="col-md-6">
                <label>Street Address</label>
              </div>
              <div class="col-md-6">
                <p>{{ user.str_address }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label>ZipCode</label>
              </div>
              <div class="col-md-6">
                <p>{{ user.zipcode }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label>City</label>
              </div>
              <div class="col-md-6">
                <p>{{ user.city }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label>State</label>
              </div>
              <div class="col-md-6">
                <p>{{ user.state }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label>Country</label>
              </div>
              <div class="col-md-6">
                <p>{{ user.country }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "profile",
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  },
}
</script>

<style scoped>

</style>
