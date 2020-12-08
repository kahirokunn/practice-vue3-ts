<script lang="tsx">
import { defineComponent, reactive } from "vue";

type FavoriteFood = {
  name?: string;
  taste?: string;
};

type Data = {
  favoriteFoods: (FavoriteFood | null)[];
};

const Dog = defineComponent({
  name: "Dog",
  setup() {
    const data = reactive<Data>({
      favoriteFoods: [],
    });

    return () => (
      <div
        onClick={() =>
          data.favoriteFoods.push({ name: "ほね", taste: "こってり" })
        }
      >
        <div>Favorite Food Name: {data.favoriteFoods[0]?.name ?? "empty"}</div>
      </div>
    );
  },
});

export default Dog;
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
