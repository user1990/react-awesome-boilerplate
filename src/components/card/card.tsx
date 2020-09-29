import React, { createContext, SetStateAction, Dispatch, useContext, useState } from 'react';

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
} from './card.styles';

interface IFeatureContext {
  setShowFeature: Dispatch<SetStateAction<boolean>>;
  setItemFeature: Dispatch<SetStateAction<boolean>>;
  showFeature?: boolean;
  itemFeature?: any;
}

export const FeatureContext = createContext({} as IFeatureContext);

const Card = ({ children, ...restProps }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
};

const CardGroup = ({ children, ...restProps }) => <Group {...restProps}>{children}</Group>;
const CardTitle = ({ children, ...restProps }) => <Title {...restProps}>{children}</Title>;
const CardSubTitle = ({ children, ...restProps }) => <SubTitle {...restProps}>{children}</SubTitle>;
const CardText = ({ children, ...restProps }) => <Text {...restProps}>{children}</Text>;
const CardEntities = ({ children, ...restProps }) => <Entities {...restProps}>{children}</Entities>;
const CardMeta = ({ children, ...restProps }) => <Meta {...restProps}>{children}</Meta>;
const CardImage = ({ ...restProps }) => <Image {...restProps} />;
const CardFeature = ({ children, category, ...restProps }) => {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

  return showFeature ? (
    <Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null;
};
const CardItem = ({ item, children, ...restProps }) => {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Group = CardGroup;
Card.Title = CardTitle;
Card.SubTitle = CardSubTitle;
Card.Text = CardText;
Card.Entities = CardEntities;
Card.Meta = CardMeta;
Card.Item = CardItem;
Card.Image = CardImage;
Card.Feature = CardFeature;

export default Card;
