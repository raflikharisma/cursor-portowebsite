'use client'

export default function Header() {
  const navItems = ['Home', 'Lorem', 'Lorem', 'Lorem']

  return (
    <header className="pt-8">
      <nav className="container mx-auto px-6">
        <ul className="flex justify-end gap-10">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-text-primary font-medium text-base hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
} 