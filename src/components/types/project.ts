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
};

// Factory functions for each employer
export function flexposureProject(data: Omit<Project, 'subtitle'>): Project {
  return { ...data, subtitle: 'TKH Security Flexposure - FlinQ', productInfo: 'FlinQ is a control room system.' };
}
export function siquraProject(data: Omit<Project, 'subtitle'>): Project {
  return { ...data, subtitle: 'TKH Security - Siqura Network Recorder', productInfo: 'Siqura Network Recorder is high performance lip-sync video and audio recoding and playback system.' };
}
export function supershiftProject(data: Omit<Project, 'subtitle'>): Project {
  return { ...data, subtitle: 'Supershift', productInfo: 'Supershift is a shift scheduling system.' };
}
export function nurtioProject(data: Omit<Project, 'subtitle'>): Project {
  return { ...data, subtitle: 'Nurtio Protect', productInfo: 'Nurtio Protect is a protection system.' };
}
export function privaProject(data: Omit<Project, 'subtitle'>): Project {
  return { ...data, subtitle: 'Priva FS Performance', productInfo: 'Priva FS Performance is a performance management system.' };
}
export function hobbyProject(data: Omit<Project, 'subtitle'>): Project {
  return { ...data, subtitle: 'Opensource contributions', productInfo: 'Opensource contributions are contributions to opensource projects.' };
}
export function obgProject(data: Omit<Project, 'subtitle'>): Project {
  return { ...data, subtitle: 'One Big Green', productInfo: 'One Big Green is a green company.' };
}
export function siouxProject(data: Omit<Project, 'subtitle'>): Project {
  return { ...data, subtitle: 'Sioux', productInfo: 'Sioux is a company.' };
}
