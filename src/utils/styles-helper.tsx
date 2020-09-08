export const setFlex = ({ x = 'center', y = 'center' } = {}): string =>
  `display:flex;align-items:${y};justify-content:${x}`;

export const setRem = (number = 16): string => {
  return `${number / 16}rem`;
};

export const setBorder = ({ width = '2px', style = 'solid', color = 'black' } = {}) =>
  `border:${width} ${style} ${color}`;

export const setFont = {
  apfelGrotezk: "font-family: 'ApfelGrotezk'",
  bogleWeb: "font-family: 'Bogle Web'",
  montserrat: "font-family: 'Montserrat'",
  titlingGothicFBWide: "font-family: 'TitlingGothicFBWide'",
  titlingGothicFBWideMedium: "font-family: 'TitlingGothicFBWide-medium'",
};
