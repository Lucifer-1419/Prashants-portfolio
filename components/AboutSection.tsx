import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Code2, Coffee, Lightbulb, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    { icon: Code2, number: '25+', label: 'Projects Completed', color: 'text-chart-1' },
    { icon: Coffee, number: '1000+', label: 'Cups of Coffee', color: 'text-chart-2' },
    { icon: Lightbulb, number: '100+', label: 'Problems Solved', color: 'text-chart-3' },
    { icon: Users, number: '15+', label: 'Happy Clients', color: 'text-chart-4' },
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL',
    'MongoDB', 'AWS', 'Docker', 'GraphQL', 'Next.js', 'Express.js'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-chart-1 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Character with Workspace */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main workspace image */}
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBzZXR1cCUyMGxhcHRvcCUyMGRlc2t8ZW58MXx8fHwxNzU2ODEwMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Developer workspace setup"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              </motion.div>

              {/* Floating Code Snippet */}
              <motion.div
                className="absolute -top-4 -right-4 bg-background/95 backdrop-blur-sm p-4 rounded-lg border border-primary/20 shadow-lg max-w-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <code className="text-xs text-muted-foreground">
                  <div className="text-blue-400">const</div>
                  <div className="text-purple-400">developer = &#123;</div>
                  <div className="ml-2 text-green-400">name: "Prashant",</div>
                  <div className="ml-2 text-orange-400">passion: "coding"</div>
                  <div className="text-purple-400">&#125;</div>
                </code>
              </motion.div>

              {/* Character Introduction Speech Bubble */}
              <motion.div
                className="absolute -bottom-8 left-8 bg-primary text-primary-foreground p-4 rounded-2xl rounded-bl-none shadow-lg max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5 }}
              >
                <p className="text-sm">
                  "Welcome to my digital world! I'm passionate about creating innovative solutions that make a difference."
                </p>
                <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-primary"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - About Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Passionate Full Stack Developer
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hey there! I'm Prashant Bahatre, and I've been obsessed with building things on the web for longer than I care to admit. What started as late-night curiosity about "how do websites actually work?" has turned into a career where I get to solve puzzles and create digital experiences every single day.
                </p>
                
                <p>
                  I'm the kind of developer who believes that great code isn't just functional—it should be readable, maintainable, and elegant. Whether I'm architecting a React frontend that loads lightning-fast or designing a database that scales seamlessly, I approach every project with the same philosophy: build it right the first time, but always leave room for growth.
                </p>
                
                <p>
                  My sweet spot? Taking complex business requirements and translating them into clean, efficient applications that users actually enjoy using. I've worked with startups racing to MVP and established companies scaling their platforms, and there's nothing quite like that moment when everything clicks into place and the solution just works.
                </p>
                
                <p>
                  When I'm not deep in code, you'll find me exploring the latest JavaScript frameworks (yes, I know there's a new one every week), contributing to open-source projects. The tech community gave me so much when I was learning—paying it forward feels natural.
                </p>
                
                <p className="font-medium text-foreground">
                  Here are the tools I love working with:
                </p>
              </div>

              {/* Skills Cloud */}
              <div>
                <h4 className="font-semibold mb-4 text-foreground">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group cursor-default"
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative mb-4">
                <motion.div
                  className={`w-16 h-16 mx-auto rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors ${
                    hoveredStat === index ? 'bg-primary/10' : 'bg-background'
                  }`}
                  animate={hoveredStat === index ? { rotate: 360 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color} group-hover:scale-110 transition-transform`} />
                </motion.div>
              </div>
              
              <motion.div
                className="text-2xl md:text-3xl font-bold text-foreground mb-2"
                animate={hoveredStat === index ? { scale: 1.1 } : { scale: 1 }}
              >
                {stat.number}
              </motion.div>
              
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;