import { renderRoutes } from "react-router-config";

export default ({ route }) => <>{renderRoutes(route.routes)}</>;