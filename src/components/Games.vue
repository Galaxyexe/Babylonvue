<template>
  <div>
    <Navbar />

    <!-- <div class="card">
      <img src="{{game.picture}}" alt="{{game.title}}" style="width:100%" />
      <h1>{{ game.title }}</h1>
      <p>{{ game.price }}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>-->

    <div class="grid">
      <div class="card" v-bind:key="game" v-for="game in games">
        <router-link :to="game.path">
          <h1>{{ game.title }}</h1>
          <p>{{ game.price }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  el: "gamelist",
  name: "Games",
  props: {
    id: Number,
    title: String
  },
  data: function() {
    return {
      games: [
        { id: 1, title: "game1", price: 35, path: "/game1" },
        { id: 2, title: "game2", price: 5, path: "/game1" },
        { id: 3, title: "game3", price: 20, path: "/game1" },
        { id: 1, title: "game4", price: 15, path: "/game1" },
        { id: 2, title: "game5", price: 22, path: "/game1" },
        { id: 3, title: "game6", price: 19, path: "/game1" }
      ]
    };
  },
  components: {
    Navbar
  }
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
.grid {
  display: grid;
  row-gap: 4rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 5rem;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  padding: 3rem 3rem;
  border: 2px black;
}
.card:hover {
  cursor: pointer;
  opacity: 0.7;
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
router-link {
  text-decoration: none;
}
</style>