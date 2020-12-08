import { shallowMount } from "@vue/test-utils";
import Dog from "@/components/Dog.vue";

describe("Dog.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Dog, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
