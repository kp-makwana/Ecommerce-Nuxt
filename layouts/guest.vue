<template>
  <div class="container col-md-8 py-5">
    <div class="row py-5 mt-4">
      <!-- For Demo Purpose -->
      <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
        <img src="assets/img/logo.png" class="img-fluid mb-3 d-none d-md-block" alt="LOGO"/>
        <h1>Create an Account</h1>
        <p class="font-italic text-muted mb-0">Create a minimal registration page using Bootstrap 4 HTML form
          elements.</p>
        <p class="font-italic text-muted">Snippet By <a href="#" class="text-muted">
          <u>Bootstraps</u></a>
        </p>
      </div>
      <div class="col-md-7 col-lg-6 ml-auto mt-5">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guest",
  css: [
    'assets/style/login'
  ],
  head: {
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ],
    link: [
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
      {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: '/assets/style/login.css'},
    ],

  },
  script: [
    {src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"},
    {src: "https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.min.js"},
  ],
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
}
</script>

<style scoped>

</style>
