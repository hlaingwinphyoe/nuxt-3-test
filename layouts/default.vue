<template>
  <div>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto flex items-center justify-between p-4">
            <NuxtLink to="/" class="font-bold">Nuxt App</NuxtLink>
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
            </ul>
        </nav>
    </header>

    <div class="container mx-auto p-4">
        <slot />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.router-link-exact-active{
    color: #12b488;
}
</style>