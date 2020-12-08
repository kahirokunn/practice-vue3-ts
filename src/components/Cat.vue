<template>
  <div class="hello">
    <div>Favorite Food Name: {{ favoriteFoods[0]?.name ?? "empty" }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type FavoriteFood = {
  name?: string;
  taste?: string;
};

type Data = {
  favoriteFoods: (FavoriteFood | null)[];
};

const Cat = defineComponent({
  name: "Cat",
  data: (): Data => ({
    favoriteFoods: [],
  }),
});

export default Cat;
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
