export enum Companies {
  linker = 'Linker Networks Inc.',
}

export enum Colleges {
  NTU = 'National Taiwan University',
  NCHU = 'National Chung Hsing University',
}

export enum ProjectNames {
  Azure = 'Factory AI Vision',
}

export type ResumeContent = {
  profile: Profile;
  skills: Skills;
  workExperience: WorkExperience;
  education: Education;
  project: Project;
};

export type Profile = {
  name: string;
  image: string;
  mail: string;
  github: string;
  linkedIn: string;
  summary: string;
  target: string;
};

export type Skills = {
  proficiency: string[];
  familiar: string[];
  knowledge: string[];
};

type Content = { name: string; url?: string; details?: { name: string; url?: string }[] };

export type WorkExperienceInfo = {
  title: string;
  from: string;
  to: string;
  content: Content[];
};

export type WorkExperience = {
  [company in Companies]: WorkExperienceInfo;
};

export type EducationInfo = {
  from: string;
  to: string;
  degree: string;
  content?: Content[];
};

export type Education = {
  [college in Colleges]: EducationInfo;
};

export type ProjectInfo = {
  image: string;
  content: string;
  githubLink: string;
};
export type Project = {
  [project in ProjectNames]: ProjectInfo;
};
