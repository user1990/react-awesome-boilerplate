import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';

import {
  Background,
  ButtonLink,
  Dropdown,
  Feature,
  FeatureCallOut,
  Frame,
  Group,
  Logo,
  Picture,
  PlayButton,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  Text,
} from './header.styles';

interface HeaderProps {
  bg: boolean;
  children: React.ReactNode;
}

export const Header = ({ bg = true, children, ...restProps }: HeaderProps | any) =>
  bg ? (
    <Background data-test-id="header-bg" {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
const HeaderFrame = ({ children, ...restProps }) => <Frame {...restProps}>{children}</Frame>;
const HeaderGroup = ({ children, ...restProps }) => <Group {...restProps}>{children}</Group>;
const HeaderLogo = ({ to, ...restProps }) => (
  <ReachRouterLink to={to}>
    <Logo {...restProps} />
  </ReachRouterLink>
);
const HeaderSearch = ({ searchTerm, setSearchTerm, ...restProps }) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)} data-test-id="search-click">
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-test-id="search-input"
      />
    </Search>
  );
};
const HeaderProfile = ({ children, ...restProps }) => <Profile {...restProps}>{children}</Profile>;
const HeaderFeature = ({ children, ...restProps }) => <Feature {...restProps}>{children}</Feature>;
const HeaderDropdown = ({ children, ...restProps }) => <Dropdown {...restProps}>{children}</Dropdown>;
const HeaderTextLink = ({ children, ...restProps }) => <HeaderTextLink {...restProps}>{children}</HeaderTextLink>;
const HeaderPicture = ({ src, ...restProps }) => <Picture {...restProps} src={`/images/users/${src}.png`} />;
const HeaderPlayButton = ({ children, ...restProps }) => <PlayButton {...restProps}>{children}</PlayButton>;
const HeaderFeatureCallOut = ({ children, ...restProps }) => <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
const HeaderText = ({ children, ...restProps }) => <Text {...restProps}>{children}</Text>;
const HeaderButtonLink = ({ children, ...restProps }) => <ButtonLink {...restProps}>{children}</ButtonLink>;

Header.Frame = HeaderFrame;
Header.Search = HeaderSearch;
Header.Profile = HeaderProfile;
Header.Feature = HeaderFeature;
Header.Dropdown = HeaderDropdown;
Header.TextLink = HeaderTextLink;
Header.Picture = HeaderPicture;
Header.Group = HeaderGroup;
Header.Logo = HeaderLogo;
Header.PlayButton = HeaderPlayButton;
Header.FeatureCallOut = HeaderFeatureCallOut;
Header.Text = HeaderText;
Header.ButtonLink = HeaderButtonLink;

export default Header;
