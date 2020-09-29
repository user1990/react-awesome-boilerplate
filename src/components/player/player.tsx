import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import ReactDOM from 'react-dom';

import { Button, Close, Container, Inner, Overlay } from './player.styles';

interface IPlayerContext {
  setShowPlayer: Dispatch<SetStateAction<boolean>>;
  showPlayer: boolean;
}

export const PlayerContext = createContext({} as IPlayerContext);

export const Player = ({ children, ...restProps }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
};

const PlayerVideo = ({ src }) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} data-test-id="player">
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body,
      )
    : null;
};
const PlayerButton = ({ ...restProps }) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer(showPlayer => !showPlayer)} {...restProps}>
      Play
    </Button>
  );
};

Player.Video = PlayerVideo;
Player.Button = PlayerButton;

export default Player;
