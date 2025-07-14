<template>
  <Project v-bind="{ ...props, subtitle: 'Nurtio Protect' }" />
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  image?: string;
  big?: boolean;
  child?: boolean;
}>();
</script>
