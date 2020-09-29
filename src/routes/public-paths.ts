import { RouterItem } from '../common/models/router-interface';
import { HOME, SIGN_IN, SIGN_UP } from '../constants/routes';
import HomePage from '../pages/home';
import SignInPage from '../pages/sign-in';
import SignUpPage from '../pages/sign-up';

export const publicPaths: RouterItem[] = [
  { exact: true, path: HOME, component: HomePage },
  { exact: true, path: SIGN_IN, component: SignInPage },
  { exact: true, path: SIGN_UP, component: SignUpPage },
];
