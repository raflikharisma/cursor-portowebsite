import Button from './Button'

export default function Contact() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex flex-col items-center text-center">
        {/* Avatar with Speech Bubble */}
        <div className="relative mb-8">
          {/* Speech Bubble */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-sm border">
            <span className="text-sm font-medium text-text-primary">Hi!</span>
            {/* Speech bubble tail */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
          </div>
          
          {/* Avatar */}
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">R</span>
          </div>
        </div>

        {/* Contact Text */}
        <div className="mb-6">
          <p className="text-base font-bold text-text-primary mb-2">
            Business and partnership?
          </p>
          <p className="text-base font-bold">
            <span className="text-text-primary">Contact Me </span>
            <span className="text-primary">Now!</span>
          </p>
        </div>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-primary to-primary-hover text-white font-medium py-3 px-6 rounded-full hover:shadow-lg transition-shadow duration-200">
          Click Me
        </button>
      </div>
    </section>
  )
} 