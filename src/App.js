import { useReducer } from 'react';
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from 'react-router-dom';
import routes from "./routes";
import reducer from './reducers';
import Context from './context';
import './App.css';
import { GlobalStyle } from './reset';
import { CommonStyle } from './assets/global-style';

import Header from '@/components/header';
import Footer from '@/components/footer';

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
      <GlobalStyle />
      <CommonStyle />
      <BrowserRouter>
        <Header />
        {renderRoutes(routes)}
        <Footer />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
