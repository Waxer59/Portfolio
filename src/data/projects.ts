import { TAGS } from '@/constants/constants'
import type { ProjectDetails } from '@/types/types'

export const projects: ProjectDetails[] = [
  {
    title: 'Job Ready',
    description: '...',
    tags: [TAGS.react!, TAGS.typescript!, TAGS.tailwind!],
    imgFile: 'jobReady.webp',
    links: {
      github: 'https://github.com/Waxer59/JobReady'
    }
  },
  {
    title: 'Proyectos Solidarios',
    description: '...',
    tags: [TAGS.astro!],
    imgFile: 'proyectosSolidarios.webp',
    links: {
      github:
        'https://github.com/Proyectos-solidarios-nebrija/catalogo-solidarios',
      preview: 'https://solidarios.nebrijanos.com'
    }
  },
  {
    title: 'Pikalang',
    description: '...',
    tags: [TAGS.golang!],
    imgFile: 'pikalang.webp',
    links: {
      github: 'https://github.com/Waxer59/PikaLang'
    }
  },
  {
    title: 'Wikat',
    description: '...',
    tags: [
      TAGS.react!,
      TAGS.typescript!,
      TAGS.tailwind!,
      TAGS.nestjs!,
      TAGS.redis!,
      TAGS.docker!
    ],
    imgFile: 'wikat.webp',
    links: {
      github: 'https://github.com/Waxer59/Wikat'
    }
  },
  {
    title: 'DockerHook',
    description: '...',
    tags: [TAGS.golang!],
    imgFile: 'dockerhook.webp',
    links: {
      github: 'https://github.com/Waxer59/DockerHook'
    }
  },
  {
    title: 'DinamicJS',
    description: '...',
    tags: [TAGS.react!, TAGS.redux!],
    imgFile: 'dinamicjs.webp',
    links: {
      github: 'https://github.com/Waxer59/DinamicJs',
      preview: 'https://dinamicjs.hgo.one'
    }
  },
  {
    title: 'DinamicJS Desktop',
    description: '...',
    tags: [TAGS.react!, TAGS.redux!, TAGS.electron!],
    imgFile: 'dinamicjs.webp',
    links: {
      github: 'https://github.com/Waxer59/DinamicJs-Desktop'
    }
  },
  {
    title: 'Babel Plugin Auto Console Log',
    description: '...',
    tags: [TAGS.babel!, TAGS.npm!],
    imgFile: 'babelPluginAutoConsoleLog.webp',
    links: {
      github: 'https://github.com/Waxer59/babel-plugin-auto-console-log',
      preview: 'https://www.npmjs.com/package/babel-plugin-auto-console-log'
    }
  },
  {
    title: 'Photo Display',
    description: '...',
    tags: [
      TAGS.react!,
      TAGS.redux!,
      TAGS.nestjs!,
      TAGS.postgresql!,
      TAGS.docker!
    ],
    imgFile: 'photoDisplay.webp',
    links: {
      github: 'https://github.com/Waxer59/PhotoDisplay'
    }
  },
  {
    title: 'Discord Bot',
    description: '...',
    tags: [TAGS.nodejs!, TAGS.docker!, TAGS.mongodb!, TAGS.redis!],
    imgFile: 'discordBot.webp',
    links: {
      github: 'https://github.com/Waxer59/discordjs-bot'
    }
  },
  {
    title: 'Cloud Toolbox',
    description: '...',
    tags: [TAGS.react!, TAGS.typescript!, TAGS.nestjs!],
    imgFile: 'cloudToolbox.webp',
    links: {
      github: 'https://github.com/Waxer59/Cloud-Toolbox'
    }
  },
  {
    title: 'Image Uploader',
    description: '...',
    tags: [TAGS.nestjs!, TAGS.mongodb!, TAGS.docker!],
    imgFile: 'imageUploader.webp',
    links: {
      github: 'https://github.com/Waxer59/ImageUploader'
    }
  }
]
