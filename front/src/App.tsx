import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from '@/store';
import AppInner from '@/AppInner';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <AppInner />
    </NavigationContainer>
  </Provider>
);

export default App;
