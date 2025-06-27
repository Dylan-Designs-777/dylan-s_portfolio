import React from 'react'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { FaDiscord } from "react-icons/fa";
import { clsx } from 'clsx'
import { SiGmail } from 'react-icons/si';

type SocialType = 'email' | 'instagram' | 'discord'

interface SocialIconProps {
  type: SocialType
  href: string
  className?: string
}

const SocialIcon: React.FC<SocialIconProps> = ({ type, href, className }) => {
  const iconMap = {
    email: <SiGmail size={27} color='red' />,
    instagram: <Instagram size={27} color='deeppink' />,
    discord: <FaDiscord  size={27} />
  }
  
  const baseStyles = 'flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300'
  
  const colorStyles = {
    email: 'bg-white hover:bg-gray-700 text-white',
    // instagram: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 text-white',
    instagram: 'bg-black hover:bg-gray-800 text-white',
    discord: 'bg-indigo-500 hover:bg-indigo-700 text-white'
  }
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(baseStyles, colorStyles[type], className)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {iconMap[type]}
    </motion.a>
  )
}

export default SocialIcon