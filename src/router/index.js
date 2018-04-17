import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import User from '@/components/User';
import Blog from '@/components/Blog';
import Favorate from '@/components/Favorate';
import Href from '@/components/Href';
import Post from '@/components/Post';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/post',
      component: Post,
      children: [
        {
          path: '',
          redirect: '/',
        },
        {
          path: 'blog',
          name: 'Blog',
          component: Blog,
          meta: { requiresAuth: true },
        },
        {
          path: 'href',
          name: 'Href',
          component: Href,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/user',
      children: [
        {
          path: '',
          name: 'User',
          component: User,
          meta: { requiresAuth: true },
        },
        {
          path: 'favorate',
          name: 'Favorate',
          component: Favorate,
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
