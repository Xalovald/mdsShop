
<template>
    <div>
      <h1>product</h1>

    </div>
    
    <ProductCard v-for="product in products" :product="product" :key="product.id" />
    
    </template>
    
<script>
import ProductCard from '../components/ProductCard.vue'
definePageMeta({
      middleware: 'protector'
    })
export default {

    
    
    methods: {
         fetchProducts() {
            const productsData =  fetch('https://fakestoreapi.com/products')
            const { products } =  productsData.json()
            this.products = products
            this.loading = false
        }
    },
}


    </script>
    