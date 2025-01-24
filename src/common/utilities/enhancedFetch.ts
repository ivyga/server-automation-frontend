import conf from '../../conf/conf';
import { displayError, displayWaiting, hideWaiting } from '../components/modals/modals';
import { saveObjectToLocalStorage } from './localStoreageHelpers';
import { mockFetch } from './mockFetch';

/**
 * Fetches data from the specified URL while showing a loading overlay saving useful troubleshooting information in local storage.
 * Saves details of the request in localStorage.
 *
 * @param url - The URL to send the request to.
 * @param options - The options for the fetch request, such as method, headers, and body.
 * @returns The response from the fetch request.
 * @throws Throws an error if the fetch request fails.
 */
export const enhancedFetch = async (
  url: string,
  options?: RequestInit
): Promise<Response> => {
  displayWaiting(); // TODO: Improved Waiting Modal
  try {
    let redactedBody: unknown = {};
    try {
      if (options?.body && typeof options.body === 'string') {
        redactedBody = redactPasswords(JSON.parse(options.body));
      }
      saveObjectToLocalStorage('lastFetch', { url, body: redactedBody });
    } catch(err){
      // eslint-disable-next-line no-console
      console.log(err);
      displayError('Error', 'Check console for more information'); // TODO: Improve Error Modal
    }

    if(conf.shouldMockBackend) {
      const mock = await mockFetch(url);
      // TODO: Fix type warning
      return mock;
    }
    const response = await fetch(url, options);
    try {
      const data = await response.clone().json();
      saveObjectToLocalStorage('lastFetch', {
        url,
        body: redactedBody,
        status: response.status,
        data,
      });
    } catch {
      displayError('Error', 'Check console for more information');
    }

    return response;
  } finally {
    hideWaiting();
  }
};

const redactPasswords = (obj: unknown): unknown => {
  if (Array.isArray(obj)) {
    return obj.map((item) => redactPasswords(item));
  }

  if (obj && typeof obj === 'object') {
    const redactedObj: Record<string, unknown> = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in obj) {
      if (key === 'password') {
        redactedObj[key] = '<redacted>';
      } else {
        redactedObj[key] = redactPasswords((obj as Record<string, unknown>)[key]);
      }
    }
    return redactedObj;
  }

  return obj;
};
