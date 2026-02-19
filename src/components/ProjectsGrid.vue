<template>
  <v-row>
    <template v-for="(project, imgIdx) in projects" :key="imgIdx">
      <v-col v-if="!project.children" cols="12" :lg="project.halfWidth ? 6 : 3" sm="12">
        <ProjectCell :project="project" @click="openDialog(project)" />
      </v-col>

      <v-col
        v-if="project.children"
        class="d-flex flex-column"
        cols="12"
        lg="6"
        md="8"
        sm="12"
      >
        <v-row>
          <v-col
            v-for="(child, childIdx) in project.children"
            :key="childIdx"
            cols="12"
            sm="6"
          >
            <ProjectCell child :project="child" @click="openDialog(child)" />
          </v-col>
        </v-row>
      </v-col>
    </template>
  </v-row>

  <ProjectDialog v-model="dialog" :project="selectedProject" />
</template>

<script setup lang="ts">
  import type { Project } from './types/project'
  import { ref } from 'vue'
  import ProjectDialog from './ProjectDialog.vue'

  defineProps<{ projects: Project[] }>()

  const dialog = ref(false)
  const selectedProject = ref<Project | null>(null)

  function openDialog (project: Project) {
    selectedProject.value = project
    dialog.value = true
  }
</script>
