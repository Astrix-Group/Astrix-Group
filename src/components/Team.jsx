import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { DISCORD_IDS, getProfileImagePath } from '../utils/discordUtils';

const teamMembers = [
  {
    name: 'LegendYt4k',
    role: 'Founder',
    discordId: DISCORD_IDS.LEGEND_YT4K,
    discordColor: '#ED4245', // Discord red color
    description: 'Visionary leader with expertise in software development and business strategy.',
    social: {
      discord: `https://discord.com/users/${DISCORD_IDS.LEGEND_YT4K}`,
    },
  },
  {
    name: 'itsoffkey',
    role: 'Owner',
    discordId: DISCORD_IDS.ITSOFFKEY,
    discordColor: '#57F287', // Discord green color
    description: 'Technical expert with deep knowledge in database systems and backend development.',
    social: {
      discord: `https://discord.com/users/${DISCORD_IDS.ITSOFFKEY}`,
    },
  },
  {
    name: 'Italia Troller',
    role: 'Co-Owner',
    discordId: DISCORD_IDS.ITALIA_TROLLER,
    discordColor: '#ED4245', // Discord red color
    description: 'Creative mind behind our user experience and frontend development strategies.',
    social: {
      discord: `https://discord.com/users/${DISCORD_IDS.ITALIA_TROLLER}`,
    },
  },
  {
    name: 'Chirag Gamer',
    role: 'Co-Owner',
    discordId: DISCORD_IDS.CHIRAG_GAMER,
    discordColor: '#5865F2', // Discord blue color
    description: 'Strategic leader with expertise in game development and innovative application design.',
    social: {
      discord: `https://discord.com/users/${DISCORD_IDS.CHIRAG_GAMER}`,
    },
  },
];

const TeamMemberCard = ({ member, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-dark-200 rounded-xl overflow-hidden shadow-dark-md hover:shadow-dark-lg border border-dark-300 transition-all"
    >
      <div className="relative overflow-hidden group">
        <img
          src={getProfileImagePath(member.discordId)}
          alt={member.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-center space-x-4">
              <a href={member.social.discord} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-gray-200">{member.name}</h3>
        <p className="text-primary font-medium mb-3">{member.role}</p>
        <p className="text-gray-400">{member.description}</p>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-dark-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-200">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            The talented individuals behind Astrix Group who make everything possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
