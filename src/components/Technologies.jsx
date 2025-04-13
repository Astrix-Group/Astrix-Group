import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const technologies = [
  {
    name: 'MongoDB',
    icon: 'M',
    color: 'bg-green-500',
    description: 'NoSQL database for modern applications',
  },
  {
    name: 'MySQL',
    icon: 'SQL',
    color: 'bg-blue-500',
    description: 'Relational database management system',
  },
  {
    name: 'Node.js',
    icon: 'N',
    color: 'bg-green-600',
    description: 'JavaScript runtime for server-side applications',
  },
  {
    name: 'Python',
    icon: 'Py',
    color: 'bg-blue-600',
    description: 'Versatile programming language for various applications',
  },
  {
    name: 'HTML',
    icon: 'H',
    color: 'bg-orange-500',
    description: 'Standard markup language for web pages',
  },
  {
    name: 'CSS',
    icon: 'C',
    color: 'bg-blue-400',
    description: 'Style sheet language for web design',
  },
  {
    name: 'JavaScript',
    icon: 'JS',
    color: 'bg-yellow-500',
    description: 'Programming language for web development',
  },
  {
    name: 'React',
    icon: 'R',
    color: 'bg-blue-300',
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
      className="flex flex-col items-center p-6 bg-dark-200 rounded-xl shadow-dark-md hover:shadow-dark-lg border border-dark-300 transition-all"
    >
      <div className={`${tech.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4`}>
        {tech.icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-200">{tech.name}</h3>
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
    <section id="technologies" ref={sectionRef} className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-200">
            Our <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We leverage the latest technologies to build robust, scalable, and efficient applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <TechCard key={index} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
