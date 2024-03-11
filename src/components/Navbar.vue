<template>
  <div>
    <nav>
      <router-link
        class="spacing navbtn"
        v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`"
      >{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/home'
        },
        {
          id: 1,
          text: 'Login',
          page: '/login'
        },
        {
          id: 2,
          text: 'About',
          page: '/about'
        },
        {
          id: 3,
          text: 'Contact',
          page: '/contact'
        },
        {
          id: 4,
          text: 'Games',
          page: '/games'
        },
        {
          id: 5,
          text: 'News',
          page: '/news'
        },
        {
          id: 6,
          text: 'ProfilePage',
          page: '/profilepage'
        }
      ]
    }
  }
}
</script>

<style>
/* dont use scoped here bc we are rendering Navbarbar in app not individual components */

.spacing {
  margin-right: 10px;
  text-align: center;
}

.navbtn {
  color: white;
  text-decoration: none;
  padding: 14px 16px;
  background-color: #333;
}
.navbtn:hover {
  background-color: #111;
  cursor: pointer;
}
nav {
  background: blue;
  padding: 30px 30px;
}
</style>
