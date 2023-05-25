export default defineNuxtRouteMiddleware((to, from) => {

  const emailCookie = useCookie('email')

  if (emailCookie.value !== 'denver.dino@tf1.fr') {
    return navigateTo('/')
   }
})
