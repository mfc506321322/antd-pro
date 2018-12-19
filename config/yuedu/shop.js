export default {
  path: '/shop',
  name: 'shop',
  icon: 'shop',
  routes: [
    {
      path: '/shop/list',
      name: 'first',
      component: './Shop/List.js',
      icon: 'book'
    }
    // {
    //   path: '/shop/second',
    //   name: 'second',
    //   component:  './index.js',
    // }
  ]
};
