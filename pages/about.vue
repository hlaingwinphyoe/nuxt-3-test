<template>
  <div>
    <h4>About</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae totam dolor
      dignissimos harum ratione est voluptate iste laborum necessitatibus
      veniam!
    </p>

    <div class="mt-7">
      {{ data }}
    </div>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/currency/USD');
</script>

<style></style>
