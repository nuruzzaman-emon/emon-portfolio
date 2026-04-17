# Luca's Portfolio - React + Framer Motion + GSAP + Lenis

A modern, animated portfolio built with React featuring smooth scrolling and sophisticated animations.

## Technologies Used

- **React 18** - UI framework
- **Framer Motion** - Component animations
- **GSAP** - Advanced animations (counters, timeline effects)
- **Lenis** - Smooth scrolling library
- **Vite** - Build tool
- **Tailwind CSS** - Styling

## Features

✨ Smooth scrolling with Lenis
🎬 Component animations with Framer Motion
✨ Advanced animations with GSAP (counter animations)
📱 Responsive mobile-first design
🌓 Dark mode support
⚡ Fast build with Vite

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Top navigation with menu
│   ├── ProfileSection.jsx  # Hero section with animations
│   ├── StatsSection.jsx    # Animated stats counters
│   └── BottomNavigation.jsx # Mobile bottom navigation
├── App.jsx                 # Main app component with Lenis setup
├── main.jsx                # React entry point
└── index.css               # Tailwind styles

Configuration:
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind theming
├── postcss.config.js       # PostCSS setup
└── package.json            # Dependencies
```

## Customization

### Theme Colors
Edit `tailwind.config.js` to modify the primary color and other theme variables.

### Animations
- **Profile section animations**: Modify `ProfileSection.jsx` for GSAP and Framer Motion
- **Stats animations**: Adjust counter animations in `StatsSection.jsx`
- **Component transitions**: Edit component variants in respective files

### Smooth Scrolling Settings
Adjust Lenis configuration in `App.jsx`:
- `duration` - Scroll animation duration
- `easing` - Easing function
- `mouseMultiplier` - Desktop scroll speed
- `touchMultiplier` - Mobile scroll speed

## Browser Support

All modern browsers that support ES6 and CSS Grid.

## License

MIT
