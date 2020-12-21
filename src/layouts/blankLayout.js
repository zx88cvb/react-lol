import { renderRoutes } from "react-router-config";

const blank = ({ route }) => <>{renderRoutes(route.routes)}</>;
export default blank;