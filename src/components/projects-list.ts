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

export type { Project };

export const projects: Project[] = [
  flexposureProject({
    title: "ICC",
    image: "icc.avif",
    info: "The International Criminal Court (ICC) is an intergovernmental organization and international tribunal seated in The Hague, Netherlands. It is the first and only permanent international court with jurisdiction to prosecute individuals for the international crimes of genocide, crimes against humanity, war crimes, and the crime of aggression. ",
    url: "https://www.icc-cpi.int/",
    tags: [
      "no green in logo",
      "(partially) underground",
    ],
  }),
  flexposureProject({
    title: "QPark",
    image: "qpark.avif",
    info: "Q-Park is an operator of parking garages in Belgium, Denmark, Germany, France, Ireland, the Netherlands, and the United Kingdom. Q-Park is the number two on the European parking market.[3] In total Q-Park controls 800,000 parking spaces on more than 3,500 locations.",
    url: "https://www.q-park.com/",
    tags: [
      "involves cars",
      "no green in logo",
      "(partially) underground",
    ],
  }),
  nurtioProject({
    title: "Zuidkoop",
    image: "zuidkoop.avif",
    info: " ",
    url: "https://zuidkoop.nl/zuidkoop#natural",
    tags: [
      "no green in logo",
    ],
  }),
  privaProject({
    title: "Mucci Farms",
    image: "mucci.avif",
    info: "Mucci Farms is a Canadian greenhouse grower and distributor of fresh produce, specializing in tomatoes, cucumbers, and peppers. They are known for their commitment to sustainable farming practices and high-quality produce.",
    url: "https://www.muccifarms.com/",
    tags: [
      "not in Netherlands",
    ],
  }),
  flexposureProject({
    title: "Eurojust",
    image: "eurojust.avif",
    info: "Eurojust is the European Union's agency for criminal justice cooperation, facilitating coordination between national judicial authorities in cross-border cases. It aims to improve the effectiveness of investigations and prosecutions in serious cross-border crime.",
    url: "https://eurojust.europa.eu/",
    tags: [
      "no green in logo",
    ],
  }),
  nurtioProject({
    title: "Plant Solutions",
    image: "plantsolutions.avif",
    info: "Plant Solutions is a company specializing in providing plant care solutions and services, including plant design, maintenance, and consultation for both residential and commercial spaces.",
    url: "https://plantsolutions.com/",
    tags: [
      "not in Netherlands",
    ],
  }),
  flexposureProject({
    title: "Ketheltunnel A4",
    image: "a4.avif",
    info: "The Ketheltunnel A4 is a major road tunnel in the Netherlands, part of the A4 motorway. It plays a crucial role in facilitating traffic flow and reducing congestion in the region.",
    url: "https://www.rijkswaterstaat.nl/wegen/a4-ketheltunnel",
    tags: [      
      "involves cars",
      "(partially) underground",
    ],
  }),
  hobbyProject({
    title: "Satisfactory AWS Server",
    image: "satisfactory.avif",
    info: "Manages a Satisfactory dedicated AWS server through a VueJS page.",
    url: "https://github.com/denxorz/satisfactory-server-aws/",
    tags: ["no green in logo", "with Vuejs", "on AWS Cloud", "does not use dotnet C#"],
  }),
  nurtioProject({
    title: "Universal Floral",
    image: "uf.avif",
    info: "Universal Floral is a company that specializes in providing floral products and services, including wholesale flowers, floral design, and event decoration.",
    url: "https://universalfloral.com/",
    tags: [
      "not in Netherlands",
    ],
  }),
  siouxProject({
    title: "Metrohm Autolab - VIONIC powered by INTELLO",
    image: "metrohm.avif",
    info: "Metrohm Autolab is a company that specializes in electrochemical instrumentation and software solutions. VIONIC is their advanced electrochemical workstation powered by INTELLO technology, designed for high-performance research and development.",
    url: "https://www.metrohm-autolab.com/",
    tags: ["communicates with SignalR"],
  }),
  siquraProject({
    title: "ASFinAG",
    image: "asfinag.avif",
    info: "ASFinAG is the Austrian motorway and expressway operator, responsible for the construction, maintenance, and operation of Austria's road network. They focus on ensuring safe and efficient transportation across the country.",
    url: "https://www.asfinag.at/",
    tags: [
      "involves cars",
      "no green in logo",
      "(partially) underground",
      "not in Netherlands",
    ],
  }),
  obgProject({
    title: "First Floral Company",
    image: "firstfloral.avif",
    info: "First Floral Company is a Ukranian provider of floral products and services, specializing in fresh flowers, arrangements, and event decoration.",
    url: "https://www.firstfloral.com.ua/",
    tags: [
      "not in Netherlands",
    ],
  }),
  hobbyProject({
    title: "Open Plantbook API",
    image: "plantbook.avif",
    info: "Open Plantbook API is a project that provides an open API for accessing plant care data and resources, enabling developers to create applications and services related to plant care and maintenance.",
    url: "https://open.plantbook.io/",
    tags: ["managing plants", "with dotnet C#", "not in Netherlands"],
  }),
  privaProject({
    title: "Intergrow Greenhouses",
    image: "intergrow.avif",
    info: "Intergrow Greenhouses is a leading greenhouse grower in the United States, specializing in high-quality tomatoes and other produce. They focus on sustainable practices and innovative growing techniques.",
    url: "https://www.intergrowgreenhouses.com/",
    tags: [      
      "not in Netherlands",
    ],
  }),
  nurtioProject({
    title: "Växtvård",
    image: "vaxtvard.avif",
    info: "Växtvård is a Swedish company specializing in plant care and maintenance services for both residential and commercial clients.",
    url: "https://vaxtvard.se/",
    tags: [
           "not in Netherlands",
    ],
  }),
  siquraProject({
    title: "RATP",
    image: "ratp.avif",
    info: "RATP (Régie Autonome des Transports Parisiens) is the public transport operator in Paris, France. It manages the Paris Métro, buses, trams, and RER trains, providing comprehensive transportation services in the Île-de-France region.",
    url: "https://www.ratp.fr/",
    tags: [
      "(partially) underground",
      "not in Netherlands",
    ],
  }),
  flexposureProject({
    title: "Rabobank",
    image: "rabobank.avif",
    info: "Rabobank is a Dutch multinational banking and financial services company, known for its cooperative banking model. It provides a wide range of financial services, including retail banking, investment banking, and asset management.",
    url: "https://www.rabobank.com/",
    tags: [
           "no green in logo",
    ],
  }),
  obgProject({
    title: "Leaflike",
    image: "leaflike.avif",
    info: "Leaflike is a company that specializes in providing plant care solutions and services, including plant design, maintenance, and consultation for both residential and commercial spaces.",
    url: "https://www.leaflike.co.uk/",
    tags: [
      "not in Netherlands",
    ],
  }),
  privaProject({
    title: "Green Empire Farms",
    image: "greenempire.avif",
    info: "Mastronardi Green Empire Farms is a greenhouse grower in the United States, specializing in high-quality tomatoes and other produce. They focus on sustainable practices and innovative growing techniques.",
    url: "https://www.sunsetgrown.com/",
    tags: [
      "not in Netherlands",
    ],
  }),
  siouxProject({
    title: "Avantium",
    image: "avantium.avif",
    info: "Avantium is a Dutch renewable chemistry company that develops and commercializes advanced technologies for the production of renewable chemicals and materials, focusing on sustainability and circular economy.",
    url: "https://www.avantium.com/",
    tags: [ "no green in logo", "on premises"],
  }),
  supershiftProject({
    title: "Landal",
    image: "landal.avif",
    info: "Landal GreenParks is a Dutch company that operates holiday parks in the Netherlands, Germany, Belgium, Austria, Switzerland, and the Czech Republic. They offer a range of accommodations and activities in natural settings.",
    url: "https://www.landal.com/",
    tags: [],
  }),
  flexposureProject({
    title: "Arrestantencomplex Borne",
    image: "borne.avif",
    info: "Arrestantencomplex Borne is a detention facility in the Netherlands, designed to hold individuals awaiting trial or serving short sentences. It focuses on security and rehabilitation.",
    url: "https://deriddersafeandsecure.com/klantencases/arrestantencomplex-borne/",
    tags: [
      "no green in logo",
    ],
  }),
  supershiftProject({
    title: "Micromedia",
    image: "micromedia.avif",
    info: "Micromedia is a company that provides digital media solutions. Their software is the leading platform in the Netherlands for publishers and retials to sell (CD) keys and prepaid card for software.",
    url: "https://www.micromedia.com/",
    tags: [      
      "no green in logo",
    ],
  }),
  nurtioProject({
    title: "Leaf Factory",
    image: "leaf.avif",
    info: "Leaf Factory is a company that specializes in creating innovative plant care solutions and services, focusing on sustainability and enhancing indoor environments with greenery.",
    url: "https://www.leaffactory.nl/",
    tags: [
      "no green in logo",
    ],
  }),
  flexposureProject({
    title: "APCOA",
    image: "apcoa.avif",
    info: "APCOA is a leading parking management company in Europe, providing parking solutions and services across various sectors, including airports, shopping centers, and urban areas.",
    url: "https://www.apcoa.com/",
    tags: [     
      "involves cars",
      "no green in logo",     
      "(partially) underground",
    ],
  }),
  privaProject({
    title: "Nature Fresh Farms",
    image: "naturefresh.avif",
    info: "Nature Fresh Farms is a Canadian greenhouse grower and distributor of fresh produce, specializing in tomatoes, cucumbers, and peppers. They are known for their commitment to sustainable farming practices and high-quality produce.",
    url: "https://www.naturefreshfarms.com/",
    tags: [     
      "not in Netherlands",
    ],
  }),
  flexposureProject({
    title: "SEIN",
    image: "sein.avif",
    info: "SEIN is a Dutch organization that provides specialized care and support for individuals with epilepsy.",
    url: "https://www.sein.nl/",
    tags: [
      "no green in logo",
    ],
  }),
  privaProject({
    title: "SK Roses",
    image: "skroses.avif",
    info: "SK Roses is a leading rose grower in the Netherlands, known for its high-quality roses and innovative cultivation techniques. They supply roses to florists and wholesalers worldwide.",
    url: "https://www.skroses.nl/",
    tags: [
      "no green in logo",
    ],
  }),
  nurtioProject({
    title: "Bloom & Flourish",
    image: "bloom.avif",
    info: "Bloom & Flourish is a company that specializes in providing plant care solutions and services, including plant design, maintenance, and consultation for both residential and commercial spaces.",
    url: "https://bloomandflourishco.com/",
    tags: [
      "not in Netherlands",
    ],
  }),
  flexposureProject({
    title: "Velsertunnel A22",
    image: "velsertunnel.avif",
    info: "The Velsertunnel A22 is a major road tunnel in the Netherlands, part of the A22 motorway. It plays a crucial role in facilitating traffic flow and reducing congestion in the region.",
    url: "https://www.rijkswaterstaat.nl/wegen/a22-velsertunnel",
    tags: [
      "involves cars",
      "no green in logo",
      "(partially) underground",
    ],
  }),
  nurtioProject({
    title: "Donker Groep",
    image: "donker.avif",
    info: "Donker Groep is a Dutch company specializing in interior design and landscaping, providing innovative solutions for both residential and commercial spaces.",
    url: "https://donkergroep.com/nl/donker-interieur/",
    tags: [
      "no green in logo",
    ],
  }),
  supershiftProject({
    title: "Mission:Control",
    image: "mc.svg",
    info: "Mission:Control is a platform that provides tools and services for managing and optimizing the operations, focusing on efficiency and productivity for the game industry.",
    url: "https://www.missioncontrol.io/",
    tags: [
      "no green in logo",
    ],
  }),
  siquraProject({
    title: "Highway Taiwan",
    image: "taiwan.avif",
    info: "Highway Taiwan is a project focused on improving and maintaining the highway infrastructure in Taiwan, ensuring safe and efficient transportation across the island.",
    url: "https://www.thb.gov.tw/ENG/index.aspx",
    tags: [
      "involves cars",
      "no green in logo",
      "(partially) underground",
      "not in Netherlands",
    ],
  }),
  hobbyProject({
    title: "Thingsmobile API",
    image: "tm.avif",
    info: "Thingsmobile is a platform that provides simcards for IoT and smart device management, enabling developers to build and integrate IoT solutions easily.",
    url: "https://www.thingsmobile.com/",
    tags: ["no green in logo", "with dotnet C#", "not in Netherlands"],
  }),
  flexposureProject({
    title: "Interparking",
    image: "interparking.avif",
    info: "Interparking is a European parking management company that operates and manages parking facilities in various cities across Europe, providing efficient and secure parking solutions.",
    url: "https://www.interparking.com/",
    tags: [
      "involves cars",
      "no green in logo",
      "(partially) underground",
    ],
  }),
  nurtioProject({
    title: "Ambius UK",
    image: "ambius.avif",
    info: "Ambius UK is a company that specializes in providing interior landscaping and plant care services for commercial spaces, enhancing indoor environments with greenery and improving air quality.",
    url: "https://www.ambius.co.uk/",
    tags: [
      "not in Netherlands",
    ],
  }),
  flexposureProject({
    title: "Gaasperdammertunnel A9 IXAS",
    image: "a9.avif",
    info: "The Gaasperdammertunnel A9 IXAS is a major road tunnel in the Netherlands, part of the A9 motorway. It plays a crucial role in facilitating traffic flow and reducing congestion in the region.",
    url: "https://www.ixas.nl/gaasperdammertunnel/",
    tags: [
      "involves cars",
      "no green in logo",
      "(partially) underground",
    ],
  }),
  privaProject({
    title: "Hexo",
    image: "hexo.avif",
    info: "HEXO is an adult-use cannabis brand based in Gatineau, Quebec. We focus on innovative, smoke-free and traditional cannabis products.",
    url: "https://originalfarm.com/licensed-producers/hexo/",
    tags: [
      "no green in logo",
      "not in Netherlands",
    ],
  }),
  siouxProject({
    title: "BESI",
    image: "besi.avif",
    info: "BE Semiconductor Industries N.V. (BESI) is a Dutch company that designs and manufactures equipment for the semiconductor industry, specializing in advanced packaging and assembly solutions.",
    url: "https://www.besi.com/",
    tags: [],
  }),
];