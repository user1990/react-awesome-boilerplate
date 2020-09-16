import { RouterItem } from '../common/models/router';
import Card from '../components/card';
import List from '../components/list';
import FormPage from '../page/form';
import HomePage from '../page/home';
import LoginPage from '../page/login';

export const publicPaths: RouterItem[] = [
  { exact: true, path: '/', component: HomePage },
  { exact: false, path: '/login', component: LoginPage },
  { exact: false, path: '/card', component: Card },
  { exact: false, path: '/list', component: List },
  { exact: false, path: '/form', component: FormPage },
  // { exact: true, path: '/register', component: RegisterPage },
];
