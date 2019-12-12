<template>
  <nav>
    <ul>
      <li class="nav-btn">
        <router-link to="/home">
          <a class="nav-btn" href="default.asp">Home</a>
        </router-link>
      </li>
      <li class="nav-btn">
        <router-link to="/news">
          <a class="nav-btn" href="default.asp">News</a>
        </router-link>
      </li>
      <li class="nav-btn">
        <router-link to="/contact">
          <a class="nav-btn" href="default.asp">Contact</a>
        </router-link>
      </li>
      <li class="nav-btn">
        <router-link to="/about">
          <a class="nav-btn" href="default.asp">About</a>
        </router-link>
      </li>
      <li class="nav-btn">
        <router-link to="/games">
          <a class="nav-btn" href="default.asp">Games</a>
        </router-link>
      </li>
      <li class="nav-btn">
        <router-link to="/login">
          <a class="nav-btn" href="default.asp">Login</a>
        </router-link>
      </li>
      <li>
        <router-link to="/profile">
          <img src="../assets/logo.png" class="profile-pic" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}

.profile-pic {
  position: absolute;
  right: 1rem;
  text-align: center;
  border: 2px white;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
}
.profile-pic:hover {
  cursor: pointer;
}
.nav-btn {
  padding: 14px 16px;
}
</style>
