export const setLocalStorageValue = (key: string, value: any): void => {
  try {
    const valueToStore =
      typeof value === 'object' ? JSON.stringify(value) : value;
    localStorage.setItem(key, valueToStore);
  } catch (error) {
    console.error(`Error setting local storage item: ${error}`);
  }
};

export const getLocalStorageValue = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);

    return item ? (item as T) : null;
  } catch (error) {
    console.error(`Error getting local storage item: ${error}`);
    return null;
  }
};

export const clearLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing local storage item: ${error}`);
  }
};
