<template>
  <v-dialog v-model="dialog" :max-width="$vuetify.display.smAndDown ? '100vw' : '700'">
    <v-card v-if="project" class="pa-4">
      <v-row class="mb-2" no-gutters :class="$vuetify.display.smAndDown ? 'flex-column' : ''">
        <v-col :cols="$vuetify.display.smAndDown ? 12 : 5" class="d-flex align-center pr-4 pb-2">
          <v-img
            v-if="project.image"
            :src="`/assets/projects/${project.image}`"
            :height="$vuetify.display.smAndDown ? '160' : '220'"
            cover
            class="rounded-lg elevation-3 project-dialog-img"
          />
        </v-col>
        <v-col :cols="$vuetify.display.smAndDown ? 12 : 7" class="pl-4 d-flex flex-column" style="align-self: flex-start;">
          <v-card-title class="text-h5 mb-2 pa-0">{{ project.title }}</v-card-title>
          <v-card-subtitle class="mb-2 pa-0">{{ project.subtitle ?? '' }}</v-card-subtitle>
          <div v-if="project.url" class="mb-2">
            <a :href="project.url" target="_blank" rel="noopener">{{ project.url }}</a>
          </div>
          <div v-if="project.info" class="mb-2">
            {{ project.info }}
          </div>
        </v-col>
      </v-row>
      <v-divider class="my-4" />
      <v-card-text class="mb-4" v-if="project.productInfo">
        {{ project.productInfo }}
      </v-card-text>
      <div v-if="project.productLink" class="mb-4 px-4">
        <a :href="project.productLink" target="_blank" rel="noopener">{{ project.productLink }}</a>
      </div>
      <v-card-actions class="pt-2">
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

<style scoped>
.project-dialog-img {
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  width: 100%;
  max-width: 100%;
}
.v-card {
  padding: 24px !important;
}
@media (max-width: 600px) {
  .v-card {
    padding: 12px !important;
  }
}
</style> 