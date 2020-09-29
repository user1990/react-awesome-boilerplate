import React, { Dispatch, SetStateAction, useContext, useState } from 'react';

import { Container, Body, Frame, Header, Inner, Item, Title } from '../accordion/accordion.styles';

interface IToggleContext {
  setToggleShow: Dispatch<SetStateAction<boolean>>;
  toggleShow?: boolean;
}

const ToggleContext = React.createContext({} as IToggleContext);

export const Accordion = ({ children, ...restProps }) => (
  <Container {...restProps}>
    <Inner>{children}</Inner>
  </Container>
);

const AccordionTitle = ({ children, ...restProps }) => <Title {...restProps}>{children}</Title>;
const AccordionFrame = ({ children, ...restProps }) => <Frame {...restProps}>{children}</Frame>;
const AccordionItem = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>;
    </ToggleContext.Provider>
  );
};

const AccordionHeader = ({ children, ...restProps }) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow(toggleShow => !toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

const AccordionBody = ({ children, ...restProps }) => {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

Accordion.Title = AccordionTitle;
Accordion.Header = AccordionHeader;
Accordion.Item = AccordionItem;
Accordion.Frame = AccordionFrame;
Accordion.Body = AccordionBody;

export default Accordion;
