<template>
  <Project v-bind="{ ...props, subtitle: 'Priva FS Performance' }" />
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  image?: string;
  big?: boolean;
  child?: boolean;
}>();
</script>
