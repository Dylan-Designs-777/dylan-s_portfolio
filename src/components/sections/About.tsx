import React from 'react'
import { motion } from 'framer-motion'
import { Palette, Monitor, Award, Zap } from 'lucide-react'

const About: React.FC = () => {
  const skills = [
    { name: 'Adobe Photoshop', level: 90 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Typography', level: 85 },
    { name: 'Color Theory', level: 90 },
  ]
  
  const services = [
    {
      icon: <Palette className="text-primary" size={24} />,
      title: 'Graphic Design',
      description: 'Creating visually stunning graphics for various media platforms.'
    },
    {
      icon: <Monitor className="text-primary" size={24} />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces and experiences.'
    }
  ]
  
  return (
    <section id="about" className="py-20 px-4 bg-gray-dark/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-gray-light max-w-2xl mx-auto font-poppins">
            Get to know more about my journey, skills, and services
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-montserrat mb-6 border-l-4 border-primary pl-4">
              My Story
            </h3>
            <div className="space-y-4 text-gray-light font-poppins">
              <p>
                I am a passionate graphic designer with a keen eye for detail and a love for creating visually compelling designs. My journey in design began when I discovered my passion for visual communication and the power it holds to convey messages and evoke emotions.
              </p>
              <p>
                With years of experience in the field, I've had the opportunity to work on a diverse range of projects, from brand identities to digital illustrations. I believe that great design is not just about aesthetics but also about solving problems and creating meaningful experiences.
              </p>
              <p>
                My approach combines creativity with strategic thinking to deliver designs that not only look great but also effectively communicate your message to your target audience.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-montserrat mb-6 border-l-4 border-primary pl-4">
              My Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium font-poppins">{skill.name}</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-dark rounded-full h-2.5">
                    <motion.div
                      className="bg-primary h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold font-montserrat mb-8 text-center">
            Services I <span className="text-primary">Offer</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-dark p-6 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold font-montserrat mb-2">{service.title}</h4>
                <p className="text-gray-light font-poppins">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About