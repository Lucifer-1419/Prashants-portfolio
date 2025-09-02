import { useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom cursor effects
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(var(--primary), 0.8), transparent);
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section with 3D Character */}
        <HeroSection />
        
        {/* About Section with Character Interaction */}
        <AboutSection />
        
        {/* Skills Section with Interactive Progress */}
        <SkillsSection />
        
        {/* Projects Showcase */}
        <ProjectsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Toast Notifications */}
      <Toaster 
        position="top-right"
        richColors
        closeButton
        toastOptions={{
          style: {
            background: 'hsl(var(--card))',
            color: 'hsl(var(--card-foreground))',
            border: '1px solid hsl(var(--border))',
          },
        }}
      />
      
      {/* Loading Screen Animation - Optional */}
      <style>{`
        .custom-cursor {
          display: none;
        }
        
        @media (min-width: 768px) {
          .custom-cursor {
            display: block;
          }
        }
        
        /* Scrollbar Styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: hsl(var(--muted));
        }
        
        ::-webkit-scrollbar-thumb {
          background: hsl(var(--primary));
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--primary) / 0.8);
        }
        
        /* Selection styling */
        ::selection {
          background: hsl(var(--primary) / 0.2);
          color: hsl(var(--primary));
        }
        
        /* Focus visible styling */
        :focus-visible {
          outline: 2px solid hsl(var(--primary));
          outline-offset: 2px;
        }
        
        /* Smooth animations for page load */
        body {
          animation: fadeIn 0.5s ease-in;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        /* Enhance button hover effects */
        button:hover {
          transform: translateY(-1px);
        }
        
        /* Add subtle parallax effect to background elements */
        @media (prefers-reduced-motion: no-preference) {
          .parallax-bg {
            transform: translateY(var(--scroll, 0) * 0.5px);
          }
        }
      `}</style>
    </div>
  );
}