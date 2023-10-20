<template>
  <div>

    <Head>
        <Title>Nuxt Dojo | {{ product.title }}</Title>
        <Meta name="description" content="{{ product.description }}" />
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
const { id } = useRoute().params;

const uri = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(uri);

if (!product.value) {
    // fatal for show error message in front which is displaying in console
  throw createError({ statusCode: 404, statusMessage: "Product Not Found!", fatal: true });
}

// const { data: product } = await useFetch(uri, {key: id});
</script>

<style scoped></style>
