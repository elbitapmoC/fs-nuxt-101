<!-- ../products -->
<template>
  <div>
    <h2>PRODUCTS</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div v-for="p in products" :key="p.id" class="cursor-pointer flex flex-col rounded-md border-2 border-green-900">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
})

// Ask: Fetch data from an API
const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>
