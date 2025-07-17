<template>
  <ProjectBasic v-bind="{ ...props }" @click="$emit('click')" />
</template>

<script setup lang="ts">
import ProjectBasic from "@/components/ProjectBasic.vue";
import type { Project } from "./types/project";

const props = defineProps<{ project: Project; child?: boolean }>();

</script>
