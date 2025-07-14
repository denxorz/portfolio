<template>
  <component :is="getTypeFromEmployer(props.project)" v-bind="props" />
</template>

<script setup lang="ts">
import ProjectFlexposure from "@/components/ProjectFlexposure.vue";
import ProjectSiqura from "@/components/ProjectSiqura.vue";
import ProjectSupershift from "@/components/ProjectSupershift.vue";
import ProjectNurtio from "@/components/ProjectNurtio.vue";
import ProjectPriva from "@/components/ProjectPriva.vue";
import ProjectHobby from "@/components/ProjectHobby.vue";
import ProjectOBG from "@/components/ProjectOBG.vue";
import ProjectSioux from "@/components/ProjectSioux.vue";
import ProjectBasic from "@/components/ProjectBasic.vue";
import type { Project } from "./types/project";

const props = defineProps<{ project: Project; child?: boolean }>();

const getTypeFromEmployer = (project: Project) => {
  switch (project.employer) {
    case "flexposure":
      return ProjectFlexposure;
    case "siqura":
      return ProjectSiqura;
    case "supershift":
      return ProjectSupershift;
    case "nurtio":
      return ProjectNurtio;
    case "priva":
      return ProjectPriva;
    case "hobby":
      return ProjectHobby;
    case "obg":
      return ProjectOBG;
    case "sioux":
      return ProjectSioux;
    default:
      return ProjectBasic;
  }
};
</script>
