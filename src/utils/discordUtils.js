// Discord utility functions

/**
 * Discord user IDs for team members
 */
export const DISCORD_IDS = {
  LEGEND_YT4K: '1186473897240039444',
  ITSOFFKEY: '1066372046583517264',
  ITALIA_TROLLER: '1072043412779433994',
  CHIRAG_GAMER: '761886210120744990'
};

/**
 * Get the profile image path for a team member
 * @param {string} userId - Discord user ID
 * @returns {string} - Path to the profile image
 */
export const getProfileImagePath = (userId) => {
  return `/profile-images/${userId}.webp`;
};
