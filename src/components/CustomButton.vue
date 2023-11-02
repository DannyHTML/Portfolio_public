<template>
  <button
    class="inline-block rounded-md border-2 border-primary bg-primary px-3 py-2 text-black duration-100 hover:border-2 sm:hover:scale-110"
  >
    <slot></slot>
    <font-awesome-icon class="ml-2" :icon="icon" :size="size" />
  </button>
</template>

<script setup lang="ts">
import { PropType } from "vue";

defineProps({
  icon: Array as PropType<string[]>,
  size: String as PropType<string>,
});
</script>
