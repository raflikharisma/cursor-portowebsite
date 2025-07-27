import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch, 
  Palette, 
  Zap,
  type LucideIcon
} from 'lucide-react'

interface Skill {
  name: string
  icon: LucideIcon
}

export default function Skills() {
  const skills: Skill[] = [
    { name: "JavaScript", icon: Code },
    { name: "TypeScript", icon: Code },
    { name: "React", icon: Code },
    { name: "Next.js", icon: Globe },
    { name: "Node.js", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "Tailwind CSS", icon: Palette },
    { name: "React Native", icon: Smartphone },
    { name: "Git", icon: GitBranch },
    { name: "AWS", icon: Server },
    { name: "GraphQL", icon: Zap }
  ]

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-xl font-bold text-text-primary mb-8 text-center">
        Skills
      </h2>
      
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon
          return (
            <div
              key={index}
              className="flex items-center gap-2 bg-skill-tag rounded-full py-1.5 px-3 hover:bg-opacity-80 transition-colors duration-200"
            >
              <IconComponent size={16} className="text-text-primary" />
              <span className="text-sm font-medium text-text-primary">
                {skill.name}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
} 