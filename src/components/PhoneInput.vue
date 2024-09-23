<script lang="ts" setup>
import { ref, nextTick, computed } from 'vue';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits(['update:modelValue']);

const inputValue = ref<string>(props.modelValue);
const phoneInput = ref<HTMLInputElement | null>(null);

const placeholder = computed<string>(() => {
  return navigator.language === 'en-US' ? '+1 (123) 456-7890' : 'Phone number';
});

function handleInput(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  const rawInput = inputElement.value;
  const allowed = rawInput.replace(/[^0-9+()\- ]/g, '');
  inputValue.value = allowed;

  nextTick(() => {
    if (phoneInput.value) {
      phoneInput.value.value = allowed;
    }
  });

  emit('update:modelValue', allowed);
}

</script>

<template>
  <input
    ref="phoneInput"
    :value="inputValue"
    @input="handleInput"
    :placeholder="placeholder"
  />
</template>