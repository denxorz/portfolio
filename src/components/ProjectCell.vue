<template>
  <ProjectBasic v-bind="{ ...props }" @click="$emit('click')" />
</template>

<script setup lang="ts">
  import type { Project } from './types/project'
  import ProjectBasic from '@/components/ProjectBasic.vue'

  const props = defineProps<{ project: Project, child?: boolean }>()
  defineEmits<{ click: [] }>()

</script>
