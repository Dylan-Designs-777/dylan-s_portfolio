import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import AnimatedText from '../ui/AnimatedText'
import Button from '../ui/Button'

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/20 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-lg font-medium mb-4">
              Graphic Designer
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedText 
              text="Welcome,    To     My     Creative     World"
               
              className="bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent py-3"
            />
          </motion.h1>
          
          <motion.p
            className="text-gray-light text-lg md:text-xl max-w-2xl mb-10 font-poppins"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I create stunning visual designs that graps audiance's attention.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <ArrowDown className="text-primary" size={32} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero