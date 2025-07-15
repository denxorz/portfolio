<template>
  <v-dialog v-model="dialog" max-width="600">
    <v-card v-if="project">
      <v-card-title>{{ project.title }}</v-card-title>
      <v-card-subtitle>{{ project.subtitle ?? '' }}</v-card-subtitle>
      <v-img
        v-if="project.image"
        :src="`/assets/projects/${project.image}`"
        height="300"
        cover
      />
      <v-card-text>
        <div v-if="project.description">
          {{ project.description }}
        </div>
        <div v-else>
          No additional information available.
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Project } from "./types/project";

const props = defineProps<{
  modelValue: boolean;
  project: Project | null;
}>();
const emit = defineEmits(['update:modelValue']);

const dialog = computed({
  get: () => props.modelValue,
  set: (val: boolean) => emit('update:modelValue', val),
});

function close() {
  emit('update:modelValue', false);
}
</script> 