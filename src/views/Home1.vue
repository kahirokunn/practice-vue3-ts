<script lang="tsx">
import Cat from "@/components/Cat.vue";
import Dog from "@/components/Dog.vue";
import Piyo from "@/components/Piyo.vue";
import PiyoPiyo from "@/components/PiyoPiyo.vue";
import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <>
        <Cat />
        <Dog />
        <Piyo address="123-4567" sayCallback={() => {}} />
        <PiyoPiyo address="123-4567" sayCallback={() => {}} />
      </>
    );
  },
});
</script>
