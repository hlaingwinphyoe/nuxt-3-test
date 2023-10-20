<template>
    <div class="container mx-auto mt-7 text-center">
        <h3 class="text-10xl mt-7">{{ error.statusCode }}</h3>
        <p class="mt-7 text-4xl">Oops: <span class="text-8xl">{{ error.message }}</span></p>
    </div>
</template>

<script setup>
    defineProps(['error']);
</script>

<style scoped>

</style>