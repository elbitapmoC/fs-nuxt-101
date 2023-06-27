<template>
  <div>
    <header class="shadow-sm p-6 mb-8">
      <nav class="flex justify-between container mx-auto p-4">
        <NuxtLink to="/products">Sojourners Merch Shop</NuxtLink>
      </nav>
    </header>

    <div class="container mx-auto p-4 flex">
      <slot />
    </div>

    <footer class="container mx-auto p-4 flex text-sm">
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  font-weight: bold;
  color: green;
}
</style>