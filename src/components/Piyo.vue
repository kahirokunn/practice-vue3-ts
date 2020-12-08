<script lang="tsx">
import { defineComponent, PropType } from "vue";

const Piyo = defineComponent({
  name: "Piyo",
  props: {
    address: {
      type: String as PropType<`${string}-${string}`>,
      required: true,
    },
    age: {
      type: Number,
      default: () => 123,
    },
    sayCallback: {
      type: Function as PropType<(s1: string, s2?: number) => unknown>,
    },
  },
  computed: {
    ageToString(): string {
      return `${this.age}歳`;
    },
  },
  setup(props) {
    return () => (
      <div onClick={() => props.sayCallback?.("piyo", 123)}>
        <div>I am Piyo</div>
      </div>
    );
  },
});

export default Piyo;
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
