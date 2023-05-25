<template>
    <div class="bg-green-200 grid min-h-screen place-content-center">
      <div class="text-center text-gray-400">
      <input  appearance="white" size="xl" placeholder="E-mail" type="email" @keyup.enter="setCookie(emailInput)" v-model="emailInput" name="email" />
        </div>
    </div>
  </template>
  
  <script setup>
  const emailInput = ref('') 
  const routes = useRouter()
  
  const emailCookie = useCookie('email')
  
  function setCookie(cookie) {
    emailCookie.value = cookie
    navigateTo('/product')
  }
  
  onMounted(() => {
    const email = routes.query?.email
    if (email === 'denver.dino@tf1.fr') {
      setCookie(email)
      navigateTo('/product')
    }
  })
  
  
  </script>
  