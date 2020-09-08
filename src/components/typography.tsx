import styled from 'styled-components';

import { MOBILE_BREAKPOINT } from '../data/constants';

const TypographyStyles = `
  margin: 0;
  font-family: 'DIN Next', sans-serif;
`;

interface TypographyProps {
  lighter?: boolean;
  bolder?: boolean;
  isUppercase?: boolean;
  isMedium?: boolean;
  isBold?: boolean;
  isItalic?: boolean;
  isNoWrap?: boolean;
  fontSize?: string;
}

const styleHelper = (props: TypographyProps) => {
  let style = '';
  let fontFamily = 'ApfelGrotezk';

  if (props.isMedium) {
    fontFamily = 'TitlingGothicFBWide-medium';
  }

  if (props.isBold) {
    fontFamily = 'TitlingGothicFBWide';
  }

  style += `font-family: ${fontFamily};`;

  if (props.isNoWrap) {
    style += `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`;
  }

  return style;
};

export const HeaderOne = styled.h1`
  ${TypographyStyles}
  font-weight: ${(props: TypographyProps) => (props.lighter === true ? '300' : props.bolder === true ? '900' : 'bold')};
  font-size: 40px;
  line-height: 48px;
  text-transform: ${(props: TypographyProps) => (props.isUppercase ? 'uppercase' : 'none')};
  ${props => styleHelper(props)}

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 28px;
    line-height: 34px;
  }
`;

export const HeaderTwo = styled.h2`
  ${TypographyStyles}
  font-weight: ${(props: TypographyProps) => (props.lighter === true ? '300' : props.bolder === true ? '900' : 'bold')};
  font-size: 24px;
  line-height: 24px;
  text-transform: ${(props: TypographyProps) => (props.isUppercase ? 'uppercase' : 'none')};
  ${props => styleHelper(props)}

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 20px;
    line-height: 20px;
  }
`;

export const HeaderThree = styled.h3`
  ${TypographyStyles}
  font-weight: ${(props: TypographyProps) => (props.lighter === true ? '300' : props.bolder === true ? '900' : 'bold')};
  font-size: 20px;
  font-style: ${(props: TypographyProps) => (props.isItalic ? 'italic' : 'none')};
  line-height: 28px;
  text-transform: ${(props: TypographyProps) => (props.isUppercase ? 'uppercase' : 'none')};
  ${props => styleHelper(props)}

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const HeaderFour = styled.h4<any>`
  ${TypographyStyles}
  font-weight: ${(props: TypographyProps) => (props.lighter === true ? '300' : props.bolder === true ? 'bold' : '500')};
  font-size: 18px;
  letter-spacing: 0.2rem;
  line-height: 28px;
  text-transform: ${(props: TypographyProps) => (props.isUppercase ? 'uppercase' : 'none')};
  ${props => styleHelper(props)}
`;

export const HeaderFive = styled.h5`
  ${TypographyStyles}
  font-weight: ${(props: TypographyProps) => (props.lighter === true ? '300' : props.bolder === true ? 'bold' : '500')};
  font-size: 16px;
  line-height: 24px;
  ${props => styleHelper(props)}
`;

export const HeaderSix = styled.h6`
  ${TypographyStyles}
  font-weight: ${(props: TypographyProps) => (props.lighter === true ? '300' : props.bolder === true ? 'bold' : '500')};
  font-size: 14px;
  line-height: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${props => styleHelper(props)}
`;

export const ButtonText = styled.h6`
  ${TypographyStyles}
  font-family: 'ApfelGrotezk';
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-transform: ${(props: TypographyProps) => (props.isUppercase ? 'uppercase' : 'none')};
`;

export const DisplayHeaderOne = styled.h1`
  ${TypographyStyles}
  font-weight: 800;
  font-size: 64px;
  line-height: 67px;
`;

export const DisplayHeaderTwo = styled.h2`
  ${TypographyStyles}
  font-weight: 800;
  font-size: 56px;
  line-height: 51px;
`;

export const DisplayHeaderThree = styled.h3`
  ${TypographyStyles}
  font-size: 32px;
  line-height: 40px;
  text-transform: ${(props: TypographyProps) => (props.isUppercase ? 'uppercase' : 'none')};
  ${props => styleHelper(props)}

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const DisplayHeaderFour = styled.h4`
  ${TypographyStyles}
  font-weight: ${(props: TypographyProps) => (props.lighter === true ? '300' : props.bolder === true ? 'bold' : '500')};
  font-size: 30px;
  line-height: 38px;
  text-transform: ${(props: TypographyProps) => (props.isUppercase ? 'uppercase' : 'none')};
  ${props => styleHelper(props)}

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const DisplayHeaderFive = styled.h5`
  ${TypographyStyles}
  font-weight: ${(props: TypographyProps) => (props.lighter === true ? '300' : props.bolder === true ? 'bold' : '500')};
  font-size: 26px;
  line-height: 34px;
  text-transform: ${(props: TypographyProps) => (props.isUppercase ? 'uppercase' : 'none')};
  ${props => styleHelper(props)}

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const BodyLead = styled.p`
  ${TypographyStyles}
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
`;

export const BodyBase = styled.p`
  ${TypographyStyles}
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
`;

export const BodyLeadLarge = styled.p`
  ${TypographyStyles}
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
`;

export const BodyBaseLarge = styled.p`
  ${TypographyStyles}
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
`;

export const UppercaseSpan = styled.span`
  text-transform: uppercase;
`;
