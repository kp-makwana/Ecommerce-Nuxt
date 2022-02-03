<template>
<!--    <select v-model="country" class="form-control" :name="name">
      <option v-for="i in countries" :key="i.id" :value="i.code" :selected="country === i.code">
        {{ value === 'name' ? i.name : i.code}}
      </option>
    </select>-->
  <h1>country</h1>
</template>

<script>
export default {
  name: "Country-Code",
  props: ['country','name','value'],
  computed:{
    countries() {
      return this.$store.getters['auth/getCountries'];
    },
  },
  // async mounted() {
  //   await this.$axios.$get(`/fetchCountry`, {headers: {"Authorization": `Bearer ${localStorage.getItem('authToken')}`}})
  //     .then(response => {
  //       this.countries = response.data
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }
}
</script>

<style scoped>

</style>
