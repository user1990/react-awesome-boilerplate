import React from 'react';

import { Header } from '../components/header/header';
import Profiles from '../components/profiles/profile';
import * as ROUTES from '../constants/routes';
import logo from '../assets/logo.svg';

export const SelectProfileContainer = ({ user, setProfile }) => (
  <>
    <Header bg={false}>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
      </Header.Frame>
    </Header>

    <Profiles>
      <Profiles.Title>Who's watching?</Profiles.Title>
      <Profiles.List>
        <Profiles.User
          onClick={() => setProfile({ displayName: user?.displayName, photoURL: user?.photoURL })}
          data-test-id="user-profile"
        >
          <Profiles.Picture src={user?.photoURL} />
          <Profiles.Name>{user?.displayName}</Profiles.Name>
        </Profiles.User>
      </Profiles.List>
    </Profiles>
  </>
);

export default SelectProfileContainer;
