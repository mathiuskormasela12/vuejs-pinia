<script setup>
// import all modules
import { computed } from "vue";
import useCounterStore from "./stores/counter";

const counterStore = useCounterStore();

const count = computed(() => counterStore.count);
const countFromGetters = computed(() => counterStore.addCount(2));
const countFromGetters2 = computed(() => counterStore.addCount2);

const handleIncrement = () => {
  counterStore.$patch((state) => {
    state.count++;
  });
};

const handleDecrement = () => {
  counterStore.incrementOrDecrement("DECREMENT");
};

const handleReset = () => {
  counterStore.$reset();
};

// This one for watchiong the pinia state changing
counterStore.$subscribe((mutation, state) => {
  console.log(mutation, state);
});
</script>

<template>
  <div>
    <h1>Vue Js + Pinia</h1>
    <p>Count : {{ count }}</p>
    <p>Getter Count : {{ countFromGetters }}</p>
    <p>Getter Count 2 : {{ countFromGetters2 }}</p>
    <button type="button" @click="handleIncrement">Increment</button>
    <button type="button" @click="handleDecrement">Decrement</button>
    <button type="button" @click="handleReset">Reset</button>
  </div>
</template>
