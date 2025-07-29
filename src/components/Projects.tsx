interface Project {
  title: string
  description: string
  image: string
  bgColor: 'bg-project-card-1' | 'bg-project-card-2'
}

export default function Projects() {
  const mainProject: Project = {
    title: "E-Commerce Platform",
    description: "A comprehensive full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, admin dashboard, inventory management, and real-time analytics.",
    image: "/api/placeholder/600/400",
    bgColor: "bg-project-card-1"
  }

  const smallProjects: Project[] = [
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team collaboration features.",
      image: "/api/placeholder/300/200", 
      bgColor: "bg-project-card-2"
    },
    {
      title: "Weather Dashboard",
      description: "Responsive weather app with current conditions and forecasts using OpenWeather API.",
      image: "/api/placeholder/300/200",
      bgColor: "bg-project-card-1"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio showcasing projects and skills built with Next.js.",
      image: "/api/placeholder/300/200",
      bgColor: "bg-project-card-2"
    },
    {
      title: "Chat Application",
      description: "Real-time messaging app with Socket.io, featuring group chats and file sharing.",
      image: "/api/placeholder/300/200",
      bgColor: "bg-project-card-1"
    }
  ]

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-[1.625rem] font-bold text-text-primary mb-8 text-center">
        My Projects
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Big Card */}
        <div className={`${mainProject.bgColor} rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 h-full p-4`}>
          <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-lg mb-4">
            <span className="text-gray-500 text-sm">Main Project Image</span>
          </div>
          <div className="px-2">
            <h3 className="text-lg font-bold text-text-primary mb-3">
              {mainProject.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {mainProject.description}
            </p>
          </div>
        </div>

        {/* Right Column - 2x2 Grid of Small Cards */}
        <div className="grid grid-cols-2 gap-4">
          {smallProjects.map((project, index) => (
            <div
              key={index}
              className={`${project.bgColor} rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-3`}
            >
              <div className="aspect-video bg-gray-200 flex items-center justify-center rounded-lg mb-3">
                <span className="text-gray-500 text-xs">Project Image</span>
              </div>
              <div className="px-1">
                <h3 className="text-xs font-bold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-[10px] text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 