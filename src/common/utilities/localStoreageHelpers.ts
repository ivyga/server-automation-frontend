/* eslint-disable no-console */

/**
 * Saves an object to `localStorage` after serializing it into a JSON string and returns true on success.
 */
export const saveObjectToLocalStorage = (key: string, object: object): boolean => {
    try {
        const serializedObject = JSON.stringify(object);
        localStorage.setItem(key, serializedObject);
        return true;
    } catch (error) {
        console.error('Error saving object to localStorage:', error);
        return false;
    }
};

/**
 * Retrieves and deserializes an object from `localStorage` or null on failure.
 */
export const getObjectFromLocalStorage = (key: string): object | null => {
    try {
        const serializedObject = localStorage.getItem(key);
        if (serializedObject === null) {
            return null;
        }
        const parsedObject = JSON.parse(serializedObject);
        return parsedObject;
    } catch (error) {
        console.error('Error retrieving object from localStorage:', error);
        return null;
    }
};

/**
 * Removes an object from `localStorage` based on the specified key and returns true on success.
 */
export const removeObjectFromLocalStorage = (key: string):boolean => {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('Error removing object from localStorage:', error);
        return false;
    }
};

/**
 * Retrieves a string from `localStorage` for the specified key. If the key does not exist, returns an empty string.
 */
export const getSafeLocalStorageString = (key: string): string => {
    return localStorage.getItem(key) || '';
};

/**
 * Saves a string to `localStorage` for the specified key returning true on success.
 */
export const setLocalStorageString = (key: string, value: string): boolean => {
    try {
        localStorage.setItem(key, value);
        return true;
    } catch (error) {
        console.error('Error saving string to localStorage:', error);
        return false;
    }
};
