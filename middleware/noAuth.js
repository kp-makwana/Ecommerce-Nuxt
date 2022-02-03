export default async function ({redirect, $axios}) {
  if (localStorage.getItem('authToken')) {
    await $axios.$get(`/checkAuth`, {headers: {"Authorization": `Bearer ${localStorage.getItem('authToken')}`}})
      .then(response => {
        return redirect('/user/')
      })
      .catch(err => {
        console.log(err);
        localStorage.clear()
      })
  }
}


