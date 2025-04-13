/**
 * This script prints out the Discord user IDs for team members
 * Run with: node scripts/discord-ids.js
 */

const teamMembers = [
  {
    name: 'LegendYt4k',
    role: 'Founder',
    discordId: '1186473897240039444',
  },
  {
    name: 'itsoffkey',
    role: 'Owner',
    discordId: '1066372046583517264',
  },
  {
    name: 'Italia Troller',
    role: 'Co-Owner',
    discordId: '1072043412779433994',
  },
  {
    name: 'Chirag Gamer',
    role: 'Co-Owner',
    discordId: '761886210120744990',
  },
];

console.log('Astrix Group Team - Discord User IDs\n');

teamMembers.forEach(member => {
  console.log(`${member.name} (${member.role}):`);
  console.log(`Discord ID: ${member.discordId}`);
  console.log(`Profile Image Filename: ${member.discordId}.webp`);
  console.log('');
});

console.log('To add profile images, place them in the public/profile-images/ directory');
console.log('with the filename format: [Discord User ID].webp');
