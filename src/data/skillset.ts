import AngularIcon from '@/components/icons/technologies/AngularIcon.astro'
import AstroDarkIcon from '@/components/icons/technologies/AstroDarkIcon.astro'
import AstroLightIcon from '@/components/icons/technologies/AstroLightIcon.astro'
import AwsIcon from '@/components/icons/technologies/AwsIcon.astro'
import CssIcon from '@/components/icons/technologies/CssIcon.astro'
import DockerIcon from '@/components/icons/technologies/DockerIcon.astro'
import ElectronIcon from '@/components/icons/technologies/ElectronIcon.astro'
import ExpressIcon from '@/components/icons/technologies/ExpressIcon.astro'
import FirebaseIcon from '@/components/icons/technologies/FirebaseIcon.astro'
import GithubLogoIcon from '@/components/icons/technologies/GithubLogoIcon.astro'
import GitIcon from '@/components/icons/technologies/GitIcon.astro'
import GoIcon from '@/components/icons/technologies/GoIcon.astro'
import GraphqlIcon from '@/components/icons/technologies/GraphqlIcon.astro'
import HtmlIcon from '@/components/icons/technologies/HtmlIcon.astro'
import JavaIcon from '@/components/icons/technologies/JavaIcon.astro'
import JavascriptIcon from '@/components/icons/technologies/JavascriptIcon.astro'
import JestIcon from '@/components/icons/technologies/JestIcon.astro'
import MongodbIcon from '@/components/icons/technologies/MongodbIcon.astro'
import MysqlIcon from '@/components/icons/technologies/MysqlIcon.astro'
import NestjsIcon from '@/components/icons/technologies/NestjsIcon.astro'
import NextjsIcon from '@/components/icons/technologies/NextjsIcon.astro'
import NodejsIcon from '@/components/icons/technologies/NodejsIcon.astro'
import PostgresqlIcon from '@/components/icons/technologies/PostgresqlIcon.astro'
import ReactIcon from '@/components/icons/technologies/ReactIcon.astro'
import RedisIcon from '@/components/icons/technologies/RedisIcon.astro'
import ReduxIcon from '@/components/icons/technologies/ReduxIcon.astro'
import SassIcon from '@/components/icons/technologies/SassIcon.astro'
import SocketioIcon from '@/components/icons/technologies/SocketioIcon.astro'
import SpringIcon from '@/components/icons/technologies/SpringIcon.astro'
import TailwindIcon from '@/components/icons/technologies/TailwindIcon.astro'
import TypeScriptIcon from '@/components/icons/technologies/TypeScriptIcon.astro'
import VitestIcon from '@/components/icons/technologies/VitestIcon.astro'
import { Book, Monitor, Server, Cloud } from '@lucide/astro'
import type { SkillsetDetails } from '@/types/types'
import OracleIcon from '@/components/icons/technologies/OracleIcon.astro'
import SparkIcon from '@/components/icons/technologies/SparkIcon.astro'
import GrpcIcon from '@/components/icons/technologies/GrpcIcon.astro'

const languages: SkillsetDetails = {
  name: 'Languages',
  icon: Book,
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
  icon: Monitor,
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
  icon: Server,
  items: [
    {
      name: 'NodeJS',
      icon: NodejsIcon
    },
    {
      name: 'Grpc',
      icon: GrpcIcon,
      className: 'dark:invert'
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
      name: 'OracleDB',
      icon: OracleIcon
    },
    {
      name: 'Redis',
      icon: RedisIcon
    },
    {
      name: 'Spark',
      icon: SparkIcon
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
  icon: Cloud,
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
