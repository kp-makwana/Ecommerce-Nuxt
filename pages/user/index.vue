<template>
  <div class="">
    <h1>Login Successfully....</h1>
    <p>{{ temp }}</p>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  head: {
    title: 'Ecommerce | Index',
  },
  data() {
    return {
      temp: '',
    }
  },
  css: [
    '~/assets/style/test.css',
  ],
  mounted() {
    this.temp = localStorage.getItem("authToken")
  },
  name: 'index',

}
</script>

<style scoped>

</style>
