import React from 'react';
import FlightListScreen from './src/screens/FlightListScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <FlightListScreen />
    </Provider>
  );
};


export default App;