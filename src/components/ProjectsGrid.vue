<template>
  <template v-for="(project, imgIdx) in projects" :key="imgIdx">
    <v-col v-if="!project.children" :cols="project.cols ?? 3">
      <ProjectCell :project="project" />
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
          <ProjectCell :project="child" child />
        </v-col>
      </v-row>
    </v-col>
  </template>
</template>

<script setup lang="ts">
import type { Project } from "./types/project";

defineProps<{ projects: Project[] }>();
</script>
