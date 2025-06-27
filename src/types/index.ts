export interface NavItem {
  name: string
  href: string
}

export interface SocialLink {
  platform: 'email' | 'instagram' | 'discord'
  url: string
}

export interface Skill {
  name: string
  level: number
}

export interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

export interface AnimationProps {
  initial?: object
  animate?: object
  exit?: object
  transition?: object
  variants?: object
  whileHover?: object
  whileTap?: object
  className?: string
}