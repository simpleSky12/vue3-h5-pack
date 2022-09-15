export default [
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/info',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: 'shi',
    component: () => import('@/views/shi/index.vue'),
  },
];
