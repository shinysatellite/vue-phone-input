<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits(['update:modelValue']);

const inputValue = ref<string>(props.modelValue);

function handleInput(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  const input = inputElement.value;
  emit('update:modelValue', input);
}

</script>

<template>
  <input
    ref="phoneInput"
    :value="inputValue"
    @input="handleInput"
    placeholder="Phone number"
  />
</template>