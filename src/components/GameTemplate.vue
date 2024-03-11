<template>
  <div>
    <div class="grid">
      <div class="upcoming-tournaments"></div>
    </div>
    <h1>Hello from GameTemplate</h1>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'GameTemplate'
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 1fr 1fr 2fr;
  row-gap: 4rem;
}
.upcoming-tournaments {
  background: black;
}
</style>
