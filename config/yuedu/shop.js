export default {
  path: '/shop',
  name: 'shop',
  icon: 'shop',
  routes: [
    {
      path: '/shop/list',
      name: 'first',
      component: './Shop/List.js',
      icon: 'read'
    },
    {
      path: '/shop/second',
      name: 'second',
      component:  './Shop/Bookform.js',
      icon: 'book'
    }
  ]
};
