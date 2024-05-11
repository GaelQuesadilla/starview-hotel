import { Routes, Route } from "react-router-dom";
import * as ROUTES from "./routes/routes";
import { Index } from "./routes/Index";
const App = () => {
  return (
    <div id="app">
      <Routes>
        <Route exact path={ROUTES.INDEX} Component={Index} />
      </Routes>
    </div>
  );
};

export default App;
