const api = (() => {
  const getStories = () =>
    new Promise((resolve, reject) => {
      const fetchTimeoutInSecond = 3000; // for demo purpose only

      setTimeout(async () => {
        try {
          const stories = await import('../data/DATA.json');
          const storiesJson = await stories.default;
          resolve(storiesJson);
        } catch (error) {
          reject(error);
        }
      }, fetchTimeoutInSecond);
    });

  return {
    getStories,
  };
})();

export default api;
