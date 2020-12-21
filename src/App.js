import { useReducer } from 'react';
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from 'react-router-dom';
import routes from "./routes";
import reducer from './reducers';
import Context from './context';
import './App.css';

import Header from '@/components/header';

function App() {
  const [state, dispatch] = useReducer(reducer, {
    player: {
      players: [],
      groupA: [],
      groupB: []
    }
  });
  return (
    <Context.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Header />
        {renderRoutes(routes)}
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
