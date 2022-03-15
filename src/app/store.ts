import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import themeReducer from 'styles/theme/index';
import coursesReducer from 'features/Courses/coursesSlice';
import schedulesReducer from 'features/Schedules/schedulesSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    courses: coursesReducer,
    schedules: schedulesReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
