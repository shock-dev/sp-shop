export const getStorageItem = (name: string) => {
  const saved = localStorage.getItem(name);

  if (!saved) {
    return null;
  }

  return JSON.parse(saved);
};

export const setStorageItem = (name: string, payload: any) => {
  localStorage.setItem(name, JSON.stringify(payload));
};
