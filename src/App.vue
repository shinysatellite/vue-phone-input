<script lang="ts" setup>
import { ref } from 'vue';
import PhoneInput from './components/PhoneInput.vue';

const phone = ref('');
</script>

<template>
  <div>
    <PhoneInput v-model="phone" />
    <div>Entered Phone Number: {{ phone }}</div>
  </div>
</template>
