import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import User from '@/components/User';
import Blog from '@/components/Blog';
import Favorate from '@/components/Favorate';
import Href from '@/components/Href';
import Post from '@/components/Post';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/post',
      name: 'Post',
      component: Post,
      chirldren: [
        {
          path: 'blog',
          name: 'Blog',
          component: Blog,
        },
        {
          path: 'href',
          name: 'Href',
          component: Href,
        },
      ],
    },
    {
      path: '/user',
      chirldren: [
        {
          path: '',
          name: 'User',
          component: User,
        },
        {
          path: 'favorate',
          name: 'Favorate',
          component: Favorate,
        },
      ],
    },
  ],
});
