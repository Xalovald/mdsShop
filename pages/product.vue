
<template>
    <div>
    <div>
        <Navbar />
    </div>
        <div class="flex flex-wrap gap-10">
            <ProductCard v-for="product in products" :key="product.title" :product="product" />
        </div>

    </div>
    </template>
    
<script setup>
import ProductCard from '../components/productCard.vue'
import Navbar from '../components/Navbar.vue'
components: { ProductCard, Navbar }
defineEmits(['product'])
definePageMeta({
    middleware: 'protector'
})
const products = ref([])
const apiProducts = await fetch('https://fakestoreapi.com/products')
products.value = await apiProducts.json()

</script> 