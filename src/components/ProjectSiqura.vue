<template>
  <Project
    v-bind="{ ...props, subtitle: 'TKH Security - Siqura Network Recorder' }"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  image?: string;
  big?: boolean;
  child?: boolean;
}>();
</script>
