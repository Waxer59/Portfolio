import type { TagKeyDetails } from '@/types/types'
import NextjsIcon from '@components/icons/NextjsIcon.astro'
import ReactIcon from '@components/icons/ReactIcon.astro'
import TailwindIcon from '@components/icons/TailwindIcon.astro'
import TypeScriptIcon from '@components/icons/TypeScriptIcon.astro'
import GoIcon from '@components/icons/GoIcon.astro'
import NestjsIcon from '@components/icons/NestjsIcon.astro'
import RedisIcon from '@components/icons/RedisIcon.astro'
import DockerIcon from '@components/icons/DockerIcon.astro'
import AstroIcon from '@components/icons/AstroIcon.astro'
import ElectronIcon from '@components/icons/ElectronIcon.astro'
import ReduxIcon from '@components/icons/ReduxIcon.astro'
import BabelIcon from '@components/icons/BabelIcon.astro'
import PostgresqlIcon from '@components/icons/PostgresqlIcon.astro'
import MongodbIcon from '@components/icons/MongodbIcon.astro'
import NodejsIcon from '@/components/icons/NodejsIcon.astro'

export const TAGS: TagKeyDetails = {
  nextjs: {
    name: 'Next.js',
    class: 'bg-black text-white',
    icon: NextjsIcon
  },
  tailwind: {
    name: 'Tailwind CSS',
    class: 'bg-[#003159] text-white',
    icon: TailwindIcon
  },
  react: {
    name: 'React',
    class: 'bg-[#20232a] text-white',
    icon: ReactIcon
  },
  typescript: {
    name: 'TypeScript',
    class: 'bg-blue-900 text-white',
    icon: TypeScriptIcon
  },
  golang: {
    name: 'Golang',
    class: 'bg-cyan-600 text-white fill-white',
    icon: GoIcon
  },
  nestjs: {
    name: 'NestJS',
    class: 'bg-red-800 text-white',
    icon: NestjsIcon
  },
  redis: {
    name: 'Redis',
    class: 'bg-[#d32f2f] text-white',
    icon: RedisIcon
  },
  docker: {
    name: 'Docker',
    class: 'bg-sky-600 text-white',
    icon: DockerIcon
  },
  astro: {
    name: 'AstroJS',
    class: 'bg-[#17191e] text-white',
    icon: AstroIcon
  },
  electron: {
    name: 'Electron',
    class: 'bg-[#1b1c26] text-white',
    icon: ElectronIcon
  },
  redux: {
    name: 'Redux',
    class: 'bg-purple-500 text-white',
    icon: ReduxIcon
  },
  babel: {
    name: 'Babel',
    class: 'bg-[#3b3c38] text-white',
    icon: BabelIcon
  },
  postgresql: {
    name: 'PostgreSQL',
    class: 'bg-[#0047ab] text-white',
    icon: PostgresqlIcon
  },
  mongodb: {
    name: 'MongoDB',
    class: 'bg-green-600 text-white',
    icon: MongodbIcon
  },
  nodejs: {
    name: 'Node.js',
    class: 'bg-green-700 text-white',
    icon: NodejsIcon
  }
}
