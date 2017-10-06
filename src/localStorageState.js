const STORAGE_KEY = 'issueTrackerState';

export const saveState = state => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const loadState = () => {
  try {
    const state = localStorage.getItem(STORAGE_KEY);

    if (state === null) {
      return undefined;
    }

    return JSON.parse(state);
  } catch (err) {
    return undefined;
  }
};
