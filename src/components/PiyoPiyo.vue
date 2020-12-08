<script lang="tsx">
import { FunctionalComponent } from "vue";

type PiyoPiyoProps = {
  address: string;
  age?: number;
  sayCallback?: (s1: string, s2?: number) => unknown;
};

type EmitsOptions = {
  say: (str: string) => void;
};

const PiyoPiyo: FunctionalComponent<PiyoPiyoProps, EmitsOptions> = (
  props,
  context
) => (
  <div
    onClick={() => {
      context.emit("say", "piyopiyo");
      props.sayCallback?.("piyopiyo", 123);
    }}
  >
    <div>I am PiyoPiyo</div>
  </div>
);

export default PiyoPiyo;
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
