/**
 * Pauses the execution for a specified amount of time.
 *
 * @param {number} [milliseconds=2000] - The number of milliseconds to sleep. Defaults to 2000ms if not provided.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 */
export const sleep = async (milliseconds: number = 2000): Promise<void> => {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  };
