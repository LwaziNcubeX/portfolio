import { motion } from 'framer-motion'
import { Code, Database, Server, Terminal, Cpu, Braces } from 'lucide-react'

const Section = ({ children, id }: { children: React.ReactNode; id: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-12 sm:py-16 md:py-20"
    >
      {children}
    </motion.section>
  )
}

interface Skill {
  icon: React.ElementType;
  name: string;
}

const SkillIcon: React.FC<Skill> = ({ icon: Icon, name }) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-zinc-700 flex items-center justify-center">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
    </div>
    <span className="mt-2 text-xs sm:text-sm">{name}</span>
  </div>
)

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { icon: Code, name: "TypeScript" },
    { icon: Server, name: "Node.js" },
    { icon: Database, name: "PostgreSQL" },
    { icon: Cpu, name: "GraphQL" },
    { icon: Terminal, name: "Docker" },
    { icon: Braces, name: "React" },
  ]

  return (
    <div className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <Section id="skills">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">Professional Skillset</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillIcon icon={skill.icon} name={skill.name} />
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}

export default Skills