<template>
  <v-row>
    <template v-for="(project, imgIdx) in projects" :key="imgIdx">
      <v-col v-if="!project.children" cols="12" sm="6" md="4" lg="3">
        <ProjectCell :project="project" @click="openDialog(project)" />
      </v-col>

      <v-col
        v-if="project.children"
        class="d-flex flex-column"
        cols="12" sm="12" md="8" lg="6"
      >
        <v-row>
          <v-col
            v-for="(child, childIdx) in project.children"
            :key="childIdx"
            cols="12" sm="6"
          >
            <ProjectCell :project="child" child @click="openDialog(child)" />
          </v-col>
        </v-row>
      </v-col>
    </template>
  </v-row>

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
