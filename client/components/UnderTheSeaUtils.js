/**
 * Under the Sea Util Functions
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

/**
 * Function which helps load all files
 * from a certain folder
 *
 * @param {*} requireContext
 */
export const importAllFiles = requireContext => {
  requireContext.keys().forEach(file => {
    requireContext(file);
  });
};
