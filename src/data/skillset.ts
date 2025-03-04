import AngularIcon from '@/components/icons/AngularIcon.astro'
import AstroDarkIcon from '@/components/icons/AstroDarkIcon.astro'
import AstroLightIcon from '@/components/icons/AstroLightIcon.astro'
import AwsIcon from '@/components/icons/AwsIcon.astro'
import BookIcon from '@/components/icons/BookIcon.astro'
import CloudIcon from '@/components/icons/CloudIcon.astro'
import CssIcon from '@/components/icons/CssIcon.astro'
import DockerIcon from '@/components/icons/DockerIcon.astro'
import ElectronIcon from '@/components/icons/ElectronIcon.astro'
import ExpressIcon from '@/components/icons/ExpressIcon.astro'
import FirebaseIcon from '@/components/icons/FirebaseIcon.astro'
import GithubLogoIcon from '@/components/icons/GithubLogoIcon.astro'
import GitIcon from '@/components/icons/GitIcon.astro'
import GoIcon from '@/components/icons/GoIcon.astro'
import GraphqlIcon from '@/components/icons/GraphqlIcon.astro'
import HtmlIcon from '@/components/icons/HtmlIcon.astro'
import JavaIcon from '@/components/icons/JavaIcon.astro'
import JavascriptIcon from '@/components/icons/JavascriptIcon.astro'
import JestIcon from '@/components/icons/JestIcon.astro'
import MongodbIcon from '@/components/icons/MongodbIcon.astro'
import MonitorIcon from '@/components/icons/MonitorIcon.astro'
import MysqlIcon from '@/components/icons/MysqlIcon.astro'
import NestjsIcon from '@/components/icons/NestjsIcon.astro'
import NextjsIcon from '@/components/icons/NextjsIcon.astro'
import NodejsIcon from '@/components/icons/NodejsIcon.astro'
import PostgresqlIcon from '@/components/icons/PostgresqlIcon.astro'
import ReactIcon from '@/components/icons/ReactIcon.astro'
import RedisIcon from '@/components/icons/RedisIcon.astro'
import ReduxIcon from '@/components/icons/ReduxIcon.astro'
import SassIcon from '@/components/icons/SassIcon.astro'
import ServerIcon from '@/components/icons/ServerIcon.astro'
import SocketioIcon from '@/components/icons/SocketioIcon.astro'
import SpringIcon from '@/components/icons/SpringIcon.astro'
import TailwindIcon from '@/components/icons/TailwindIcon.astro'
import TypeScriptIcon from '@/components/icons/TypeScriptIcon.astro'
import VitestIcon from '@/components/icons/VitestIcon.astro'
import type { SkillsetDetails } from '@/types/types'

const languages: SkillsetDetails = {
  name: 'Languages',
  icon: BookIcon,
  items: [
    {
      name: 'JavaScript',
      className: 'rounded',
      icon: JavascriptIcon
    },
    {
      name: 'TypeScript',
      icon: TypeScriptIcon
    },
    {
      name: 'Java',
      icon: JavaIcon
    },
    {
      name: 'Golang',
      icon: GoIcon,
      className: 'fill-[#00acd7]'
    }
  ]
}

const frontend: SkillsetDetails = {
  name: 'Frontend',
  icon: MonitorIcon,
  items: [
    {
      name: 'HTML',
      icon: HtmlIcon
    },
    {
      name: 'CSS',
      icon: CssIcon
    },
    {
      name: 'Sass',
      icon: SassIcon
    },
    {
      name: 'React',
      icon: ReactIcon
    },
    {
      name: 'Next.js',
      icon: NextjsIcon
    },
    {
      name: 'Redux',
      icon: ReduxIcon
    },
    {
      name: 'Electron',
      icon: ElectronIcon
    },
    {
      name: 'AstroJS',
      icon: AstroDarkIcon,
      darkIcon: AstroLightIcon
    },
    {
      name: 'Angular',
      icon: AngularIcon
    },
    {
      name: 'Tailwind',
      icon: TailwindIcon
    }
  ]
}

const backend: SkillsetDetails = {
  name: 'Backend',
  icon: ServerIcon,
  items: [
    {
      name: 'NodeJS',
      icon: NodejsIcon
    },
    {
      name: 'ExpressJS',
      icon: ExpressIcon,
      className: 'invert dark:invert-0'
    },
    {
      name: 'NestJS',
      icon: NestjsIcon
    },
    {
      name: 'Spring',
      icon: SpringIcon
    },
    {
      name: 'MongoDB',
      icon: MongodbIcon
    },
    {
      name: 'PostgreSQL',
      icon: PostgresqlIcon
    },
    {
      name: 'MySQL',
      icon: MysqlIcon
    },
    {
      name: 'Redis',
      icon: RedisIcon
    },
    {
      name: 'Firebase',
      icon: FirebaseIcon
    },
    {
      name: 'Socket.io',
      icon: SocketioIcon,
      className: 'fill-white invert dark:invert-0'
    },
    {
      name: 'GraphQL',
      icon: GraphqlIcon
    }
  ]
}

const devops: SkillsetDetails = {
  name: 'Devops',
  icon: CloudIcon,
  items: [
    {
      name: 'Docker',
      icon: DockerIcon
    },
    {
      name: 'AWS',
      icon: AwsIcon
    },
    {
      name: 'Git',
      icon: GitIcon
    },
    {
      name: 'Github',
      icon: GithubLogoIcon,
      className: 'fill-white invert dark:invert-0'
    },
    {
      name: 'Jest',
      icon: JestIcon
    },
    {
      name: 'Vitest',
      icon: VitestIcon
    }
  ]
}

export const skillset: SkillsetDetails[] = [
  languages,
  frontend,
  backend,
  devops
]
