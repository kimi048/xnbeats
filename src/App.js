import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';

import ReduxStore from './components/store';

const App = () => {
    return (
      <Provider store={ReduxStore()}>
          <Routes/>
      </Provider>
    )
}

export default App;
