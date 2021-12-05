const margins = {
  small: '.5rem',
  legular: '1rem',
  large: '2rem',
};

const paddings = {
  small: '.5rem',
  legular: '1rem',
  large: '2rem',
};

const fonts = {
  family: `'Dosis', sans-serif`,
  size: {
    micro: '0.875rem',
    small: '1rem',
    regular: '1.125rem',
    medium: '1.75rem',
    large: '3rem',
    title: '6rem',
  },
  weight: {
    regular: 400,
    bold: 700,
  },
};

const colors = {
  pale: '#faf4e6',
  orange: '#e82f17',
  black: '#08090b',
  white: '#ffffff',
};

const size = {
  mobile: '26.563rem',
  tablet: '48rem',
  desktop: '90rem',
};

const devices = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktop: `@media only screen and (max-width: ${size.desktop})`,
};

export const mainTheme = {
  margins,
  paddings,
  fonts,
  colors,
  devices,
};
