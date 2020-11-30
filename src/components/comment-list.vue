<template>
  <product-comments
    v-for="comment in comments"
    :key="comment.id"
    :comment="comment"
  />
</template>

<script>
import productComments from "./product-comments.vue";
export default {
  name: "commentList",
  components: {
    productComments,
  },
  props: {
    comments: {
      type: Array,
    },
  },
};
</script>

<style>
</style>