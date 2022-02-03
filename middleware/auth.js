export default async function ({redirect, $axios}) {
  let response = await $axios.$get(`/checkAuth`, {headers: {"Authorization": `Bearer ${localStorage.getItem('authToken')}`}}).catch(err => {
    console.log(err);
    localStorage.clear()
    return redirect('/')
  })
  if (!response) {
    localStorage.clear()
    return redirect('/')
  }

}


