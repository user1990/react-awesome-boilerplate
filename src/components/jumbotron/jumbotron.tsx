import React from 'react';
import { Item, Inner, Container, Pane, Title, SubTitle, Image } from './jumbotron.styles';

export const Jumbotron = ({ children, direction = 'row', ...restProps }) => (
  <Item {...restProps}>
    <Inner direction={direction}>{children}</Inner>
  </Item>
);

const JumbotronContainer = ({ children, ...restProps }) => <Container {...restProps}>{children}</Container>;
const JumbotronPane = ({ children, ...restProps }) => <Pane {...restProps}>{children}</Pane>;
const JumbotronTitle = ({ children, ...restProps }) => <Title {...restProps}>{children}</Title>;
const JumbotronSubTitle = ({ children, ...restProps }) => <SubTitle {...restProps}>{children}</SubTitle>;
const JumbotronImage = ({ ...restProps }) => <Image {...restProps} />;

Jumbotron.Container = JumbotronContainer;
Jumbotron.Pane = JumbotronPane;
Jumbotron.Title = JumbotronTitle;
Jumbotron.SubTitle = JumbotronSubTitle;
Jumbotron.Image = JumbotronImage;

export default Jumbotron;
