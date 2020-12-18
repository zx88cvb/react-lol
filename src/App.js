import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { BrowserRouter } from 'react-router-dom'

import Header from '@/components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {renderRoutes(routes)}
    </BrowserRouter>
  );
}

export default App;
