export type Project = {
  employer: string;
  title: string;
  image: string;

  cols?: number;
  big?: boolean;
  children?: Project[];
  child?: boolean;
};
