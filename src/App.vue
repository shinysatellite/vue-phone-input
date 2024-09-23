<template>
  <div>
    <PhoneInput v-model="phone" />
    <div>Entered Phone Number: {{ phone }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PhoneInput from "./components/PhoneInput.vue";

const phone = ref("");
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
