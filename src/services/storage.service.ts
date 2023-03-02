export const getStoredData = <T>(key: string, defaultValue = {} as T): T => {
  if (window.localStorage) {
    try {
      const storedSettingsRaw = window.localStorage.getItem(key);

      if (storedSettingsRaw) {
        return JSON.parse(storedSettingsRaw);
      }
    } catch (e) {
      console.error(e);

      return defaultValue;
    }
  }

  return defaultValue;
};

export const updateStoredData = <T>(key: string, value: T) => {
  if (window.localStorage) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const clearStoredData = (key: string) => {
  if (window.localStorage) {
    window.localStorage.removeItem(key);
  }
};
