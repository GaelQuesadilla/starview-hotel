import { Routes, Route } from "react-router-dom";
import * as ROUTES from "./routes/routes";
import { Index } from "./routes/Index";
import { RegularTemplate } from "./layouts/RegularTemplate";
import "bootstrap/dist/js/bootstrap";
import "./styles/index.scss";
import { AboutUs } from "./routes/aboutus";
import { Activities } from "./routes/activities";
import { Contact } from "./routes/contact";
import { History } from "./routes/history";
import { Team } from "./routes/team";
import { Location } from "./routes/location";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { redirect } from "react-router-dom";
import { Travel } from "./routes/travel";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

const App = () => {
  return (
    <div id="app">
      <ScrollToTop>
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
          <Route
            path="*"
            Component={() => (
              <RegularTemplate>
                <Index />
              </RegularTemplate>
            )}
          />
          <Route
            exact
            path={ROUTES.ACTIVITIES}
            Component={() => (
              <RegularTemplate>
                <Activities />
              </RegularTemplate>
            )}
          />
          <Route
            exact
            path={ROUTES.CONTACT}
            Component={() => (
              <RegularTemplate>
                <Contact />
              </RegularTemplate>
            )}
          />
          <Route
            exact
            path={ROUTES.HISTORY}
            Component={() => (
              <RegularTemplate>
                <History />
              </RegularTemplate>
            )}
          />
          <Route
            exact
            path={ROUTES.TRAVEL}
            Component={() => (
              <RegularTemplate>
                <Travel />
              </RegularTemplate>
            )}
          />
          <Route
            exact
            path={ROUTES.ABOUT_US}
            Component={() => (
              <RegularTemplate>
                <AboutUs />
              </RegularTemplate>
            )}
          />
          <Route
            exact
            path={ROUTES.TEAM}
            Component={() => (
              <RegularTemplate>
                <Team />
              </RegularTemplate>
            )}
          />
          <Route
            exact
            path={ROUTES.LOCATION}
            Component={() => (
              <RegularTemplate>
                <Location />
              </RegularTemplate>
            )}
          />
        </Routes>
      </ScrollToTop>
    </div>
  );
};

export default App;
