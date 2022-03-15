import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
//import { useSelector } from 'react-redux';
import { useAppSelector } from 'app/hooks';
import { selectTheme } from './selectors';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  const theme = useAppSelector(selectTheme);
  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
