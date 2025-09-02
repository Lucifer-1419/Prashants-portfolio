import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Code, Database, Globe, Server, Smartphone, Settings } from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      color: 'text-chart-1',
      bgColor: 'bg-chart-1/10',
      borderColor: 'border-chart-1/20',
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vue.js', level: 90 },
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'text-chart-2',
      bgColor: 'bg-chart-2/10',
      borderColor: 'border-chart-2/20',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'Python/Django', level: 90 },
        { name: 'REST APIs', level: 85 },
      ]
    },
    {
      title: 'Database',
      icon: Database,
      color: 'text-chart-3',
      bgColor: 'bg-chart-3/10',
      borderColor: 'border-chart-3/20',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 80 },
        { name: 'Prisma ORM', level: 80 },
        { name: 'Firebase', level: 80 },
      ]
    },
    {
      title: 'DevOps',
      icon: Settings,
      color: 'text-chart-4',
      bgColor: 'bg-chart-4/10',
      borderColor: 'border-chart-4/20',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 80 },
        { name: 'Git/GitHub', level: 90 },
      ]
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'text-chart-5',
      bgColor: 'bg-chart-5/10',
      borderColor: 'border-chart-5/20',
      skills: [
        { name: 'React Native', level: 90 },
        { name: 'Flutter', level: 70 },
        { name: 'PWA', level: 70 },
      ]
    },
    {
      title: 'Design & Optimization',
      icon: Code,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      skills: [
        { name: 'System Design', level: 90 },
        { name: 'UI/UX Design', level: 90 },
        { name: 'Performance Optimization', level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/20 to-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning the full development spectrum, 
            from frontend magic to backend architecture.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                activeCategory === index
                  ? `${category.bgColor} ${category.borderColor} ${category.color}`
                  : 'bg-background border-border text-muted-foreground hover:bg-muted/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-medium">{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          className="max-w-4xl mx-auto"
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className={`text-sm font-semibold ${skillCategories[activeCategory].color}`}>
                    {skill.level}%
                  </span>
                </div>
                
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${skillCategories[activeCategory].bgColor.replace('/10', '')} opacity-80`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  />
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, delay: index * 0.1 + 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Category Description */}
          <motion.div
            className={`mt-8 p-6 rounded-xl border ${skillCategories[activeCategory].borderColor} ${skillCategories[activeCategory].bgColor}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-3">
              {(() => {
                const IconComponent = skillCategories[activeCategory].icon;
                return <IconComponent className={`w-6 h-6 ${skillCategories[activeCategory].color}`} />;
              })()}
              <h3 className={`text-xl font-semibold ${skillCategories[activeCategory].color}`}>
                {skillCategories[activeCategory].title} Development
              </h3>
            </div>
            <p className="text-muted-foreground">
              {activeCategory === 0 && "Creating responsive, interactive user interfaces with modern frameworks and cutting-edge design principles."}
              {activeCategory === 1 && "Building robust server-side applications with scalable architecture and efficient APIs."}
              {activeCategory === 2 && "Designing and optimizing database systems for performance, reliability, and data integrity."}
              {activeCategory === 3 && "Streamlining development workflows with containerization, cloud services, and automation tools."}
              {activeCategory === 4 && "Developing cross-platform mobile applications with native performance and user experience."}
              {activeCategory === 5 && "Focusing on system architecture, user experience design, and application performance optimization."}
            </p>
          </motion.div>
        </motion.div>

        {/* Interactive Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-24 h-24 bg-chart-1/5 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;