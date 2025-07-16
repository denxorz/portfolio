<template>
  <template v-for="(project, imgIdx) in projects" :key="imgIdx">
    <v-col v-if="!project.children" :cols="project.cols ?? 3">
      <ProjectCell :project="project" @click="openDialog(project)" />
    </v-col>

    <v-col
      v-if="project.children"
      class="d-flex flex-column"
      :cols="project?.cols ?? 6"
    >
      <v-row>
        <v-col
          v-for="(child, childIdx) in project.children"
          :key="childIdx"
          :cols="child.cols ?? 6"
        >
          <ProjectCell :project="child" child @click="openDialog(child)" />
        </v-col>
      </v-row>
    </v-col>
  </template>

  <ProjectDialog v-model="dialog" :project="selectedProject" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import ProjectDialog from "./ProjectDialog.vue";
import type { Project } from "./types/project";

defineProps<{ projects: Project[] }>();

const dialog = ref(false);
const selectedProject = ref<Project | null>(null);

function openDialog(project: Project) {
  selectedProject.value = project;
  dialog.value = true;
}
</script>
