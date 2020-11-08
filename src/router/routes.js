const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: 'accounting',
    children: [
      { path: 'accounting', component: () => import('pages/Index.vue') },
      { path: 'detail', component: () => import('pages/Detail.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
