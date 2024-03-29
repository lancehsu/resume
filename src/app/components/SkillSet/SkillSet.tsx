import React, { FC } from 'react';
import SkillList from './SkillList';
import type { SkillLevel, SkillSetData } from '@/types';
import Title from '../Title';

interface SkillSetProps {
  skillSet: SkillSetData;
}
const SkillSet: FC<SkillSetProps> = ({ skillSet }) => (
  <div>
    <Title>Skills</Title>
    <div className="flex lg:gap-1 gap-3 flex-col lg:flex-row">
      {Object.entries(skillSet).map(([skillType, skills], i) => (
        <SkillList key={i} level={skillType as SkillLevel} skills={skills} />
      ))}
    </div>
  </div>
);

export default SkillSet;
