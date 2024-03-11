<template>
  <div>
    <div class="grid">
      <div class="card" v-bind:key="game.id" v-for="game in games">
        <router-link :to="game.path">
          <h1>{{ game.title }}</h1>
          <p class="price">${{game.price}}</p>
          <p>{{game.id}}</p>
          <button></button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      games: [
        { id: 1, title: 'game1', price: 35, path: '/game1' },
        { id: 2, title: 'game2', price: 5, path: '/game2' },
        { id: 3, title: 'game3', price: 20, path: '/game3' },
        { id: 4, title: 'game4', price: 15, path: '/game4' },
        { id: 5, title: 'game5', price: 22, path: '/game5' },
        { id: 6, title: 'game6', price: 19, path: '/game6' }
      ]
    }
  }
}
</script>
<style scoped>
/* a needed to be changed b/c of default values it makes it look like a link */
a {
  position: relative;
  text-decoration: none;
  color: black;
}

.grid {
  display: grid;
  row-gap: 4rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 5rem;
  margin-bottom: 0rem;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: auto;
  text-align: center;
  font-family: arial;
  transition: all 0.2s ease-in-out;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card:hover {
  opacity: 0.7;
  transform: scale(1.1);
}
</style>
