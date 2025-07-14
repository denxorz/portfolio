<template>
  <v-container class="fill-height" max-width="1440px">
    <div>
      <v-img class="mb-4" height="150" src="@/assets/logo.png" />

      <div class="mb-8 text-center">
        <div class="text-body-2 font-weight-light mb-n1">
          Projects worked on by
        </div>
        <h1 class="text-h2 font-weight-bold">Dennis Geldhof</h1>
      </div>

      <v-row>
        <v-col cols="12">
          <MapChart :data="data">
            <WorldMap />
          </MapChart>
        </v-col>

        <v-row>
          <template v-for="(project, imgIdx) in projects" :key="imgIdx">
            <v-col v-if="!project.children" :cols="project.cols ?? 3">
              <Project
                :title="project.title"
                :subtitle="project.subtitle"
                :image="project.image"
                :big="project.spanRows === true"
              />
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
                  <Project
                    :title="child.title"
                    :subtitle="child.subtitle ?? ''"
                    :image="child.image"
                    child
                  />
                </v-col>
              </v-row>
            </v-col>
          </template>
        </v-row>

        <v-col cols="12">
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
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            :href="link.href"
            :prepend-icon="link.icon"
            rel="noopener noreferrer"
            rounded="lg"
            :subtitle="link.subtitle"
            target="_blank"
            :title="link.title"
            variant="tonal"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { MapChart, WorldMap } from "vue3-map-chart";
import "vue3-map-chart/dist/style.css";

const data = {
  US: 14,
  GB: 40,
  IE: 60,
  SE: 40,
  PL: 90,
  NL: 22,
  IT: 15,
};

const projects = [
  {
    title: "ICC",
    cols: 6,
    spanRows: true,
    image: "icc.webp",
    subtitle: "TKH Security Flexposure - FlinQ",
  },
  {
    cols: 6,
    children: [
      {
        title: "QPark",
        image: "qpark.jpg",
        subtitle: "TKH Security Flexposure - FlinQ",
      },
      {
        title: "Zuidkoop - NextDelft",
        image: "zuidkoop.jpg",
        subtitle: "Nurtio Protect",
      },
      {
        title: "Mucci Farms",
        image: "mucci.webp",
        subtitle: "Priva - FS Performance",
      },
      {
        title: "Eurojust",
        image: "eurojust2.jpg",
        subtitle: "TKH Security - Flexposure FlinQ",
      },
    ],
  },

  {
    title: "Plant Solutions",
    image: "plantsolutions.jpg",
    subtitle: "Nurtio - Protect",
  },
  {
    title: "Landal",
    image: "landal.webp",
    subtitle: "Supershift - Landal",
  },
  {
    title: "BESI",
    image: "besi.jpg",
    subtitle: "Sioux",
  },
  {
    title: "Universal Floral",
    image: "uf.jpeg",
    subtitle: "Nurtio Protect",
  },

  {
    cols: 6,
    children: [
      {
        title: "VIONIC powered by INTELLO",
        image: "metrohm.jpg",
        subtitle: "Metrohm Autolab",
      },
      {
        title: "Asfinag",
        image: "asfinag.jpg",
        subtitle: "TKH Security - Siqura Network Recorder",
      },
      {
        title: "First Floral Company",
        image: "firstfloral.avif",
        subtitle: "One Big Green",
      }, // https://www.firstfloral.com.ua/
      {
        title: "SK Roses",
        image: "skroses.jpg",
        subtitle: "Priva - FS Performance",
      },
    ],
  },
  {
    title: "Intergrow Greenhouses",
    cols: 6,
    spanRows: true,
    image: "intergrow.jpg",
    subtitle: "Priva - FS Performance",
  },

  {
    title: "Arrestantencomplex Borne",
    image: "borne.avif",
    subtitle: "TKH Security - Flexposure FlinQ",
  },
  {
    title: "RATP",
    image: "ratp.jpeg",
    subtitle: "TKH Security - Siqura Network Recorder",
  },
  {
    title: "Rabobank",
    image: "rabobank.png",
    subtitle: "TKH Security - Flexposure FlinQ",
  },
  {
    title: "Leaflike",
    image: "leaflike.jpg",
    subtitle: "One Big Green",
  }, // https://www.leaflike.co.uk/

  {
    cols: 6,
    children: [
      {
        title: "Avantium",
        image: "avantium.webp",
      },
      {
        title: "Hexo",
        image: "hexo.jpg",
        subtitle: "Priva - FS Performance",
      },
      {
        title: "Växtvård",
        image: "vaxtvard.jpg",
        subtitle: "Nurtio Protect",
      }, // https://vaxtvard.se/
      {
        title: "Micromedia",
        image: "micromedia.webp",
        subtitle: "Supershift - Micromedia",
      },
    ],
  },
  {
    title: "Mission:Control",
    cols: 6,
    spanRows: true,
    image: "mc.svg",
    subtitle: "Supershift - Mission:Control",
  }, // https://www.missioncontrol.io/

  {
    title: "Leaf Factory",
    image: "leaf.jpg",
    subtitle: "Nurtio Protect",
  }, // https://www.leaffactory.nl/

  {
    title: "Ambius UK",
    image: "ambius.jpg",
    subtitle: "Nurtio Protect",
  }, // https://www.ambius.co.uk/
  {
    title: "Nature Fresh Farms",
    image: "naturefresh.jpg",
    subtitle: "Priva - FS Performance",
  },
  {
    title: "SEIN",
    image: "sein.webp",
    subtitle: "TKH Security - Flexposure FlinQ",
  },

  {
    title: "Green Empire Farms",

    cols: 6,
    spanRows: true,
    image: "greenempire.jpg",
    subtitle: "Priva - FS Performance",
  },

  {
    cols: 6,
    children: [
      {
        title: "Interparking",
        image: "interparking.webp",
        subtitle: "TKH Security - Flexposure FlinQ",
      },
      {
        title: "Highway Taiwan",
        image: "taiwan.jpg",
        subtitle: "TKH Security - Siqura Network Recorder",
      },

      {
        title: "SK Roses",
        image: "skroses.jpg",
        subtitle: "Priva - FS Performance",
      },
      {
        title: "Donker Groep",
        image: "donker.webp",
        subtitle: "Nurtio Protect",
      },
    ],
  }, // https://donkergroep.com/nl/donker-interieur/
];

//  { title: "greenoak" }, //  https://greenoakms.com/garden-center/
//
// https://bloomandflourishco.com/
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
</script>
