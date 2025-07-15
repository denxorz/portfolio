<template>
  <v-container class="fill-height" max-width="1440px">
    <div class="mb-2">
      <div class="d-flex align-center justify-center mb-8">
        <v-avatar class="mr-4" size="72px">
          <v-img height="72" src="@/assets/fotovierkant.png" />
        </v-avatar>
        <div class="text-center">
          <div class="text-body-2 font-weight-light mb-n1">
            Projects worked on by
          </div>
          <h1 class="text-h2 font-weight-bold">Dennis Geldhof</h1>
          <div class="d-flex justify-center mt-2">
            <a
              href="https://www.linkedin.com/in/dgeldhof/"
              target="_blank"
              rel="noopener"
              class="mr-2"
              aria-label="LinkedIn"
            >
              <v-icon size="28" color="white">mdi-linkedin</v-icon>
            </a>
            <a
              href="https://stackoverflow.com/users/2471080/denxorz"
              target="_blank"
              rel="noopener"
              class="mr-2"
              aria-label="Stack Overflow"
            >
              <v-icon size="28" color="white">mdi-stack-overflow</v-icon>
            </a>
            <a
              href="https://github.com/denxorz"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <v-icon size="28" color="white">mdi-github</v-icon>
            </a>
          </div>
        </div>
      </div>

      <v-row>
        <v-col cols="12">
          <MapChart :data="data">
            <WorldMap />
          </MapChart>
        </v-col>

        <v-row>
          <ProjectsGrid :projects="projects" />
        </v-row>

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
        </v-col> -->
      </v-row>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { MapChart, WorldMap } from "vue3-map-chart";
import "vue3-map-chart/dist/style.css";

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

const projects = [
  {
    employer: "flexposure",
    title: "ICC",
    cols: 6,
    big: true,
    image: "icc.webp",
  },
  {
    employer: "",
    title: "",
    image: "",
    cols: 6,
    children: [
      {
        employer: "flexposure",
        title: "QPark",
        image: "qpark.jpg",
      },
      {
        employer: "nurtio",
        title: "Zuidkoop - NextDelft",
        image: "zuidkoop.jpg",
      },
      {
        employer: "priva",
        title: "Mucci Farms",
        image: "mucci.webp",
      },
      {
        employer: "flexposure",
        title: "Eurojust",
        image: "eurojust2.jpg",
      },
    ],
  },

  {
    employer: "nurtio",
    title: "Plant Solutions",
    image: "plantsolutions.jpg",
  },
  {
    employer: "supershift",
    title: "Landal",
    image: "landal.webp",
  },
  {
    employer: "sioux",
    title: "BESI",
    image: "besi.jpg",
  },
  {
    employer: "nurtio",
    title: "Universal Floral",
    image: "uf.jpeg",
  },

  {
    employer: "",
    title: "",
    image: "",
    cols: 6,
    children: [
      {
        employer: "sioux",
        title: "Metrohm Autolab - VIONIC powered by INTELLO",
        image: "metrohm.jpg",
      },
      {
        employer: "siqura",
        title: "ASFinAG",
        image: "asfinag.jpg",
      },
      {
        employer: "obg",
        title: "First Floral Company",
        image: "firstfloral.avif",
      }, // https://www.firstfloral.com.ua/
      {
        employer: "hobby",
        title: "Satisfactory AWS Server",
        image: "satisfactory.jpg",
      },
    ],
  },
  {
    employer: "priva",
    title: "Intergrow Greenhouses",
    cols: 6,
    big: true,
    image: "intergrow.jpg",
  },

  {
    employer: "flexposure",
    title: "Arrestantencomplex Borne",
    image: "borne.avif",
  },
  {
    employer: "siqura",
    title: "RATP",
    image: "ratp.jpeg",
  },
  {
    employer: "flexposure",
    title: "Rabobank",
    image: "rabobank.png",
  },
  {
    employer: "obg",
    title: "Leaflike",
    image: "leaflike.jpg",
  }, // https://www.leaflike.co.uk/

  {
    employer: "",
    title: "",
    image: "",
    cols: 6,
    children: [
      {
        employer: "sioux",
        title: "Avantium",
        image: "avantium.webp",
      },
      {
        employer: "flexposure",
        title: "Ketheltunnel A4",
        image: "a4.avif",
      },

      {
        employer: "nurtio",
        title: "Växtvård",
        image: "vaxtvard.jpg",
      }, // https://vaxtvard.se/
      {
        employer: "supershift",
        title: "Micromedia",
        image: "micromedia.png",
      },
    ],
  },
  {
    employer: "supershift",
    title: "Mission:Control",
    cols: 6,
    big: true,
    image: "mc.svg",
  }, // https://www.missioncontrol.io/

  {
    employer: "nurtio",
    title: "Leaf Factory",
    image: "leaf.jpg",
  }, // https://www.leaffactory.nl/

  {
    employer: "flexposure",
    title: "APCOA",
    image: "apcoa.jpg",
  },
  {
    employer: "priva",
    title: "Nature Fresh Farms",
    image: "naturefresh.jpg",
  },
  {
    employer: "flexposure",
    title: "SEIN",
    image: "sein.webp",
  },

  {
    employer: "priva",
    title: "Green Empire Farms",
    cols: 6,
    big: true,
    image: "greenempire.jpg",
  },

  {
    employer: "",
    title: "",
    image: "",
    cols: 6,
    children: [
      {
        employer: "priva",
        title: "SK Roses",
        image: "skroses.jpg",
      },
      {
        employer: "nurtio",
        title: "Bloom & Flourish",
        image: "bloom.jpg",
        // https://bloomandflourishco.com/
      },
      {
        employer: "flexposure",
        title: "Velsertunnel A22",
        image: "velsertunnel.jpg",
      },
      {
        employer: "nurtio",
        title: "Donker Groep",
        image: "donker.webp",
      },
    ],
  }, // https://donkergroep.com/nl/donker-interieur/

  {
    employer: "hobby",
    title: "Open Plantbook API",
    image: "plantbook.webp",
  },
  {
    employer: "siqura",
    title: "Highway Taiwan",
    image: "taiwan.jpg",
  },
  {
    employer: "hobby",
    title: "Thingsmobile API",
    image: "tm.jpg",
  },
  {
    employer: "flexposure",
    title: "Interparking",
    image: "interparking.webp",
  },

  {
    employer: "nurtio",
    title: "Ambius UK",
    image: "ambius.jpg",
  }, // https://www.ambius.co.uk/
  {
    employer: "flexposure",
    title: "Gaasperdammertunnel A9 IXAS",
    image: "a9.jpg",
  },
  {
    employer: "priva",
    title: "Hexo",
    image: "hexo.jpg",
  },
];

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
</script>
