import {
  Gamepad2,
  Headphones,
  Image,
  LucideIcon,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
  CloudCog
} from 'lucide-react';


export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: number;
  progress: number;
  href?: string;
}

export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: 'Vercel Clone',
    techStack: 'NodeJs, JavaScript, WebSockets, Redis, AWS S3, AWS ECS, Docker, HTTP Reverse Proxy',
    imageUrl: 'vercelprofile.png',
    href: 'https://github.com/akash202k/vercel-clone',
  },
  {
    id: 2,
    title: 'Blog WebApp',
    techStack:
      'Next.js 14, React Hook Form, Next Auth, Zod, React Loader, Typescript, Tailwind CSS',
    imageUrl: 'blog.png',
    href: 'https://github.com/akash202k/blog-app',
  },
  {
    id: 3,
    title: 'Redis as Queue',
    techStack:
      'NodeJs, Express, Redis, Typescript',
    imageUrl: 'redisQ.png',
    href: 'https://github.com/akash202k/redis-Q',
  },
  {
    id: 4,
    title: 'Redis as PubSub',
    techStack: 'Redis, Nodejs, Express, typescript',
    imageUrl: 'redisPS.png',
    href: 'https://github.com/akash202k/redis-PubSub',
  },
];

export const moreProjects = [
  {
    id: 1,
    title: 'AWS Solutions Architect',
    techStack: 'AWS Cloud, IAM, AWS Infra, MOnitoring',
    icon: 'CloudCog',
    href: 'https://www.credly.com/badges/57394c5f-f9b1-4d00-b9d8-1cea8707aab1/public_url',
  },
  {
    id: 2,
    title: 'AWS Certified Devloper Associates ',
    techStack: 'AWS, Devloper',
    icon: 'CloudCog',
    href: 'https://www.credly.com/badges/845ee136-2cea-4a73-a1bf-888d8b2fa088/public_url',
  },
  // {
  //   id: 3,
  //   title: 'File Sharing App',
  //   techStack: 'Node js, Express, Web Sockets, WebRTC, ReactJs',
  //   icon: 'share',
  //   href: 'https://github.com/nwaliaez/filetransfer-webrtc',
  // },

  // {
  //   id: 4,
  //   title: 'Snake Game',
  //   techStack: 'Next.js 13, Tailwind CSS, Typescript',
  //   icon: 'game',
  //   href: 'https://snake-nwaliaez.vercel.app/',
  // },
];

export const frontendCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'HTML, CSS',
    src: '/tech/frontend/htmlcss.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 100,
    href: 'https://github.com/akash202k/Secure-Network-Infra-With-Terraform-aws'
  },
  {
    id: 2,
    title: 'Tailwind',
    src: '/tech/frontend/tailwind.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: 'Javascript, Typescript',
    src: '/tech/frontend/jsts.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 85,
  },
  {
    id: 4,
    title: 'Reactjs',
    src: '/tech/frontend/reactjs.jpg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 5,
    title: 'Nextjs 13',
    src: '/tech/frontend/nextjs13.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
];

export const backendCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'NodeJs',
    src: '/tech/backend/nodejs.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'ExpressJs',
    src: '/tech/backend/express.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: 'DenoJs',
    src: '/tech/backend/denojs.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 60,
  },
  {
    id: 4,
    title: 'Next Auth',
    src: '/tech/backend/nextauth.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 5,
    title: 'PHP',
    src: '/tech/backend/php.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
];

export const databaseCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'MySQL',
    src: '/tech/database/mysql.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: 'MongoDB',
    src: '/tech/database/mongo.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: 'Redis',
    src: '/tech/database/redis.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 4,
    title: 'PostgreSQL',
    src: '/tech/database/postgres.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: 'Elastic Search',
    src: '/tech/database/elasticSearch.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
];

export const devopsCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Docker',
    src: '/tech/devops/docker.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 2,
    title: 'Kubernetes',
    src: '/tech/devops/k8s.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: 'GIT',
    src: '/tech/devops/git.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 4,
    title: 'Jenkins',
    src: '/tech/devops/jenkins.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: 'Terraform',
    src: '/tech/devops/terraform.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 60,
  },
];

export const web3Cards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Infra Using Terraform',
    src: '/tech/devops/terraform.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 100,
    href: 'https://github.com/akash202k/Secure-Network-Infra-With-Terraform-aws'
  },
  {
    id: 2,
    title: 'Terraform-2',
    src: '/tech/devops/terraform.png',
    exp: 'Completed',
    snippetCount: 1128,
    progress: 100,
    href: 'https://github.com/akash202k/freelancing-client-1-assignment-1'
  },
  // {
  //   id: 3,
  //   title: 'Metamask',
  //   src: '/tech/web3/metamask.webp',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 90,
  // },
  {
    id: 4,
    title: 'Infra Migration to K8s',
    src: '/tech/devops/k8s.png',
    exp: 'Completed',
    snippetCount: 1128,
    progress: 100,
  },
  // {
  //   id: 5,
  //   title: 'OpenZeppelin',
  //   src: '/tech/web3/openzeppelin.png',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 70,
  // },
];

export const otherCards: ISectionCardData[] = [

  // {
  //   id: 2,
  //   title: 'Ecommerce WebApp',
  //   src: '/tech/others/ecom.png',
  //   exp: 'todo',
  //   snippetCount: 1128,
  //   progress: 10,
  // },

  {
    id: 4,
    title: 'CKA',
    src: '/tech/devops/k8s.png',
    exp: 'Progressing',
    snippetCount: 1128,
    progress: 95,
  },
  {
    id: 3,
    title: 'Google Cloud',
    src: '/tech/others/gcp.png',
    exp: 'Progressing',
    snippetCount: 1128,
    progress: 40,
  },
  {
    id: 1,
    title: 'Web Scraping',
    src: '/tech/others/webScraping.png',
    exp: 'Progressing',
    snippetCount: 1128,
    progress: 30,
  }
];
