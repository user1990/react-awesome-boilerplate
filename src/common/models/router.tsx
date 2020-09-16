import { ReactNode } from 'react';

export interface RouterItem {
  path: string;
  component: React.FC<JSX.Element>;
  exact: boolean;
  title?: string;
  icon?: string;
}
