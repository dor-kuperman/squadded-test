<template>
  <div>
    Name: {{ user.owner.firstName }} {{ user.owner.lastName }}
    <br />
    <img v-bind:src="user.owner.picture" />
  </div>
  <button v-on:click="this.$router.push(`/`)">Go Back</button>
</template>

<script>
import json from "../posts.json";
export default {
  name: "userPage",
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.getUserInformation();
  },
  methods: {
    getUserInformation() {
      this.user = json.posts.find(
        (post) => post.owner.id === this.$route.params.id
      );
    },
  },
};
</script>

<style>
</style>