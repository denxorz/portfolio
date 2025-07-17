<template>
  <v-card
    density="compact"
    :height="$vuetify.display.mdAndUp ? (props.project.big === true ? '625px' : '300px') : 'auto'"
    @click="$emit('click')"
    style="cursor: pointer"
  >
    <v-card-title>{{ props.project.title }}</v-card-title>
    <v-card-subtitle>{{ props.subtitle }}</v-card-subtitle>
    <v-img
      class="mt-2"
      cover
      :height="$vuetify.display.mdAndUp ? (props.project.child ? '90%' : '100%') : 'auto'"
      :src="image"
      style="max-width: 100%; height: auto; object-fit: cover;"
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
