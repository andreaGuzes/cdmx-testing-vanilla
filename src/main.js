/* eslint-disable import/no-unresolved */

import { bienvenida } from './components/welcome.js';
import { posts } from './components/posts.js';
import { createPosts } from './components/createposts.js';
import * as firebase from './lib/firebase.js';

const appElement = document.getElementById('app');
const sesion = document.getElementById('sesion');

// router
// let welcome=bienvenida();
// let post= posts();
// let muro=createPosts();

export const routes = {
  '/': bienvenida,
  '/posts': posts,
  '/createPosts': createPosts,
};

const welcomeComponent = routes[window.location.pathname];
welcomeComponent(appElement, firebase);

function onNavigate(pathname) {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  const component = routes[pathname];
  component(appElement, firebase);
}
