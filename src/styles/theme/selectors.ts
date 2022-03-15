import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/store';
import { initialState } from '.';
import { themes } from './themes';
import { isSystemDark } from './utils';

//@alexis: delete demo log
console.log('*** selectors ***');
export const selectTheme = createSelector(
  (state: RootState) => {
    return state.theme || initialState;
  },
  theme => {
    if (theme.selected === 'system') {
      return isSystemDark ? themes.dark : themes.light;
    }
    return themes[theme.selected];
  },
);

export const selectThemeKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.selected,
);
