import Button from './Button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting, Title and Description with Avatar */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-10">
              {/* Avatar - positioned beside all text content */}
              <div className="flex-shrink-0 lg:mt-16">
                <div>
                  <Image
                    src="/images/Group 3.png"
                    alt="Rafli's Avatar"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-auto"
                    style={{ transform: 'scale(1.26)' }}
                    priority
                  />
                </div>
              </div>
              
              {/* All Text Content */}
              <div className="flex-1">
                <p className="text-lg font-medium text-text-primary mb-6 bg-white py-3 px-5 rounded-full inline-block">
                  Hi, I'm Rafli 👋
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
                  Welcome to My Portfolio
                </h1>
                <p className="text-lg lg:text-xl text-text-secondary leading-snug max-w-4xl">
                  I'm a passionate developer showcasing my experience, projects, and skills. 
                  Let's build something amazing together! I love creating modern web applications 
                  and solving complex problems with clean, efficient code. My expertise spans 
                  across frontend and backend technologies, delivering exceptional user experiences.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start lg:ml-4">
              {/* Contact Me Button with Linear Gradient */}
              <button className="bg-gradient-to-r from-primary to-[#FDD663] text-white font-bold py-4 w-60 rounded-full hover:shadow-lg transition-all duration-200">
                Contact Me
              </button>
              <Button variant="ghost" className="py-4 w-60">
                Surf with me!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 