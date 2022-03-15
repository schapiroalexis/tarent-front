import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getThemeFromStorage } from './utils';
//@alexis
//import { ThemeKeyType, ThemeState } from './types';
import { themes } from './themes';

export type ThemeKeyType = keyof typeof themes | 'system';

export interface ThemeState {
  selected: ThemeKeyType;
}

export const initialState: ThemeState = {
  selected: getThemeFromStorage() || 'system',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeKeyType>) {
      state.selected = action.payload;
    },
  },
});

export const { actions: themeActions, reducer } = themeSlice;

/* export const useThemeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
}; */

export default themeSlice.reducer;
