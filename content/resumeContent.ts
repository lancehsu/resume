import {
  ResumeContent,
  Education,
  Profile,
  Skills,
  WorkExperience,
  Project,
  Companies,
  Colleges,
  ProjectNames,
} from './resumeContentType';

export const profile: Profile = {
  name: 'Kung-Ling Hsu',
  image: '/profile.png',
  mail: 'lancehsu12@gmail.com',
  summary:
    'A detail-oriented and dependable software engineer seeking a position to offer expertise in HTML/CSS/JavaScript, React.js, Redux, Apollo GraphQL, Next.js to develop web application.',
  github: 'https://github.com/lancehsu',
  linkedIn: 'https://www.linkedin.com/in/klhsu/',
  target: 'Front-end/Full-stack engineer',
};

export const skills: Skills = {
  proficiency: [
    'HTML/CSS/JavaScript',
    'TypeScript',
    'React',
    'React hooks',
    'Apollo GraphQL',
    'Redux',
    'Redux-Thunk',
    'Next.js',
    'Babylon.js',
    'Konva.js',
    'Material UI',
    'Fluent UI',
    'i18next',
    'Git',
    'Github',
    'VSCode',
  ],
  familiar: ['Gatsby.js', 'Express.js', 'MongoDB', 'MATLAB', 'Webpack', 'Heroku', 'Vim'],
  knowledge: [
    'Java',
    'Python',
    'Cpp',
    'SQL',
    'Sentry',
    'Docker',
    'machine learning',
    'image processing',
    'computer graphic',
  ],
};

export const workExperience: WorkExperience = {
  [Companies.linker]: {
    title: 'Software Engineer',
    from: '2019 Feb',
    to: 'Present',
    content: [
      {
        name: 'Building data labeling platform',
        details: [
          {
            name:
              'Developing web application using TypeScript, React.js, Apollo GraphQL, Next.js, & Fluent UI',
          },
          { name: 'Developing 2D image labeling system using canvas 2d library Konva.js' },
          { name: 'Developing medical image labeling system for CT & MRI images labeling' },
          { name: 'Developing LiDAR point cloud labeling system using WebGL framework Babylon.js' },
          { name: 'Communicate with back-end engineers about API design' },
          { name: 'Providing web app internationalization by i18next for global users' },
          {
            name:
              'Communicate with data scientists about UX and APIs for label assistance tools implemented using computer vision and machine learning',
          },
        ],
      },
      {
        name:
          'Developing Microsoft Vision on Edge solution with Typescript, React.js, Redux, Redux-Thunk, Konva.js, & Fluent UI',
        url: 'https://github.com/Azure-Samples/azure-intelligent-edge-patterns',
      },
    ],
  },
};

export const education: Education = {
  [Colleges.NTU]: {
    from: '2014',
    to: '2017',
    degree: 'Master of Engineering, Bio-Industrial Mechatronics Engineering',
    content: [
      {
        name: 'Conference',
        details: [
          {
            name:
              'International Symposium on Machinery and Mechatronics for Agriculture and Bio-systems Engineering (ISMAB) 2016',
          },
          { name: 'Conference on Agricultural Machinery and Bio-Mechatronics Engineering 2016' },
        ],
      },
      {
        name: 'Journal',
        details: [
          {
            name:
              'Hsu, H.-C., Hsu, K.-L., Chan, C.-Y., Wang, C.-N., & Kuo, Y.-F., Quantifying colour and spot characteristics for the ventral petals in Sinningia speciosa, Biosystems Engineering, 167, 40-50.',
            url: 'https://www.sciencedirect.com/science/article/abs/pii/S1537511017308218',
          },
        ],
      },
    ],
  },
  [Colleges.NCHU]: {
    from: '2009',
    to: '2014',
    degree: 'Bachelor of Engineering, Chemical Engineering',
  },
};

export const project: Project = {
  [ProjectNames.Azure]: {
    image: '/projects/Azure-Sample.png',
    githubLink:
      'https://github.com/Azure-Samples/azure-intelligent-edge-patterns/tree/master/factory-ai-vision',
    content:
      'A sample showing how to deploy a Custom Vision model to Azure IoT edge device and get Machine learning solution up and running in a single day.',
  },
};

const resumeContent: ResumeContent = {
  profile,
  skills,
  workExperience,
  education,
  project,
};

export default resumeContent;
