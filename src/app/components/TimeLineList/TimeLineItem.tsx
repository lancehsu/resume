import React, { FC } from 'react';
import type { ExperienceInfo } from '@/types';
import InfoContent from './InfoContent';
import { CgShapeCircle } from 'react-icons/cg';

interface TimeLineItemProps {
  title: string;
  info: ExperienceInfo;
}
const TimeLineItem: FC<TimeLineItemProps> = ({ title, info }) => (
  <div>
    <div className="flex justify-between gap-8">
      <div className="flex items-center gap-0.5">
        <CgShapeCircle />
        <div className="font-semibold text-sm lg:text-base">
          {title}, {info.location}{info.position && ` - ${info.position}`}
        </div>
      </div>
      <div className="text-xs lg:text-base">
        {info.from} - {info.to}
      </div>
    </div>
    <div className="ml-2 text-sm lg:text-base">
      <div>{info.degree}</div>
      {info.content?.map((item, i) => (
        <InfoContent
          key={i}
          title={item.title}
          url={item.url}
          details={item.details}
        />
      ))}
    </div>
  </div>
);

export default TimeLineItem;
