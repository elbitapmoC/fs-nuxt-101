<template>
  <div>
    <header class="shadow-sm p-6 mb-8">
      <nav class="flex justify-between container mx-auto p-4">
        <p class="font-bold">Sojourners</p>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="btn">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4 flex">
      <slot />
    </div>

    <footer class="container mx-auto p-4 flex text-sm">
      &copy; 2019-2021, All Rights Reserved.
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  font-weight: bold;
  color: green;
}
</style>