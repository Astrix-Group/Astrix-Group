import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the background elements
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        y: 50,
        x: 30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-dark to-dark-100 pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={circleRef} className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl animate-float"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-gray-700 opacity-20 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gray-100">
                <span className="text-primary">Custom</span> & <span className="text-secondary">Pre-built</span> Apps for Your Business
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8">
                Astrix Group specializes in developing high-quality applications using MongoDB, MySQL, Node.js, Python, and more. We turn your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://billing.astrix.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all text-center inline-block"
                >
                  Get Started
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-dark-200 text-primary border border-primary rounded-lg font-medium hover:bg-dark-300 transition-all text-center inline-block"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-80 md:h-96 bg-gradient-to-r from-gray-800 to-dark-200 rounded-2xl shadow-dark-xl overflow-hidden border border-dark-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="flex justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Cutting-Edge Technology</h3>
                    <p className="text-lg opacity-80">Building the future, one app at a time</p>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-10 left-10 w-12 h-12 bg-white opacity-20 rounded-lg animate-float"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-white opacity-20 rounded-full" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white opacity-20 rounded-md" style={{animationDelay: '2s'}}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
