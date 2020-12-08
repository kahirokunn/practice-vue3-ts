import { defineComponent } from "vue";

import { FunctionalComponent } from "vue";

type PiyoPiyoPiyoProps = {
  address: `${string}-${string}`;
  age?: number;
  sayCallback?: (s1: string, s2?: number) => unknown;
};

type EmitsOptions = {
  say: (str: string) => void;
};

const PiyoPiyoPiyo: FunctionalComponent<PiyoPiyoPiyoProps, EmitsOptions> = (
  props,
  context
) => (
  <div
    onClick={() => {
      context.emit("say", "piyopiyopiyo");
      props.sayCallback?.("piyopiyopiyo", 123);
    }}
  >
    <div>I am PiyoPiyoPiyo</div>
  </div>
);

export default defineComponent({
  render() {
    return (
      <>
        <PiyoPiyoPiyo address="123-4567" />
      </>
    );
  },
});
