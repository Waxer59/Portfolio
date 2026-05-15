import type { TagKeyDetails } from '@/types/types'
import NextjsIcon from '@components/icons/technologies/NextjsIcon.astro'
import ReactIcon from '@components/icons/technologies/ReactIcon.astro'
import TailwindIcon from '@components/icons/technologies/TailwindIcon.astro'
import TypeScriptIcon from '@components/icons/technologies/TypeScriptIcon.astro'
import GoIcon from '@components/icons/technologies/GoIcon.astro'
import NestjsIcon from '@components/icons/technologies/NestjsIcon.astro'
import RedisIcon from '@components/icons/technologies/RedisIcon.astro'
import DockerIcon from '@components/icons/technologies/DockerIcon.astro'
import AstroLightIcon from '@components/icons/technologies/AstroLightIcon.astro'
import ElectronIcon from '@components/icons/technologies/ElectronIcon.astro'
import ReduxIcon from '@components/icons/technologies/ReduxIcon.astro'
import BabelIcon from '@components/icons/technologies/BabelIcon.astro'
import PostgresqlIcon from '@components/icons/technologies/PostgresqlIcon.astro'
import MongodbIcon from '@components/icons/technologies/MongodbIcon.astro'
import NodejsIcon from '@components/icons/technologies/NodejsIcon.astro'
import NpmIcon from '@components/icons/technologies/NpmIcon.astro'
import OpenAiIcon from '@components/icons/technologies/OpenAiIcon.astro'
import GeminiIcon from '@components/icons/technologies/GeminiIcon.astro'
import VitestIcon from '@/components/icons/technologies/VitestIcon.astro'
import AppwriteIcon from '@/components/icons/technologies/AppwriteIcon.astro'
import MuxIcon from '@/components/icons/technologies/MuxIcon.astro'
import AngularIcon from '@/components/icons/technologies/AngularIcon.astro'
import JavaIcon from '@/components/icons/technologies/JavaIcon.astro'
import SpringIcon from '@/components/icons/technologies/SpringIcon.astro'
import ChromeIcon from '@/components/icons/technologies/ChromeIcon.astro'

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
    class: 'bg-cyan-700 text-white fill-white',
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
    class: 'bg-sky-700 text-white',
    icon: DockerIcon
  },
  astro: {
    name: 'AstroJS',
    class: 'bg-[#17191e] text-white',
    icon: AstroLightIcon
  },
  electron: {
    name: 'Electron',
    class: 'bg-[#1b1c26] text-white',
    icon: ElectronIcon
  },
  redux: {
    name: 'Redux',
    class: 'bg-purple-900 text-white',
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
    class: 'bg-green-700 text-white',
    icon: MongodbIcon
  },
  nodejs: {
    name: 'Node.js',
    class: 'bg-green-700 text-white',
    icon: NodejsIcon
  },
  npm: {
    name: 'npm',
    class: 'bg-red-950 text-white',
    icon: NpmIcon
  },
  openai: {
    name: 'OpenAI',
    class: 'bg-zinc-900 text-white',
    icon: OpenAiIcon
  },
  gemini: {
    name: 'Gemini',
    class: 'bg-indigo-900 text-white',
    icon: GeminiIcon
  },
  appwrite: {
    name: 'Appwrite',
    class: 'bg-rose-700 text-white [&>svg]:rounded-full',
    icon: AppwriteIcon
  },
  vitest: {
    name: 'Vitest',
    class: 'bg-green-900 text-white',
    icon: VitestIcon
  },
  mux: {
    name: 'Mux',
    class: 'bg-zinc-600 text-white',
    icon: MuxIcon
  },
  angular: {
    name: 'Angular',
    class: 'bg-stone-800 text-white',
    icon: AngularIcon
  },
  java: {
    name: 'Java',
    class: 'bg-amber-800 text-white',
    icon: JavaIcon
  },
  spring: {
    name: 'Spring',
    class: 'bg-green-900 text-white',
    icon: SpringIcon
  },
  chrome: {
    name: 'Chrome',
    class: 'bg-yellow-700 text-white',
    icon: ChromeIcon
  }
}
