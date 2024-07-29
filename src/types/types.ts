export interface TagDetails {
  name: string
  class: string
  icon: any
}

export interface ProjectDescriptionData {
  es: string
  en: string
}

export interface TagKeyDetails {
  [key: string]: TagDetails
}

export interface ProjectDetails {
  title: string
  description: ProjectDescriptionData
  tags: TagDetails[]
  imgFile: string
  links: {
    github?: string
    preview?: string
  }
}
