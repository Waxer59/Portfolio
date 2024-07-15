export interface TagDetails {
  name: string
  class: string
  icon: any
}

export interface TagKeyDetails {
  [key: string]: TagDetails
}

export interface ProjectDetails {
  title: string
  description: string
  tags: TagDetails[]
  imgFile: string
  links: {
    github?: string
    preview?: string
  }
}
