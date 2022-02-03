export const state = () => ({
  user: {},
  pass: null,
  token: null,
  countries: null,
})
export const getters = {
  getUser(state) {
    return state.user;
  },
  getCountries(state){
    return state.countries;
  }
};
export const actions = {
  async getUserData({commit}, item) {
    const {data} = await this.$axios.$get(`user/profile`, {headers: {"Authorization": `Bearer ${localStorage.getItem('authToken')}`}})
    commit("setUser", data);
  },
  async getCountriesData({commit}, item) {
    const {data} = await this.$axios.$get(`/fetchCountry`, {headers: {"Authorization": `Bearer ${localStorage.getItem('authToken')}`}})
    console.log(data);
    commit("setCountries", data);
  }
};

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setPass(state, countries) {
    state.countries = countries
  },
  setToken(state, token) {
    state.token = localStorage
  }
}
