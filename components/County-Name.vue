<template>
  <select v-model="countryCode" class="form-control">
    <option v-for="i in countries" :key="i.id" :value="i.code" :selected="country === i.code">
      {{ i.name }}
    </option>
  </select>
</template>

<script>
export default {
name: "County-Name",
  props: ['country'],
  data() {
    return {
      countryCode: '',
      countries: [],
    }
  },
  async mounted() {
    await this.$axios.$get(`/fetchCountry`, {headers: {"Authorization": `Bearer ${localStorage.getItem('authToken')}`}})
      .then(response => {
        console.log(response)
        this.countries = response.data
      })
      .catch(err => {
        console.log(err);
      })
  }
}
</script>

<style scoped>

</style>
