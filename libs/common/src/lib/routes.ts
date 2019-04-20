export const ROUTES = {
  users: {
    root: () => 'users',
    create: () => 'users',
    list: () => 'users',
    remove: (id: number) => `users/${id}`,
    get: (id: number) => `users/${id}`,
    update: (id: number) => `users/${id}`
  },
  words: {
    root: () => 'words',
    create: () => 'words',
    list: () => 'words',
    get: (id: number) => `words/${id}`,
    remove: (id: number) => `words/${id}`,
    update: (id: number) => `words/${id}`
  },
  info: () => 'info'
};
