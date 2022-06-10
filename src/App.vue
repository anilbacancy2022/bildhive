<template>
  <div class="app-header">
    <h2 @click="redirectHome">Rockstar Movies</h2>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  methods: {
    redirectHome: function () {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-header {
  text-align: center;
}

.app-header h2 {
  cursor: pointer;
  padding-top: 20px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 30px;
  color: white;
}
</style>
