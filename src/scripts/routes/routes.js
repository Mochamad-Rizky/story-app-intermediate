const pages = {
  '/': {
    is: 'dashboard-page',
    component: async () => (await import('../pages/Dashboard/Dashboard')).default,
  },
  '/dashboard': {
    is: 'dashboard-page',
    component: async () => (await import('../pages/Dashboard/Dashboard')).default,
  },
  '/add-story': {
    is: 'add-story-page',
    component: async () => (await import('../pages/AddStory/AddStory')).default,
  },
  '/not-found': {
    is: 'not-found-page',
    component: async () => (await import('../pages/NotFound/NotFound')).default,
  },
};

export default pages;
