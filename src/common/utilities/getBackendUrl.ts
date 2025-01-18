// eslint-disable-next-line import/extensions
import conf from "../../conf/conf.js";

/**
 * Ensures the conf.backendUrl does not end with a '/'.
 * (Historically, developers tend to be inconsistent about this.)
 *
 * @returns {string} The sanitized conf.backendUrl without a trailing '/'.
 */
export const getBackendUrl = (): string => {
    const url = conf.backendUrl;
    if (!url) {
      throw new Error('URL must be a non-empty string');
    }
    return url.endsWith('/') ? url.slice(0, -1) : url;
  };