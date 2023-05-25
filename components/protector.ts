export default defineNuxtRouteMiddleware((to, from) => {

  const passwordCookie = useCookie('password')

  if (passwordCookie.value !== 'denver.dinosaur@tf1.fr') {
    return navigateTo('/')
   }
})
