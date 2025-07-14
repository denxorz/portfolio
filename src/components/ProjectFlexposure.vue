<template>
  <ProjectBasic
    v-bind="{ ...props, subtitle: 'TKH Security Flexposure - FlinQ' }"
  />
</template>

<script setup lang="ts">
import type { Project } from "./types/project";

const props = defineProps<{ project: Project }>();
</script>
