import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import rootReducer from './reducers';

type ModuleType = typeof import('redux-flipper');

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    if (__DEV__)
      import('redux-flipper')
        .then((module: ModuleType) => module.default)
        .then(createDebugger => {
          return getDefaultMiddleware().concat(createDebugger());
        });

    return getDefaultMiddleware();
  },
});
export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
