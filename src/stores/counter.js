// ========== Counter Store
// import all modules
import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", {
  state() {
    return {
      count: 0,
    };
  },
  getters: {
    // Getters With Params
    addCount() {
      return (count) => this.count + count;
    },
    // Getters without Params
    addCount2() {
      return this.count + 10;
    },
  },
  actions: {
    incrementOrDecrement(name) {
      switch (name) {
        case "INCREMENT":
          this.count++;
          break;
        case "DECREMENT":
          this.count--;
          break;
        default:
      }
    },
  },
});

export default useCounterStore;
