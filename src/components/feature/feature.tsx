import React from 'react';

import { Container, SubTitle, Title } from './feature.styles';

export const Feature = ({ children, ...restProps }) => <Container {...restProps}>{children}</Container>;
export default Feature;

const FeatureTitle = ({ ...restProps }) => <Title {...restProps} />;
const FeatureSubTitle = ({ children, ...restProps }) => <SubTitle {...restProps}>{children}</SubTitle>;

Feature.Title = FeatureTitle;
Feature.SubTitle = FeatureSubTitle;
