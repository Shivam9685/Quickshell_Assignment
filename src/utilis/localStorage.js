export const saveState = (key, state) => {
    localStorage.setItem(key, JSON.stringify(state));
};

export const loadState = (key) => {
    const state = localStorage.getItem(key);
    return state ? JSON.parse(state) : null;
};
