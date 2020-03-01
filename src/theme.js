import React from 'react';
import get from 'lodash.get';
import { ThemeProvider, css } from 'styled-components';

const theme = {
  palette: {
    primary: '#00695c',
    primaryL: '#439889',
    primaryD: '#003d33',
    secondary: '#fff',
  },
};

Object.assign(theme.palette, {
  secondaryL: theme.palette.secondary,
  secondaryD: theme.palette.secondary,
  textP: theme.palette.secondary,
  textS: theme.palette.primaryD,
});

export const themed = prop => props => get(props.theme, prop);
export const primary = css`
  background-color: ${themed('palette.primary')};
  color: ${themed('palette.textP')};
`;
export const secondary = css`
  background-color: ${themed('palette.secondary')};
  color: ${themed('palette.textS')};
`;

export const Theme = props => <ThemeProvider {...{ theme, ...props }} />;
