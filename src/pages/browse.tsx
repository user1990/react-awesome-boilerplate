import React from 'react';

import BrowseContainer from '../containers/browse-container';
import { useContent } from '../hooks/use-content';
import { selectionFilter } from '../utils/selection-filter';

export const BrowsePage = () => {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides} />;
};

export default BrowsePage;
