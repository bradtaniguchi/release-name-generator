export const ROUTES = {
  users: {
    get: () => 'users',
    create: () => 'users',
    remove: (id: number) => `users/${id}`,
    list: () => 'users',
    update: (id: number) => `users/${id}`
  },
  words: {
    get: () => 'words',
    create: () => 'words',
    remove: (id: number) => `words/${id}`,
    list: () => 'words',
    update: (id: number) => `words/${id}`
  }
};
