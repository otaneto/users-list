import Vue from 'vue';
import Router from 'vue-router';
import UsersList from './views/UsersList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {
        name: 'UsersList',
      },
    },
    {
      path: '/users-list',
      name: 'UsersList',
      component: UsersList,
    },
  ],
});
