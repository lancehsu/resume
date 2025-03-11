import type { SkillLevel } from '@/types';
import { FC } from 'react';

const SKILL_LEVEL_MAP: Record<SkillLevel, string> = {
  proficiency: 'Proficient in',
  familiar: 'Familiar with',
  knowledge: 'Knowledge of',
} as const;

interface SkillListProps {
  level: SkillLevel;
  skills: string[];
}
const SkillList: FC<SkillListProps> = ({ level, skills }) => (
  <div className="flex-1">
    <div className="font-medium">{SKILL_LEVEL_MAP[level]}</div>
    <div className="my-0.5 h-0.5 bg-gray-400 dark:bg-gray-200" />
    <div className="flex flex-wrap">
      {skills.map((skill, i) => (
        <div
          key={i}
          className="rounded-full bg-cyan-500 m-0.5 px-2 py-1 text-center w-fit text-slate-50"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
);

export default SkillList;
