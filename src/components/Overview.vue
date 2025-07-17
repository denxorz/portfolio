<template>
  <v-container class="fill-height" max-width="1440px">
    <div class="mb-2">
      <div class="d-flex flex-column flex-md-row align-center justify-center mb-8">
        <v-avatar class="mr-0 mr-md-4 mb-2 mb-md-0" size="72px">
          <v-img height="72" src="@/assets/fotovierkant.png" />
        </v-avatar>
        <div class="text-center">
          <div class="text-body-2 font-weight-light mb-n1">
            Projects worked on by
          </div>
          <h1 class="text-h4 text-md-h2 font-weight-bold">Dennis Geldhof</h1>
          <div class="d-flex justify-center mt-2 flex-wrap">
            <a href="https://www.linkedin.com/in/dgeldhof/" target="_blank" rel="noopener" class="mr-2 mb-2"
              aria-label="LinkedIn">
              <v-icon size="28" color="white">mdi-linkedin</v-icon>
            </a>
            <a href="https://stackoverflow.com/users/2471080/denxorz" target="_blank" rel="noopener" class="mr-2 mb-2"
              aria-label="Stack Overflow">
              <v-icon size="28" color="white">mdi-stack-overflow</v-icon>
            </a>
            <a href="https://github.com/denxorz" target="_blank" rel="noopener" aria-label="GitHub" class="mb-2">
              <v-icon size="28" color="white">mdi-github</v-icon>
            </a>
          </div>
        </div>
      </div>

      <!-- Map and Tag Filter responsive layout -->
      <v-row class="mb-4" align="center">
        <v-col cols="12" md="7" class="mb-4 mb-md-0">
          <MapChart :data="data">
            <WorldMap />
          </MapChart>
        </v-col>
        <v-col cols="12" md="5">
          <div class="d-flex flex-wrap gap-2 justify-center">
            <v-chip v-for="tag in allTags" :key="tag" :color="selectedTag === tag ? 'primary' : 'default'"
              :variant="selectedTag === tag ? 'elevated' : 'outlined'" class="ma-1" @click="toggleTag(tag)"
              style="cursor: pointer; user-select: none">
              {{ tag }}
            </v-chip>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <ProjectsGrid :projects="projectsWithLayout" />

        <!-- <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
            prepend-icon="mdi-rocket-launch-outline"
            rounded="lg"
            variant="tonal"
          >
            <template #image>
              <v-img position="top right" />
            </template>

<template #title>
              <h2 class="text-h5 font-weight-bold">Get started</h2>
            </template>

<template #subtitle>
              <div class="text-subtitle-1">
                Change this page by updating
                <v-kbd>{{ `<HelloWorld />` }}</v-kbd> in
                <v-kbd>components/HelloWorld.vue</v-kbd>.
              </div>
            </template>
</v-card>
</v-col>

<v-col v-for="link in links" :key="link.href" cols="6">
  <v-card append-icon="mdi-open-in-new" class="py-4" color="surface-variant" :href="link.href" :prepend-icon="link.icon"
    rel="noopener noreferrer" rounded="lg" :subtitle="link.subtitle" target="_blank" :title="link.title"
    variant="tonal" />
</v-col> -->
      </v-row>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { MapChart, WorldMap } from "vue3-map-chart";
import "vue3-map-chart/dist/style.css";
import { projects, type Project } from "./projects-list.ts";

const data = {
  US: 70,
  GB: 70,
  IE: 70,
  SE: 70,
  PL: 70,
  NL: 70,
  IT: 70,
  FR: 70,
  BE: 70,
  UA: 70,
  CA: 70,
};

//  { title: "greenoak" }, //  https://greenoakms.com/garden-center/
//

// https://www.naturesgreen.nl/nl/
// https://green-roofs.co.uk/
// https://foliagedesign.com/
// https://growinggreenllc.com/
// https://www.urbanplanters.co.uk/
// https://universalfloral.com/
// https://plantsolutions.com/

const links = [
  {
    href: "https://vuetifyjs.com/",
    icon: "mdi-text-box-outline",
    subtitle: "Learn about all things Vuetify in our documentation.",
    title: "Documentation",
  },
  {
    href: "https://vuetifyjs.com/introduction/why-vuetify/#feature-guides",
    icon: "mdi-star-circle-outline",
    subtitle: "Explore available framework Features.",
    title: "Features",
  },
  {
    href: "https://vuetifyjs.com/components/all",
    icon: "mdi-widgets-outline",
    subtitle: "Discover components in the API Explorer.",
    title: "Components",
  },
  {
    href: "https://discord.vuetifyjs.com",
    icon: "mdi-account-group-outline",
    subtitle: "Connect with Vuetify developers.",
    title: "Community",
  },
];

const allTags = [
  ...new Set(projects.flatMap((p: Project) => [...(p.tags || [])])),
  'involves cats',
].sort((a, b) => {
  const isByA = a.toLowerCase().startsWith("by ");
  const isByB = b.toLowerCase().startsWith("by ");
  if (isByA && !isByB) return -1;
  if (!isByA && isByB) return 1;
  return a.localeCompare(b);
});

const selectedTag = ref<string | null>(null);

function toggleTag(tag: string) {
  if (selectedTag.value === tag) {
    selectedTag.value = null;
  } else {
    selectedTag.value = tag;
  }
}

const filteredProjects = computed<Project[]>(() => {
  if (!selectedTag.value) {
    return projects;
  }

  return projects.filter((project: Project) => {
    const matches = project.tags && project.tags.includes(selectedTag.value!);
    return matches;
  });
});

const projectsWithLayout = computed<Project[]>(() => {
  let projectsToLayout = [...filteredProjects.value];
  const layout: Project[] = [];

  while (projectsToLayout.length > 0) {
    const firstBatch = projectsToLayout.slice(0, 18);
    projectsToLayout = projectsToLayout.slice(18);

    layout.push({ ...firstBatch[0], cols: 6, big: true });

    layout.push({
      title: "",
      image: "",
      info: "",
      url: "",
      cols: 6,
      tags: [],
      children: firstBatch.slice(1, 5).map((c: Project) => ({ ...c, child: true })),
    });

    if (firstBatch.length > 5) {
      layout.push(firstBatch[5]);
    }

    if (firstBatch.length > 6) {
      layout.push(firstBatch[6]);
    }

    if (firstBatch.length > 7) {
      layout.push(firstBatch[7]);
    }

    if (firstBatch.length > 8) {
      layout.push(firstBatch[8]);
    }

    if (firstBatch.length > 9) {
      layout.push({
        title: "",
        image: "",
        info: "",
        url: "",
        cols: 6,
        tags: [],
        children: firstBatch.slice(9, 13).map((c: Project) => ({ ...c, child: true })),
      });
    }

    if (firstBatch.length > 13) {
      layout.push({ ...firstBatch[13], cols: 6, big: true });
    }

    if (firstBatch.length > 14) {
      layout.push(firstBatch[14]);
    }

    if (firstBatch.length > 15) {
      layout.push(firstBatch[15]);
    }

    if (firstBatch.length > 16) {
      layout.push(firstBatch[16]);
    }

    if (firstBatch.length > 17) {
      layout.push(firstBatch[17]);
    }
  }
  return layout;
});
</script>

<style scoped>
@media (max-width: 600px) {
  .text-h2 {
    font-size: 2rem !important;
  }
  .mr-md-4 {
    margin-right: 0 !important;
  }
  .mb-md-0 {
    margin-bottom: 0 !important;
  }
}
</style>
