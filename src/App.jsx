import React from 'react';
import './App.css';
import AppRoutes from './appRoutes';
import ContextAndStates from './data_comps/contextAndStates';

function App() {
  return (
    <React.Fragment>
      <ContextAndStates>

        <AppRoutes />

      </ContextAndStates>
    </React.Fragment>
  );
}

export default App;
