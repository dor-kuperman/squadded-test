<template>
  <post-card v-for="post in posts" :key="post.owner" :post="post" />
</template>

<script>
import postCard from "./post-card.vue";
export default {
  name: "postList",
  components: {
    postCard,
  },
  props: {
    posts: {
      type: Array,
    },
  },
};
</script>

<style>
</style>