import React from 'react'
import { motion } from 'framer-motion'
import SocialIcon from '../ui/SocialIcon'

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-dark py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold font-montserrat text-white mb-4">
              Let's <span className="text-primary">Work Togather</span>
            </h2>
            <p className="text-gray-light font-poppins mb-6 max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <div className="flex space-x-4 items-center justify-center">
              <SocialIcon 
                type="email" 
                href="mailto:dylan.gaming186@gmail.com" 
              />
              <SocialIcon 
                type="instagram" 
                href="https://www.instagram.com/only.thumbnail/" 
              />
              <SocialIcon 
                type="discord" 
                href="https://discord.gg/kjq2puAaBp" 
              />
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6">
          <p className="text-center text-gray-light text-sm">
            © {new Date().getFullYear()} Dylan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer