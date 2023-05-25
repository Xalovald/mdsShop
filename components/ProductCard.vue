<template>
    <div class="group relative w-80 object-center bg-blue-200">
      <div
        class="  aspect-h-1 aspect-w-1 h-80 overflow-hidden bg-blue-200">
        <img :src="product.image" :alt="product.description"
          class="flex flex-wrap h-60 w-60 object-center object-contain" />
      </div>
      <div class=" mt-4 flex justify-between">
        <div>
          <h3 class="text-sm text-gray-700">
              {{ product.title }}
          </h3>
          <!-- <p class="mt-1 text-sm text-gray-500">{{ product.category }}</p> -->
        </div>
        <p class="text-sm font-medium text-gray-900">{{ product.price + "€" }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
    defineProps({
      product: {
        type: Object,
        required: true
      }
    })
  
  </script>
  