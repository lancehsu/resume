import {
  ResumeData,
  ProfileData,
  SkillSetData,
  ExperienceData,
  Company,
  College,
  ProjectData,
} from './types';

const PROFILE: ProfileData = {
  name: 'Kung-Ling Hsu',
  image: './profile.png',
  summary:
    'A detail-oriented software engineer with 5+ years of experience in web and decentralized applications. Proficient in React, NextJS, TypeScript, GraphQL, and Zustand, with a track record of delivering efficient and scalable solutions and enhancing user engagement. Skilled in collaborating with cross-functional teams to drive project success.',
  socialLinks: [
    {
      name: 'GitHub',
      link: 'https://github.com/lancehsu',
    },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/klhsu' },
    { name: 'Email', link: 'lancehsu12@gmail.com' },
  ],
  target: 'Front-end/Full-stack engineer',
} as const;

const SKILL_SET: SkillSetData = {
  proficiency: [
    'HTML/CSS/JavaScript',
    'TypeScript',
    'React',
    'GraphQL',
    'Zustand',
    'NextJS',
    'EthersJS',
  ],
  familiar: [
    'ExpressJS',
    'MongoDB',
    'SQL',
    'Redux',
    'KonvaJS',
    'BabylonJS',
    'Docker',
  ],
  knowledge: [
    'Java',
    'Python',
    'Redis',
    'machine learning',
    'image processing',
    'computer graphic',
  ],
};

const WORK_EXPERIENCE: ExperienceData<Company> = {
  cronos: {
    position: 'Software Developer',
    location: 'Taipei, Taiwan',
    from: 'Nov 2022',
    to: 'Mar 2025',
    content: [
      {
        details: [
          {
            title: 'Integrated reward allocation mechanism to incentivize user onboarding to the zkEVM chain',
          },
          {
            title:
              'Developed a lossless lottery dapp using React, TypeScript, NextJS, and EthersJS, achieving 1.35M USD TVL',
          },
          {
            title:
              'Added NFT staking feature and optimized web performance, leading to a increase in user engagement and satisfaction on the web3 lending platform',
          },
          {
            title:
              'Developed token staking feature on NFT marketplace which achieved TVL of USD 745K',
          },
        ],
      },
    ],
  },
  cdc: {
    position: 'Software Developer',
    location: 'Taipei, Taiwan',
    from: 'Mar 2022',
    to: 'Nov 2022',
    content: [
      {
        details: [
          {
            title:
              'Developed decentralized borrowing protocol using React, NextJS TypeScript, and Web3JS',
          },
          {
            title:
              'Developed a liquid staking protocol which achieved a TVL of USD 13M',
          },
        ],
      },
    ],
  },
  appier: {
    position: 'Software Engineer',
    location: 'Taipei, Taiwan',
    from: 'Oct 2020',
    to: 'Mar 2022',
    content: [
      {
        // title: 'Building data science platform',
        details: [
          {
            title:
              'Developed a B2B web application using React, TypeScript, PostCSS, GraphQL, and MongoDB, enhancing system performance and user interface, resulting in improved customer satisfaction',
          },
          {
            title:
              'Collaborated with UI/UX designers, PM, and back-end team to clarify requirements, streamlining the development process and ensuring alignment across teams',
          },
          {
            title:
              'Planned and managed sprint tasks with the front-end team, ensuring timely delivery and improving team productivity through effective task management and coordination',
          },
        ],
      },
    ],
  },
  linker: {
    position: 'Software Engineer',
    location: 'Taipei, Taiwan',
    from: 'Feb 2019',
    to: 'Aug 2020',
    content: [
      {
        // title: 'Building data labeling platform',
        details: [
          {
            title:
              'Developed a 2D image labeling system using TypeScript, ReactJS, Apollo GraphQL, NextJS, and KonvaJS, improving annotation accuracy and efficiency',
          },
          {
            title:
              'Developed a medical image labeling system for CT and MRI images, enhancing the precision and speed of medical annotations',
          },
          {
            title:
              'Developed a LiDAR point cloud labeling system using BabylonJS, enabling more accurate and efficient 3D data labeling',
          },
          {
            title:
              'Developed a Microsoft Vision on Edge solution using TypeScript, ReactJS, Redux, Redux-Thunk, KonvaJS, and Fluent UI, improving edge computing capabilities for image processing',
            url: 'https://github.com/Azure-Samples/azure-intelligent-edge-patterns',
          },
        ],
      },
    ],
  },
};

const EDUCATION: ExperienceData<College> = {
  ntu: {
    from: 'Sep 2014',
    to: 'Jun 2017',
    location: 'Taipei, Taiwan',
    degree: 'Master of Engineering, Bio-Industrial Mechatronics Engineering',
    // content: [
    // {
    //   title: 'Conference',
    //   details: [
    //     {
    //       title:
    //         'International Symposium on Machinery and Mechatronics for Agriculture and Bio-systems Engineering (ISMAB) 2016',
    //     },
    //     { title: 'Conference on Agricultural Machinery and Bio-Mechatronics Engineering 2016' },
    //   ],
    // },
    // {
    //   title: 'Journal',
    //   details: [
    //     {
    //       title:
    //         'Hsu, H.-C., Hsu, K.-L., Chan, C.-Y., Wang, C.-N., & Kuo, Y.-F., Quantifying colour and spot characteristics for the ventral petals in Sinningia speciosa, Biosystems Engineering, 167, 40-50.',
    //       url: 'https://www.sciencedirect.com/science/article/abs/pii/S1537511017308218',
    //     },
    //   ],
    // },
    // ],
  },
  nchu: {
    location: 'Taichung, Taiwan',
    from: 'Sep 2009',
    to: 'Jun 2014',
    degree: 'Bachelor of Engineering, Chemical Engineering',
  },
} as const;

const PROJECT: ProjectData = {
  azure: {
    image: './Azure-Sample.png',
    githubLink:
      'https://github.com/Azure-Samples/azure-intelligent-edge-patterns/tree/master/factory-ai-vision',
    content:
      'A sample showing how to deploy a Custom Vision model to Azure IoT edge device and get Machine learning solution up and running in a single day.',
  },
} as const;

export const EXPERIENCE_NAME_MAP = {
  ntu: 'National Taiwan University',
  nchu: 'National Chung Hsing University',
  linker: 'Linker Networks Inc.',
  appier: 'Appier Inc.',
  cdc: 'Crypto.com',
  cronos: 'Cronos Labs',
} as const;

export const PROJECT_NAME_MAP = {
  azure: 'Factory AI Vision',
} as const;

const DATA: ResumeData = {
  profile: PROFILE,
  skillSet: SKILL_SET,
  workExperience: WORK_EXPERIENCE,
  education: EDUCATION,
  project: PROJECT,
} as const;

export default DATA;
