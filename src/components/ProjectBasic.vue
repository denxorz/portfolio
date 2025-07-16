<template>
  <v-card
    density="compact"
    height="100%"
    :max-height="props.project.big === true ? '52vh' : '25vh'"
    @click="$emit('click')"
    style="cursor: pointer"
  >
    <v-card-title>{{ props.project.title }}</v-card-title>
    <v-card-subtitle>{{ props.subtitle }}</v-card-subtitle>
    <v-img
      class="mt-2"
      cover
      :height="props.project.child ? '90%' : '100%'"
      :src="image"
    />
  </v-card>
</template>

<script setup lang="ts">
import type { Project } from "./types/project";

const props = defineProps<{ project: Project; subtitle: string }>();

const image = computed(() =>
  props.project.image ? `/assets/projects/${props.project.image}` : ""
);
</script>
