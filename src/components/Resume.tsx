import React, { FC } from 'react';
import { Container } from '@material-ui/core';

import Profile from './Profile';
import Skills from './Skills';
import WorkExperienceList from './WorkExperienceList';
import EducationList from './EducationList';
import ProjectList from './ProjectList';

const Resume: FC = () => {
  return (
    <Container className="container" maxWidth="lg" style={{ margin: 'auto' }}>
      <Profile />
      <Skills />
      <WorkExperienceList />
      <EducationList />
      <ProjectList />
    </Container>
  );
};

export default Resume;
