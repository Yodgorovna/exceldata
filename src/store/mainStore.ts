import { defineStore } from "pinia";
import { computed, ref } from "vue";

// composition API store style
export const useMainStore = defineStore("main", () => {
  // state
  const count = ref(0);``
  const name = ref("Eduardo");

  //   getters
  const doubleCount = computed(() => count.value * 2);

  //   actions
  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});

// options API store style
// export const useMainStore = defineStore("main", {
//   state: () => ({
//     count: 0,
//     name: "Eduardo",
//   }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });

// note

// In Setup Stores:

// ref()s become state properties
// computed()s become getters
// function()s become actions
