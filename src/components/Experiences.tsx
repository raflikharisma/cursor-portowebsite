import { Briefcase, Code, GraduationCap, Award, type LucideIcon } from 'lucide-react'

interface ExperienceCard {
  icon: LucideIcon
  title: string
  description: string
}

export default function Experiences() {
  const experiences: ExperienceCard[] = [
    {
      icon: Briefcase,
      title: "Full Stack Developer",
      description: "Building modern web applications with React, Node.js, and cloud technologies."
    },
    {
      icon: Code,
      title: "Frontend Specialist", 
      description: "Creating responsive and interactive user interfaces using modern frameworks."
    },
    {
      icon: GraduationCap,
      title: "Computer Science",
      description: "Graduated with strong foundation in algorithms, data structures, and software engineering."
    },
    {
      icon: Award,
      title: "Project Leader",
      description: "Led development teams and delivered successful projects on time and within budget."
    }
  ]

  return (
    <section className="container mx-auto px-6 py-8">
      <h2 className="text-[1.625rem] font-bold text-text-primary mb-8 text-center">
        Experiences!
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {experiences.map((experience, index) => {
          const IconComponent = experience.icon
          return (
            <div
              key={index}
              className="bg-experience-card p-4 rounded-xl flex items-center gap-4"
            >
              <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center flex-shrink-0">
                <IconComponent 
                  size={48} 
                  className="text-text-primary"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-text-primary mb-2">
                  {experience.title}
                </h3>
                <p className="text-xs text-text-primary leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
} 