import { TAGS } from '@/constants/constants'
import type { ProjectDetails } from '@/types/types'

export const projects: ProjectDetails[] = [
  {
    title: 'Smll',
    description: {
      es: 'Acortador de enlaces diseñado para compartir enlaces cortos de manera sencilla, con métricas, seguridad y mucho más. ¡Todo en un solo lugar!',
      en: 'Link shortener designed to share short links easily, with metrics, security and much more, all in one place!'
    },
    tags: [
      TAGS.nextjs!,
      TAGS.typescript!,
      TAGS.tailwind!,
      TAGS.appwrite!,
      TAGS.vitest!
    ],
    imgFile: 'smll.webp',
    links: {
      github: 'https://github.com/Waxer59/Smll',
      preview: 'https://smll.app'
    }
  },
  {
    title: 'Just Ask',
    description: {
      es: 'Plataforma avanzada para la simulación de entrevistas laborales.',
      en: 'Advanced platform for simulating job interviews.'
    },
    tags: [
      TAGS.astro!,
      TAGS.react!,
      TAGS.typescript!,
      TAGS.tailwind!,
      TAGS.gemini!
    ],
    imgFile: 'justAsk.webp',
    links: {
      github: 'https://github.com/Waxer59/JustAsk',
      preview: 'https://justask.hgo.one'
    }
  },
  {
    title: 'Hear Me Out',
    description: {
      es: 'Plataforma de mensajería en tiempo real con soporte para llamadas y grupos.',
      en: 'Real-time messaging platform with support for calls and groups.'
    },
    tags: [
      TAGS.react!,
      TAGS.typescript!,
      TAGS.tailwind!,
      TAGS.nestjs!,
      TAGS.mongodb!,
      TAGS.redis!
    ],
    imgFile: 'hearmeout.webp',
    links: {
      github: 'https://github.com/Waxer59/HearMeOut'
    }
  },
  {
    title: 'Asobu',
    description: {
      es: 'Innovador asistente de voz que explora la versatilidad de la IA, integrando música, navegación, traducción y reconocimiento de imágenes en una plataforma única.',
      en: 'Innovative voice assistant that explores the versatility of AI, integrating music, navigation, translation and image recognition in a single platform.'
    },
    tags: [TAGS.nextjs!, TAGS.typescript!, TAGS.tailwind!, TAGS.openai!],
    imgFile: 'asobu.webp',
    links: {
      github: 'https://github.com/Waxer59/Asobu'
    }
  },
  {
    title: 'Job Ready',
    description: {
      es: 'Plataforma de simulación de entrevistas con ofertas reales, impulsada por <strong>InfoJobs</strong> y potenciada por <strong>IA</strong>. ¡Busca una oferta y enfréntate a la entrevista!',
      en: 'Interview simulation platform with real offers, powered by <strong>InfoJobs</strong> and powered by <strong>AI</strong>. Search for an offer and face the interview!'
    },
    tags: [TAGS.react!, TAGS.typescript!, TAGS.tailwind!, TAGS.openai!],
    imgFile: 'jobReady.webp',
    links: {
      github: 'https://github.com/Waxer59/JobReady'
    }
  },
  {
    title: 'Proyectos Solidarios',
    description: {
      es: 'Web de los proyectos solidarios del <strong>Instituto Nebrija de Formación Profesional</strong>. En ella se muestran todos los proyectos, con una sección de noticias y una newsletter.',
      en: 'Web of the solidarity projects of the <strong>Instituto Nebrija de Formación Profesional</strong>. It shows all the projects, with a news section and a newsletter.'
    },
    tags: [TAGS.astro!, TAGS.docker!],
    imgFile: 'proyectosSolidarios.webp',
    links: {
      github:
        'https://github.com/Proyectos-solidarios-nebrija/catalogo-solidarios',
      preview: 'https://solidarios.nebrijanos.com'
    }
  },
  {
    title: 'Pikalang',
    description: {
      es: 'Compilador de un nuevo lenguaje de programación diseñado para ser simple, fácil y efectivo. Está escrito en <strong>Go</strong> y su sintaxis se inspira en varios lenguajes.',
      en: 'Compiler of a new programming language designed to be simple, easy and effective. It is written in <strong>Go</strong> and its syntax is inspired by several languages.'
    },
    tags: [TAGS.golang!],
    imgFile: 'pikalang.webp',
    links: {
      github: 'https://github.com/Waxer59/PikaLang'
    }
  },
  {
    title: 'Wikat',
    description: {
      es: 'Catálogo de gatos en el que puedes buscar la raza de un gato y explorar todas sus características.',
      en: "Cat catalog where you can search for a cat's breed and explore all its characteristics."
    },
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
    description: {
      es: 'Herramienta que facilita la gestión de contenedores de Docker mediante el uso de <strong>WebHooks</strong>.',
      en: 'Tool that facilitates the management of Docker containers through the use of <strong>WebHooks</strong>.'
    },
    tags: [TAGS.golang!, TAGS.docker!],
    imgFile: 'dockerhook.webp',
    links: {
      github: 'https://github.com/Waxer59/DockerHook'
    }
  },
  {
    title: 'DinamicJS',
    description: {
      es: 'Entorno de pruebas para <strong>JavaScript</strong> que ejecuta tu código y te muestra los resultados de forma instantánea, además de ofrecer muchas más funcionalidades.',
      en: 'Playground for <strong>JavaScript</strong> that executes your code and shows you the results instantly, in addition to offering many more features.'
    },
    tags: [TAGS.react!, TAGS.redux!, TAGS.openai!],
    imgFile: 'dinamicjs.webp',
    links: {
      github: 'https://github.com/Waxer59/DinamicJs',
      preview: 'https://dinamicjs.hgo.one'
    }
  },
  {
    title: 'DinamicJS Desktop',
    description: {
      es: 'Entorno de pruebas para <strong>JavaScript</strong> que ejecuta tu código y te muestra los resultados de forma instantánea, además de ofrecer muchas más funcionalidades.',
      en: 'Playground for <strong>JavaScript</strong> that executes your code and shows you the results instantly, in addition to offering many more features.'
    },
    tags: [TAGS.react!, TAGS.redux!, TAGS.electron!, TAGS.openai!],
    imgFile: 'dinamicjs.webp',
    links: {
      github: 'https://github.com/Waxer59/DinamicJs-Desktop'
    }
  },
  {
    title: 'Babel Plugin Auto Console Log',
    description: {
      es: 'Plugin de <strong>Babel</strong> que agrega automáticamente declaraciones <strong>console.log()</strong> al código JavaScript, facilitando la depuración del código.',
      en: 'Plugin for <strong>Babel</strong> that automatically adds <strong>console.log()</strong> statements to JavaScript code, making code debugging easier.'
    },
    tags: [TAGS.babel!, TAGS.npm!],
    imgFile: 'babelPluginAutoConsoleLog.webp',
    links: {
      github: 'https://github.com/Waxer59/babel-plugin-auto-console-log',
      preview: 'https://www.npmjs.com/package/babel-plugin-auto-console-log'
    }
  },
  {
    title: 'Photo Display',
    description: {
      es: 'Plataforma de galería de fotos que permite exhibir todas las imágenes cargadas a través de una URL.',
      en: 'Photo gallery platform that allows you to display all uploaded images through a URL.'
    },
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
    description: {
      es: 'Bot multipropósito para Discord. Ofrece funciones de música, entretenimiento y administración, incluyendo encuestas, sistema de tickets y soporte para Sourcebin.',
      en: 'Multipurpose bot for Discord. It offers music, entertainment and administration functions, including polls, ticketing system and Sourcebin support.'
    },
    tags: [TAGS.nodejs!, TAGS.docker!, TAGS.mongodb!, TAGS.redis!],
    imgFile: 'discordBot.webp',
    links: {
      github: 'https://github.com/Waxer59/discordjs-bot'
    }
  },
  {
    title: 'Cloud Toolbox',
    description: {
      es: 'Plataforma que agrupa herramientas para eliminar fondos, etiquetar imágenes, capturar páginas web y verificar la seguridad de documentos.',
      en: 'Platform that brings together tools for removing backgrounds, tagging images, capturing web pages and verifying document security.'
    },
    tags: [TAGS.react!, TAGS.typescript!, TAGS.nestjs!],
    imgFile: 'cloudToolbox.webp',
    links: {
      github: 'https://github.com/Waxer59/Cloud-Toolbox'
    }
  },
  {
    title: 'Image Uploader',
    description: {
      es: 'Plataforma para cargar imágenes que genera un enlace para acceder a ellas.',
      en: 'Platform for uploading images that generates a link to access them.'
    },
    tags: [TAGS.nestjs!, TAGS.mongodb!, TAGS.docker!],
    imgFile: 'imageUploader.webp',
    links: {
      github: 'https://github.com/Waxer59/ImageUploader'
    }
  }
]
