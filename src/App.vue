<template>
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script>
import mainPage from "./views/main-page.vue";

export default {
  name: "App",
  components: {
    mainPage,
  },
};
</script>

<style lang="scss">
.container {
  font-family: "Roboto", sans-serif;
}
</style>
