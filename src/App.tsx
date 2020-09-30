import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./utils/i18n";
// Screens Init
import Prices from 'screens/prices/prices';
// Screens End

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./assets/app.scss";
import "moment/locale/es";


const App: React.FC<{}> = () => {
  const { REACT_APP_PATH: basename } = process.env;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router basename={basename}>
          <Suspense fallback={null}>
            <Switch>
              <Route exact path="/" component={Prices} />
            </Switch>
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
