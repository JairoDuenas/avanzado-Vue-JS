<template>
  <div>
    <b-nav small align="start">
      <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
      <b-nav-item :to="{ name: 'About' }">About</b-nav-item>
      <b-nav-item
        href="https://github.com/JairoDuenas/avanzado-Vue-JS"
        target="_blank"
        >Github</b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'FootLinks'
}
</script>
