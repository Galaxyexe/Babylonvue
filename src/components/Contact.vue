<template>
  <div>
    <h1>Contact Me</h1>
  <p>
    <ul>
      <li>Email: {{email}}</li>
      <li>Website: {{web}}</li>
    </ul>
  </p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      email: 'testemail',
      web: 'testwebsite'
    }
  }
}
</script>

<style> /* why does scoped not work here? */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
