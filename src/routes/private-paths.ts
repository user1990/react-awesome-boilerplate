import { RouterItem } from '../common/models/router-interface';
import { BROWSE } from '../constants/routes';
import BrowsePage from '../pages/browse';

export const privatePaths: RouterItem[] = [{ exact: true, path: BROWSE, component: BrowsePage }];
