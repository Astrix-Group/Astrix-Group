import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const technologies = [
  {
    name: 'MongoDB',
    icon: 'M',
    color: 'from-green-500 to-green-600',
    description: 'NoSQL database for modern applications',
  },
  {
    name: 'MySQL',
    icon: 'SQL',
    color: 'from-blue-500 to-blue-600',
    description: 'Relational database management system',
  },
  {
    name: 'Node.js',
    icon: 'N',
    color: 'from-green-600 to-green-700',
    description: 'JavaScript runtime for server-side applications',
  },
  {
    name: 'Python',
    icon: 'Py',
    color: 'from-blue-600 to-blue-700',
    description: 'Versatile programming language for various applications',
  },
  {
    name: 'HTML',
    icon: 'H',
    color: 'from-orange-500 to-red-500',
    description: 'Standard markup language for web pages',
  },
  {
    name: 'CSS',
    icon: 'C',
    color: 'from-blue-400 to-blue-500',
    description: 'Style sheet language for web design',
  },
  {
    name: 'JavaScript',
    icon: 'JS',
    color: 'from-yellow-400 to-yellow-500',
    description: 'Programming language for web development',
  },
  {
    name: 'React',
    icon: 'R',
    color: 'from-cyan-400 to-blue-500',
    description: 'JavaScript library for building user interfaces',
  },
];

const TechCard = ({ tech, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px 0px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.03 }}
      className="flex flex-col items-center p-6 glass rounded-xl shadow-dark-md hover:shadow-glow border border-gray-700 transition-all group h-full"
    >
      <div className={`bg-gradient-to-br ${tech.color} w-16 h-16 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-5 transform group-hover:rotate-3 transition-all`}>
        {tech.icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-200 group-hover:text-white transition-colors">{tech.name}</h3>
      <p className="text-gray-400 text-center">{tech.description}</p>
    </motion.div>
  );
};

const Technologies = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section id="technologies" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-accent opacity-10 blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-200">
            Our <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We leverage the latest technologies to build robust, scalable, and efficient applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <TechCard key={index} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
