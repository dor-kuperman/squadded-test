<template>
  <div class="comment-body">{{ comment.body }}</div>
</template>

<script>
export default {
  name: "productComments",
  props: {
    comment: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.comment-body {
  margin: 0.6rem;
  font-size: 1rem;
}
</style>