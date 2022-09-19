const loadState = (name = 'state') => {
  try {
    const savedState = localStorage.getItem(name);
    if (savedState === null) {
      return undefined;
    }

    return JSON.parse(savedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state, name = 'state') => {
  try {
    const workingState = JSON.stringify(state);

    localStorage.setItem(name, workingState);
  } catch (err) {
    console.log(err);
  }
};

export { loadState, saveState };
