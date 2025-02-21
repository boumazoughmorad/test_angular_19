export const setItem = <T>(key: string, value: T): void => {
    if (typeof window !== "undefined") { 
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
    }
  
  };
  export const getItem = <T>(key: string): T | undefined => {
    if (typeof window !== "undefined") { 
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) as T : undefined;
      } catch (error) {
        console.error("Error reading from localStorage:", error);
        return undefined;
      }
    }
    return undefined;
  };
  
  
  export const removeItem = (key: string): void => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from localStorage:", error);
    }
  };
  