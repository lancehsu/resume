export type Company = 'linker' | 'appier' | 'cdc' | 'cronos';

export type College = 'ntu' | 'nchu';

export type Project = 'azure';

export type ResumeData = {
  profile: ProfileData;
  skillSet: SkillSetData;
  workExperience: ExperienceData<Company>;
  education: ExperienceData<College>;
  project: ProjectData;
};

export type SocialLinkType = 'LinkedIn' | 'GitHub' | 'Email';
export type ProfileData = {
  name: string;
  image: string;
  summary: string;
  target: string;
  socialLinks: ReadonlyArray<{ name: SocialLinkType; link: string }>;
};

export type SkillLevel = 'proficiency' | 'familiar' | 'knowledge';
export type SkillSetData = Record<SkillLevel, string[]>;

export type Detail = { title?: string; url?: string };
export type Content = Detail & { details?: ReadonlyArray<Detail> };

export type ExperienceInfo = {
  location: string;
  from: string;
  to: string;
  position?: string;
  content?: ReadonlyArray<Content>;
  degree?: string;
};

export type ExperienceData<T extends College | Company> = Record<
  T,
  ExperienceInfo
>;

export type ProjectInfo = {
  image: string;
  content: string;
  githubLink: string;
};
export type ProjectData = Record<Project, ProjectInfo>;
