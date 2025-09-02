import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Hospital Management Software',
      description: 'Comprehensive hospital management system with patient records, appointment scheduling, inventory management, and billing integration.',
      image: 'https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1hbmFnZW1lbnQlMjBzb2Z0d2FyZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTY4MTA5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      github: '#',
      live: '#',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with multi-vendor support, advanced search, payment processing, and order management system.',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzU2ODEwOTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['Next.js', 'Prisma', 'Stripe', 'Tailwind', 'Docker'],
      github: '#',
      live: '#',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Pharmacy & Lab Software',
      description: 'Integrated pharmacy and laboratory management system with inventory tracking, prescription management, and test result processing.',
      image: 'https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMGxhYm9yYXRvcnklMjBtZWRpY2FsJTIwc29mdHdhcmV8ZW58MXx8fHwxNzU2ODEwOTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['Vue.js', 'Firebase', 'Node.js', 'MongoDB', 'PWA'],
      github: '#',
      live: '#',
      status: 'Completed'
    }
  ];

  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Web App', 'Mobile', 'E-Commerce', 'Open Source'];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise across various technologies and domains.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-chart-3 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filterName, index) => (
            <motion.button
              key={filterName}
              onClick={() => setFilter(filterName)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === filterName
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-background border border-border text-muted-foreground hover:bg-muted/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {filterName}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action Buttons */}
                <motion.div
                  className="absolute top-4 right-4 flex space-x-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={hoveredProject === project.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.a
                    href={project.github}
                    className="p-2 bg-background/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-background transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-4 h-4 text-foreground" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="p-2 bg-primary text-primary-foreground rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </motion.div>

                {/* Status Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>


              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: hoveredProject === project.id 
                    ? 'linear-gradient(45deg, transparent, rgba(var(--primary), 0.1), transparent)'
                    : 'transparent'
                }}
                animate={{
                  opacity: hoveredProject === project.id ? [0, 1, 0] : 0
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-primary to-chart-3 text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>

        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-32 h-32 bg-chart-3/5 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;