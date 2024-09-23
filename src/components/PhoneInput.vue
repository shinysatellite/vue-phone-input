<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits(['update:modelValue']);

const inputValue = ref<string>(props.modelValue);
const phoneInput = ref<HTMLInputElement | null>(null);

function handleInput(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  const rawInput = inputElement.value;
  const allowed = rawInput.replace(/[^0-9+()\- ]/g, '');
  inputValue.value = allowed;

  emit('update:modelValue', allowed);
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