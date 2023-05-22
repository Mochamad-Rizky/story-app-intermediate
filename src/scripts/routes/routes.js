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
  '/add-story/guest': {
    is: 'add-story-page-guest',
    component: async () => (await import('../pages/GuestUserMode/GuestUserMode')).default,
  },
  '/not-found': {
    is: 'not-found-page',
    component: async () => (await import('../pages/NotFound/NotFound')).default,
  },
  '/login': {
    is: 'login-page',
    component: async () => (await import('../pages/Login/Login')).default,
  },
  '/register': {
    is: 'register-page',
    component: async () => (await import('../pages/Register/Register')).default,
  },
};

export default pages;
