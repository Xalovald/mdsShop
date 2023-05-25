<template>
    <div class="group relative w-80 object-center bg-blue-200">
      <div
        class="aspect-h-1 aspect-w-1 h-80 overflow-hidden bg-blue-200">
        <img :src="product.image"
          class="flex flex-wrap h-60 w-60 object-center object-contain" />
      </div>
      <div class=" mt-4 flex justify-between">
        <div>
          <div>
            <h1 class="text-sm text-gray-700 font-black text-center">
              {{ product.title }}
          </h1>
          </div>
          <div class="mt-2">
            <p>
              {{ product.description }}
            </p>
          </div>
          <div class="flex justify-between text-sm font-medium text-gray-900 mt-2 content-end ">
            {{ product.price + "€" }} 
            <button :product="product"> + </button>  
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineEmits(['product'])
    defineProps({
      product: {
        type: Object,
        required: true
      }
    })
  
  </script>
  