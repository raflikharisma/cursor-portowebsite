interface Project {
  title: string
  description: string
  image: string
  bgColor: 'bg-project-card-1' | 'bg-project-card-2'
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL featuring user authentication, payment processing, and admin dashboard.",
      image: "/api/placeholder/400/200",
      bgColor: "bg-project-card-1"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application built with Next.js and MongoDB, featuring real-time updates, team collaboration, and progress tracking.",
      image: "/api/placeholder/400/200", 
      bgColor: "bg-project-card-2"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application using React and OpenWeather API, providing current conditions, forecasts, and location-based weather data.",
      image: "/api/placeholder/400/200",
      bgColor: "bg-project-card-1"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills, built with Next.js, Tailwind CSS, and deployed on Vercel.",
      image: "/api/placeholder/400/200",
      bgColor: "bg-project-card-2"
    }
  ]

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-xl font-bold text-text-primary mb-8 text-center">
        My Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${project.bgColor} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200`}
          >
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Project Image</span>
            </div>
            <div className="p-5">
              <h3 className="text-sm font-bold text-text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-[13px] text-text-secondary leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 