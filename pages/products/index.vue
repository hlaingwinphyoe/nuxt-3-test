<template>
  <div>
    <h4 class="text-2xl">Products</h4>
    <div class="grid grid-cols-4 gap-4 mt-5">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>

useHead({
  title: "Nuxt Dojo Merch",
  meta: [
    { name: 'description', content: 'Nuxt 3 Merch Description'},
  ]
})

definePageMeta({
  layout: "products",
});

const { data : products } = await useFetch('https://fakestoreapi.com/products');
</script>

<style></style>
