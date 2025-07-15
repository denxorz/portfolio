<template>
  <ProjectBasic v-bind="{ ...props, subtitle: getSubtitle(props.project) }" @click="$emit('click')" />
</template>

<script setup lang="ts">
import ProjectBasic from "@/components/ProjectBasic.vue";
import type { Project } from "./types/project";

const props = defineProps<{ project: Project; child?: boolean }>();

function getSubtitle(project: Project): string {
  switch (project.employer) {
    case "flexposure":
      return "TKH Security Flexposure - FlinQ";
    case "siqura":
      return "TKH Security - Siqura Network Recorder";
    case "supershift":
      return "Supershift";
    case "nurtio":
      return "Nurtio Protect";
    case "priva":
      return "Priva FS Performance";
    case "hobby":
      return "Opensource contributions";
    case "obg":
      return "One Big Green";
    case "sioux":
      return "Sioux";
    default:
      return project.subtitle || "";
  }
}
</script>
