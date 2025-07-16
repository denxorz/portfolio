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
import {
  flexposureProject,
  siquraProject,
  supershiftProject,
  nurtioProject,
  privaProject,
  hobbyProject,
  obgProject,
  siouxProject,
  type Project,
} from "./types/project";

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

const projects: Project[] = [
  flexposureProject({
    title: "ICC",
    cols: 6,
    big: true,
    image: "icc.avif",
    info: "The International Criminal Court (ICC) is an intergovernmental organization and international tribunal seated in The Hague, Netherlands. It is the first and only permanent international court with jurisdiction to prosecute individuals for the international crimes of genocide, crimes against humanity, war crimes, and the crime of aggression. ",
    url: "https://www.icc-cpi.int/",
  }),
  {
    employer: "",
    title: "",
    image: "",
    info: "",
    url: "",
    cols: 6,
    children: [
      flexposureProject({
        title: "QPark",
        image: "qpark.avif",
        info: "Q-Park is an operator of parking garages in Belgium, Denmark, Germany, France, Ireland, the Netherlands, and the United Kingdom. Q-Park is the number two on the European parking market.[3] In total Q-Park controls 800,000 parking spaces on more than 3,500 locations.",
        url: "https://www.q-park.com/",
      }),
      nurtioProject({
        title: "Zuidkoop",
        image: "zuidkoop.avif",
        info: " ",
        url: "https://zuidkoop.nl/zuidkoop#natural",
      }),
      privaProject({
        title: "Mucci Farms",
        image: "mucci.avif",
        info: "Mucci Farms is a Canadian greenhouse grower and distributor of fresh produce, specializing in tomatoes, cucumbers, and peppers. They are known for their commitment to sustainable farming practices and high-quality produce.",
        url: "https://www.muccifarms.com/",
      }),
      flexposureProject({
        title: "Eurojust",
        image: "eurojust.avif",
        info: "Eurojust is the European Union's agency for criminal justice cooperation, facilitating coordination between national judicial authorities in cross-border cases. It aims to improve the effectiveness of investigations and prosecutions in serious cross-border crime.",
        url: "https://eurojust.europa.eu/",
      }),
    ],
  },
  nurtioProject({
    title: "Plant Solutions",
    image: "plantsolutions.avif",
    info: "Plant Solutions is a company specializing in providing plant care solutions and services, including plant design, maintenance, and consultation for both residential and commercial spaces.",
    url: "https://plantsolutions.com/",
  }),
  supershiftProject({
    title: "Landal",
    image: "landal.avif",
    info: "Landal GreenParks is a Dutch company that operates holiday parks in the Netherlands, Germany, Belgium, Austria, Switzerland, and the Czech Republic. They offer a range of accommodations and activities in natural settings.",
    url: "https://www.landal.com/",
  }),
  siouxProject({
    title: "BESI",
    image: "besi.avif",
    info: "BE Semiconductor Industries N.V. (BESI) is a Dutch company that designs and manufactures equipment for the semiconductor industry, specializing in advanced packaging and assembly solutions.",
    url: "https://www.besi.com/",
  }),
  nurtioProject({
    title: "Universal Floral",
    image: "uf.avif",
    info: "Universal Floral is a company that specializes in providing floral products and services, including wholesale flowers, floral design, and event decoration.",
    url: "https://universalfloral.com/",
  }),
  {
    employer: "",
    title: "",
    image: "",
    info: "",
    url: "",
    cols: 6,
    children: [
      siouxProject({
        title: "Metrohm Autolab - VIONIC powered by INTELLO",
        image: "metrohm.avif",
        info: "Metrohm Autolab is a company that specializes in electrochemical instrumentation and software solutions. VIONIC is their advanced electrochemical workstation powered by INTELLO technology, designed for high-performance research and development.",
        url: "https://www.metrohm-autolab.com/",
      }),
      siquraProject({
        title: "ASFinAG",
        image: "asfinag.avif",
        info: "ASFinAG is the Austrian motorway and expressway operator, responsible for the construction, maintenance, and operation of Austria's road network. They focus on ensuring safe and efficient transportation across the country.",
        url: "https://www.asfinag.at/",
      }),
      obgProject({
        title: "First Floral Company",
        image: "firstfloral.avif",
        info: "First Floral Company is a Ukranian provider of floral products and services, specializing in fresh flowers, arrangements, and event decoration.",
        url: "https://www.firstfloral.com/",
      }),
      hobbyProject({
        title: "Open Plantbook API",
        image: "plantbook.avif",
        info: "Open Plantbook API is a project that provides an open API for accessing plant care data and resources, enabling developers to create applications and services related to plant care and maintenance.",
        url: "https://www.openplantbook.com/",
      }),
    ],
  },
  privaProject({
    title: "Intergrow Greenhouses",
    cols: 6,
    big: true,
    image: "intergrow.avif",
    info: "Intergrow Greenhouses is a leading greenhouse grower in the United States, specializing in high-quality tomatoes and other produce. They focus on sustainable practices and innovative growing techniques.",
    url: "https://www.intergrowgreenhouses.com/",
  }),

  flexposureProject({
    title: "Arrestantencomplex Borne",
    image: "borne.avif",
    info: "Arrestantencomplex Borne is a detention facility in the Netherlands, designed to hold individuals awaiting trial or serving short sentences. It focuses on security and rehabilitation.",
    url: "https://www.justitieelestartpagina.nl/justitie/justitieelestartpagina/justitieelestartpagina/justitieelestartpagina/arrestantencomplex-borne",
  }),
  siquraProject({
    title: "RATP",
    image: "ratp.avif",
    info: "RATP (Régie Autonome des Transports Parisiens) is the public transport operator in Paris, France. It manages the Paris Métro, buses, trams, and RER trains, providing comprehensive transportation services in the Île-de-France region.",
    url: "https://www.ratp.fr/",
  }),
  flexposureProject({
    title: "Rabobank",
    image: "rabobank.avif",
    info: "Rabobank is a Dutch multinational banking and financial services company, known for its cooperative banking model. It provides a wide range of financial services, including retail banking, investment banking, and asset management.",
    url: "https://www.rabobank.com/",
  }),
  obgProject({
    title: "Leaflike",
    image: "leaflike.avif",
    info: "Leaflike is a company that specializes in providing plant care solutions and services, including plant design, maintenance, and consultation for both residential and commercial spaces.",
    url: "https://www.leaflike.co.uk/",
  }),

  {
    employer: "",
    title: "",
    image: "",
    info: "",
    url: "",
    cols: 6,
    children: [
      siouxProject({
        title: "Avantium",
        image: "avantium.avif",
        info: "Avantium is a Dutch renewable chemistry company that develops and commercializes advanced technologies for the production of renewable chemicals and materials, focusing on sustainability and circular economy.",
        url: "https://www.avantium.com/",
      }),
      flexposureProject({
        title: "Ketheltunnel A4",
        image: "a4.avif",
        info: "The Ketheltunnel A4 is a major road tunnel in the Netherlands, part of the A4 motorway. It plays a crucial role in facilitating traffic flow and reducing congestion in the region.",
        url: "https://www.rijkswaterstaat.nl/wegen/a4-ketheltunnel",
      }),
      nurtioProject({
        title: "Växtvård",
        image: "vaxtvard.avif",
        info: "Växtvård is a Swedish company specializing in plant care and maintenance services for both residential and commercial clients.",
        url: "https://vaxtvard.se/",
      }),
      supershiftProject({
        title: "Micromedia",
        image: "micromedia.avif",
        info: "Micromedia is a company that provides digital media solutions, including web development, digital marketing, and content creation services.",
        url: "https://www.micromedia.com/",
      }),
    ],
  },
  supershiftProject({
    title: "Mission:Control",
    cols: 6,
    big: true,
    image: "mc.svg",
    info: "Mission:Control is a platform that provides tools and services for managing and optimizing the operations, focusing on efficiency and productivity for the game industry.",
    url: "https://www.missioncontrol.io/",
  }),

  nurtioProject({
    title: "Leaf Factory",
    image: "leaf.avif",
    info: "Leaf Factory is a company that specializes in creating innovative plant care solutions and services, focusing on sustainability and enhancing indoor environments with greenery.",
    url: "https://www.leaffactory.nl/",
  }),

  flexposureProject({
    title: "APCOA",
    image: "apcoa.avif",
    info: "APCOA is a leading parking management company in Europe, providing parking solutions and services across various sectors, including airports, shopping centers, and urban areas.",
    url: "https://www.apcoa.com/",
  }),
  privaProject({
    title: "Nature Fresh Farms",
    image: "naturefresh.avif",
    info: "Nature Fresh Farms is a Canadian greenhouse grower and distributor of fresh produce, specializing in tomatoes, cucumbers, and peppers. They are known for their commitment to sustainable farming practices and high-quality produce.",
    url: "https://www.naturefreshfarms.com/",
  }),
  flexposureProject({
    title: "SEIN",
    image: "sein.avif",
    info: "SEIN is a Dutch organization that provides specialized care and support for individuals with complex psychiatric disorders, focusing on rehabilitation and integration into society.",
    url: "https://www.sein.nl/",
  }),

  privaProject({
    title: "Green Empire Farms",
    cols: 6,
    big: true,
    image: "greenempire.avif",
    info: "Green Empire Farms is a greenhouse grower in the United States, specializing in high-quality tomatoes and other produce. They focus on sustainable practices and innovative growing techniques.",
    url: "https://www.greenempirefarms.com/",
  }),

  {
    employer: "",
    title: "",
    image: "",
    info: "",
    url: "",
    cols: 6,
    children: [
      privaProject({
        title: "SK Roses",
        image: "skroses.avif",
        info: "SK Roses is a leading rose grower in the Netherlands, known for its high-quality roses and innovative cultivation techniques. They supply roses to florists and wholesalers worldwide.",
        url: "https://www.skroses.nl/",
      }),
      nurtioProject({
        title: "Bloom & Flourish",
        image: "bloom.avif",
        info: "Bloom & Flourish is a company that specializes in providing plant care solutions and services, including plant design, maintenance, and consultation for both residential and commercial spaces.",
        url: "https://bloomandflourishco.com/",
      }),
      flexposureProject({
        title: "Velsertunnel A22",
        image: "velsertunnel.avif",
        info: "The Velsertunnel A22 is a major road tunnel in the Netherlands, part of the A22 motorway. It plays a crucial role in facilitating traffic flow and reducing congestion in the region.",
        url: "https://www.rijkswaterstaat.nl/wegen/a22-velsertunnel",
      }),
      privaProject({
        title: "Donker Groep",
        image: "donker.avif",
        info: "Donker Groep is a Dutch company specializing in interior design and landscaping, providing innovative solutions for both residential and commercial spaces.",
        url: "https://donkergroep.com/nl/donker-interieur/",
      }),
    ],
  },

  siquraProject({
    title: "Highway Taiwan",
    image: "taiwan.avif",
    info: "Highway Taiwan is a project focused on improving and maintaining the highway infrastructure in Taiwan, ensuring safe and efficient transportation across the island.",
    url: "https://www.thb.gov.tw/ENG/index.aspx",
  }),
  hobbyProject({
    title: "Thingsmobile API",
    image: "tm.avif",
    info: "Thingsmobile API is a platform that provides APIs for IoT and smart device management, enabling developers to build and integrate IoT solutions easily.",
    url: "https://www.thingsmobile.com/",
  }),
  flexposureProject({
    title: "Interparking",
    image: "interparking.avif",
    info: "Interparking is a European parking management company that operates and manages parking facilities in various cities across Europe, providing efficient and secure parking solutions.",
    url: "https://www.interparking.com/",
  }),

  nurtioProject({
    title: "Ambius UK",
    image: "ambius.avif",
    info: "Ambius UK is a company that specializes in providing interior landscaping and plant care services for commercial spaces, enhancing indoor environments with greenery and improving air quality.",
    url: "https://www.ambius.co.uk/",
  }),
  flexposureProject({
    title: "Gaasperdammertunnel A9 IXAS",
    image: "a9.avif",
    info: "The Gaasperdammertunnel A9 IXAS is a major road tunnel in the Netherlands, part of the A9 motorway. It plays a crucial role in facilitating traffic flow and reducing congestion in the region.",
    url: "https://www.ixas.nl/gaasperdammertunnel/",
  }),
  privaProject({
    title: "Hexo",
    image: "hexo.avif",
    info: "HEXO is an adult-use cannabis brand based in Gatineau, Quebec. We focus on innovative, smoke-free and traditional cannabis products.",
    url: "https://originalfarm.com/licensed-producers/hexo/",
  }),
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
