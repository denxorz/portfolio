<template>
  <Project v-bind="{ ...props, subtitle: 'One Big Green' }" />
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  image?: string;
  big?: boolean;
  child?: boolean;
}>();
</script>
