export type Project = {
  employer: string;
  title: string;
  image: string;
  cols?: number;
  big?: boolean;
  children?: Project[];
  child?: boolean;
  subtitle?: string;
};

// Factory functions for each employer
export function flexposureProject(data: Omit<Project, 'employer' | 'subtitle'>): Project {
  return { ...data, employer: 'flexposure', subtitle: 'TKH Security Flexposure - FlinQ' };
}
export function siquraProject(data: Omit<Project, 'employer' | 'subtitle'>): Project {
  return { ...data, employer: 'siqura', subtitle: 'TKH Security - Siqura Network Recorder' };
}
export function supershiftProject(data: Omit<Project, 'employer' | 'subtitle'>): Project {
  return { ...data, employer: 'supershift', subtitle: 'Supershift' };
}
export function nurtioProject(data: Omit<Project, 'employer' | 'subtitle'>): Project {
  return { ...data, employer: 'nurtio', subtitle: 'Nurtio Protect' };
}
export function privaProject(data: Omit<Project, 'employer' | 'subtitle'>): Project {
  return { ...data, employer: 'priva', subtitle: 'Priva FS Performance' };
}
export function hobbyProject(data: Omit<Project, 'employer' | 'subtitle'>): Project {
  return { ...data, employer: 'hobby', subtitle: 'Opensource contributions' };
}
export function obgProject(data: Omit<Project, 'employer' | 'subtitle'>): Project {
  return { ...data, employer: 'obg', subtitle: 'One Big Green' };
}
export function siouxProject(data: Omit<Project, 'employer' | 'subtitle'>): Project {
  return { ...data, employer: 'sioux', subtitle: 'Sioux' };
}
