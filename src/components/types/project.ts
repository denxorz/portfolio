export type Project = {
  title: string;
  image: string;
  cols?: number;
  big?: boolean;
  children?: Project[];
  child?: boolean;
  subtitle?: string;
  info?: string;
  url?: string;
  productInfo?: string;
  tags: string[];
};

// Factory functions for each employer
export function flexposureProject(data: Omit<Project, 'subtitle'>): Project {
  return { ...data, subtitle: 'TKH Security Flexposure - FlinQ', productInfo: 'FlinQ is a control room system.' };
}
export function siquraProject(data: Omit<Project, 'subtitle'>): Project {
  return { ...data, subtitle: 'TKH Security - Siqura Network Recorder', productInfo: 'Siqura Network Recorder is high performance lip-sync video and audio recoding and playback system.' };
}
export function supershiftProject(data: Omit<Project, 'subtitle'>): Project {
  return { ...data, subtitle: 'Supershift', productInfo: 'Supershift aims at solving complex digital business problems.' };
}
export function nurtioProject(data: Omit<Project, 'subtitle'>): Project {
  return { ...data, subtitle: 'Nurtio Protect', productInfo: 'Nurtio Protect is a plant sensor SaaS platform that aims at optimizing the maintenance interval of plants. It aims at interior landscaping, for example in offices.' };
}
export function privaProject(data: Omit<Project, 'subtitle'>): Project {
  return { ...data, subtitle: 'Priva FS Performance', productInfo: 'Priva FS Performance is a product for the horticulture greenhouse industry. It combines the performance of the employees with the performance of the crops and manages packhouse opterations.' };
}
export function hobbyProject(data: Omit<Project, 'subtitle'>): Project {
  return { ...data, subtitle: 'Opensource contributions', productInfo: 'My contributions to opensource projects.' };
}
export function obgProject(data: Omit<Project, 'subtitle'>): Project {
  return { ...data, subtitle: 'One Big Green', productInfo: 'One Big Green is a SaaS platform for interior landscaping that manages the entire portfolio, contacts, budgets, time management and inventory. ' };
}
export function siouxProject(data: Omit<Project, 'subtitle'>): Project {
  return { ...data, subtitle: 'Sioux', productInfo: 'Sioux Technologies is a strategic high-tech solutions provider that develops, innovates and assembles complex high-tech systems. ' };
}
