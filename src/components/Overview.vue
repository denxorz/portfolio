<template>
  <v-container class="fill-height fixed-top-margin" :max-width="$vuetify.display.smAndDown ? '100vw' : '1440px'" style="padding: 0;">
    <div class="mb-2">
      <div class="d-flex flex-column flex-md-row align-center justify-center mb-8 header-fixed-height">
        <v-avatar class="mr-0 mr-md-4 mb-2 mb-md-0" size="72px">
          <v-img height="72" src="/assets/projects/me.avif" />
        </v-avatar>
        <div class="text-center">
          <div class="text-body-1  mb-n1">
            Projects that work with code build by
          </div>
          <h1 class="text-h4 text-md-h2 font-weight-bold">Dennis Geldhof</h1>
          <div class="d-flex justify-center mt-2 flex-wrap">
            <a
              aria-label="LinkedIn"
              class="mr-2 mb-2"
              href="https://www.linkedin.com/in/dgeldhof/"
              rel="noopener"
              target="_blank"
            >
              <v-icon color="white" size="28">mdi-linkedin</v-icon>
            </a>
            <a
              aria-label="Stack Overflow"
              class="mr-2 mb-2"
              href="https://stackoverflow.com/users/2471080/denxorz"
              rel="noopener"
              target="_blank"
            >
              <v-icon color="white" size="28">mdi-stack-overflow</v-icon>
            </a>
            <a
              aria-label="GitHub"
              class="mb-2"
              href="https://github.com/denxorz"
              rel="noopener"
              target="_blank"
            >
              <v-icon color="white" size="28">mdi-github</v-icon>
            </a>
          </div>
        </div>
      </div>

      <v-row align="center" class="mb-4">
        <v-col cols="12" md="12">
          <div class="tag-filter-responsive d-flex flex-wrap gap-2 justify-center">
            <v-chip
              v-for="tag in allTags"
              :key="tag"
              class="ma-1"
              :color="selectedTag === tag ? 'primary' : 'default'"
              style="cursor: pointer; user-select: none"
              :variant="selectedTag === tag ? 'elevated' : 'outlined'"
              @click="toggleTag(tag)"
            >
              {{ tag }}
            </v-chip>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <template v-if="selectedTag === 'involves cats'">
          <v-col cols="12">
            <Cats />
          </v-col>
        </template>
        <ProjectsGrid :projects="projectsWithLayout" />
      </v-row>
    </div>
  </v-container>
</template>

<script setup lang="ts">
  import { type Project, projects } from './projects-list.ts'

  //  https://greenoakms.com/garden-center/
  // https://www.naturesgreen.nl/nl/
  // https://green-roofs.co.uk/
  // https://foliagedesign.com/
  // https://growinggreenllc.com/
  // https://www.urbanplanters.co.uk/
  // https://universalfloral.com/
  // https://plantsolutions.com/

  const allTags = [
    ...new Set(projects.flatMap((p: Project) => [...(p.tags || [])])),
    'involves cats',
  ].toSorted((a: string, b: string) => {
    const isByA = a.toLowerCase().startsWith('by ')
    const isByB = b.toLowerCase().startsWith('by ')
    if (isByA && !isByB) return -1
    if (!isByA && isByB) return 1
    return a.localeCompare(b)
  })

  const selectedTag = ref<string | null>(null)

  function toggleTag (tag: string) {
    selectedTag.value = selectedTag.value === tag ? null : tag
  }

  const filteredProjects = computed<Project[]>(() => {
    if (!selectedTag.value) {
      return projects
    }

    return projects.filter((project: Project) => {
      const matches = project.tags && project.tags.includes(selectedTag.value!)
      return matches
    })
  })

  const projectsWithLayout = computed<Project[]>(() => {
    let projectsToLayout = [...filteredProjects.value]
    const layout: Project[] = []

    while (projectsToLayout.length > 0) {
      const firstBatch = projectsToLayout.slice(0, 18)
      projectsToLayout = projectsToLayout.slice(18)

      const first = firstBatch[0]!
      const mid = [firstBatch[5], firstBatch[6], firstBatch[7], firstBatch[8]].filter(
        (p): p is Project => p != null,
      )
      const tail = [firstBatch[14], firstBatch[15], firstBatch[16], firstBatch[17]].filter(
        (p): p is Project => p != null,
      )
      const batch: Project[] = [
        { ...first, halfWidth: true, big: true } as Project,
        {
          title: '',
          image: '',
          info: '',
          url: '',
          halfWidth: true,
          tags: [],
          children: firstBatch.slice(1, 5).map((c: Project) => ({ ...c, child: true })),
        },
        ...mid,
        ...(firstBatch.length > 9
          ? [{
            title: '',
            image: '',
            info: '',
            url: '',
            halfWidth: true,
            tags: [],
            children: firstBatch.slice(9, 13).map((c: Project) => ({ ...c, child: true })),
          }]
          : []),
        ...(firstBatch.length > 13 ? [{ ...firstBatch[13]!, halfWidth: true, big: true } as Project] : []),
        ...tail,
      ]
      layout.push(...batch)
    }
    return layout
  })
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
  .tag-filter-responsive {
    max-width: 100vw;
    overflow-x: visible;
  }
}
:global(body) {
  overflow-x: hidden;
}
.fixed-top-margin {
  margin-top: 32px;
}
.header-fixed-height {
  min-height: 160px;
}
</style>
