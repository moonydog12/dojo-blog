<template>
  <header>
    <h1>The Dojo Blog</h1>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'Create' }">Create Post</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
header {
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px;

  h1 {
    color: #444;
    font-size: 48px;
  }

  a {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
  }

  a.router-link-active {
    color: #444;
    font-weight: bold;
  }
}
</style>
