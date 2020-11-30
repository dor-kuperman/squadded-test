<template>
  <div>
    <post-list :posts="posts" />
  </div>
</template>

<script>
import json from "../posts.json";
import postList from "../components/posts-list.vue";
export default {
  name: "mainPage",
  components: {
    postList,
  },

  data() {
    return {
      posts: json.posts,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
