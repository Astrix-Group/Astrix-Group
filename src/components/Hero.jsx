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
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={circleRef} className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl animate-float"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-accent opacity-20 blur-2xl animate-rotate"></div>
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 rounded-full bg-primary opacity-10 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-10 left-1/2 w-24 h-24 rounded-full bg-secondary opacity-15 blur-2xl animate-float" style={{animationDelay: '1s'}}></div>

        {/* Particle effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
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
                <span className="gradient-text shimmer">Custom & Pre-built</span> <br className="hidden md:block" />
                <span className="relative inline-block">Apps for Your Business
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                </span>
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
                  className="px-8 py-3 bg-primary text-white rounded-lg font-medium shadow-lg hover:shadow-glow transition-all text-center inline-block"
                >
                  Get Started
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 glass text-white border border-gray-700 rounded-lg font-medium hover:border-primary transition-all text-center inline-block"
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
              <div className="w-full h-80 md:h-96 glass rounded-2xl shadow-dark-xl overflow-hidden border border-gray-700 relative">
                {/* Code window header */}
                <div className="bg-dark-200 h-8 flex items-center px-4 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
                  </div>
                  <div className="text-xs text-gray-400 mx-auto">app.jsx</div>
                </div>

                <div className="absolute inset-0 mt-8 flex items-center justify-center">
                  <div className="text-white text-center p-6 w-full">
                    <div className="flex justify-center mb-6">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Cutting-Edge Technology</h3>
                    <p className="text-gray-300">Building the future, one app at a time</p>

                    {/* Code snippet */}
                    <div className="mt-6 bg-dark-100 rounded-lg p-4 text-left overflow-hidden">
                      <pre className="text-xs md:text-sm text-gray-300 font-mono">
                        <code>
                          <span className="text-purple-400">import</span> <span className="text-blue-400">React</span> <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;<br/>
                          <br/>
                          <span className="text-purple-400">const</span> <span className="text-yellow-400">App</span> <span className="text-purple-400">=</span> () <span className="text-purple-400">{"=>"};</span> {'{'};<br/>
                          <span className="text-gray-500 pl-4">// Your next great app</span><br/>
                          <span className="text-purple-400 pl-4">return</span> <span className="text-blue-400 pl-2">&lt;div&gt;</span>Hello World<span className="text-blue-400">&lt;/div&gt;</span>;<br/>
                          {'}'}<br/>
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-10 left-10 w-12 h-12 bg-primary opacity-10 rounded-lg animate-float"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-secondary opacity-10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-accent opacity-10 rounded-md animate-float" style={{animationDelay: '2s'}}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
