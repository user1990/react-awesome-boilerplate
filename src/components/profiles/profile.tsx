import React from 'react';

import { Container, Title, List, Item, Picture, Name } from './profiles.styles';

export const Profiles = ({ children, ...restProps }) => <Container {...restProps}>{children}</Container>;

const ProfilesTitle = ({ children, ...restProps }) => <Title {...restProps}>{children}</Title>;
const ProfilesList = ({ children, ...restProps }) => <List {...restProps}>{children}</List>;
const ProfilesUser = ({ children, ...restProps }) => <Item {...restProps}>{children}</Item>;
const ProfilesPicture = ({ src, ...restProps }) => (
  <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />
);
const ProfilesName = ({ children, ...restProps }) => <Name {...restProps}>{children}</Name>;

Profiles.Title = ProfilesTitle;
Profiles.List = ProfilesList;
Profiles.User = ProfilesUser;
Profiles.Picture = ProfilesPicture;
Profiles.Name = ProfilesName;

export default Profiles;
