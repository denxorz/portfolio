<template>
  <v-card
    density="compact"
    height="100%"
    :max-height="props.project.big === true ? '52vh' : '25vh'"
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

const props = //withDefaults(
  defineProps<{ project: Project, subtitle: string }>();
// , {
//   title: "",
//   subtitle: "",
//   image: "404",
//   big: false,
//   child: false,
// });

function getImageUrl(name: string) {
  return new URL(`../assets/projects/${name}`, import.meta.url).href;
}

const image = computed(() => getImageUrl(props.project.image));
</script>
