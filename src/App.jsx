import { Routes, Route } from "react-router-dom";
import * as ROUTES from "./routes/routes";
import { Index } from "./routes/Index";
import { RegularTemplate } from "./layouts/RegularTemplate";
import "bootstrap/dist/js/bootstrap";
import "./styles/index.scss";

const App = () => {
  return (
    <div id="app">
      <Routes>
        <Route
          exact
          path={ROUTES.INDEX}
          Component={() => (
            <RegularTemplate>
              <Index />
            </RegularTemplate>
          )}
        />
      </Routes>
    </div>
  );
};

export default App;
