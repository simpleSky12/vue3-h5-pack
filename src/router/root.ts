export default [
  {
    path: '/',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: 'shi',
    component: () => import('@/views/shi/index.vue'),
  },
];
