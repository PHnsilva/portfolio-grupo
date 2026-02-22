export type ExternalLinks = {
  repo?: string;
  live?: string;
};

export type ProfileLinks = {
  github: string;
  linkedin: string;
  email: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  headline: string;
  about: string[];
  links: ProfileLinks;
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  highlights: string[];
  links: ExternalLinks;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  badge?: string; 
};

export type EducationItem = {
  institution: string;
  course: string;
  period: string;
  details?: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};
