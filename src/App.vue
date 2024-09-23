<template>
  <div id="app">
    <PhoneInput v-model="phone" />
    <p><b>Entered Phone Number:</b> {{ phone }}</p>
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
  margin: 60px 80px;
}
</style>
