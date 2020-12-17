import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  );
}

export default App;
