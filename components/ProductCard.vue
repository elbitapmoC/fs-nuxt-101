<!-- /products/:id -->
<template>
  <div class="card text-center">
    <NuxtLink :to="`/products/${product.id}`">
      <img class="h-36 w-auto m-auto mb-12" :src="`${product.image}`" :alt="`${product.title}`">
      <h2 class="text-xl font-bold">${{ product.price }}</h2>
      <h1 class="">{{ product.title }}</h1>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])

definePageMeta({
  layout: 'products'
})
</script>