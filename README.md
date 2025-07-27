# Rafli Kharisma Akbar Portfolio Website using cursor

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and TypeScript.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with desktop optimization
- **Modern UI**: Clean, professional design with custom color palette
- **Typography**: Poppins font family throughout
- **Interactive Elements**: Hover effects and smooth transitions

## 🏗️ Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage with all sections
│   │   └── globals.css      # Global styles with Tailwind
│   └── components/
│       ├── Header.tsx       # Navigation header
│       ├── Hero.tsx         # Hero section
│       ├── Experiences.tsx  # Experience cards section
│       ├── Projects.tsx     # Projects showcase section
│       ├── Skills.tsx       # Skills tags section
│       ├── Contact.tsx      # Contact CTA section
│       ├── Footer.tsx       # Social media footer
│       └── Button.tsx       # Reusable button component
├── public/                # Static assets
└── package.json          # Dependencies
```

## 🎯 Current Implementation

✅ **Completed Sections:**
- **Header**: Navigation menu with hover effects
- **Hero Section**: Greeting, heading, description, and CTA buttons with responsive layout
- **Experiences Section**: Cards with icons, titles, and descriptions in responsive grid
- **My Projects Section**: Project showcase with alternating background colors
- **Skills Section**: Capsule-style skill tags with icons
- **Contact Section**: Speech bubble avatar with gradient CTA button
- **Footer**: Social media icons with hover effects
- **Design System**: Complete responsive design, custom color palette, Poppins font integration

🎨 **Design Features Implemented:**
- Responsive grid layouts (mobile-first approach)
- Interactive hover effects and smooth transitions
- Professional color scheme (#FFF6D5 background)
- Typography hierarchy with Poppins font
- Custom Tailwind configuration
- Accessible component structure

## 🎨 Color Palette

- Background: `#FFF6D5`
- Primary Yellow: `#FDB813`
- Text Primary: `#222222`
- Text Secondary: `#666666`
- Experience Cards: `#F9F4D7`
- Skill Tags: `#E8DEB3`

## 📱 Responsive Breakpoints

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px` 