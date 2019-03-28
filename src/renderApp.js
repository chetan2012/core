import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { Router, Switch } from "react-router-dom";
import RouteRenderer from "./routing/routeRenderer";
import store from "./store";
import {combineReducersWithRoot} from "./utility"
import LocationManagerObj from "./LocationManager";
import activityReducer from "./activityTracker/activityReducer";
import errorReducer from "./errorHandler/errorReducer";
import history from "./routing/history";

async function RenderApp(RootComponent, documentObject, appConfig) {
  if (!documentObject) {
    throw new Error("Document Object not found !!!");
  }

  const { redux, routes, LocalizationSettings } = appConfig;
  const { rootReducer, rootSaga } = redux || {};
  
  if (typeof rootReducer !== "function") {
    throw new Error("Root reducer is expected to be a function !!!");
  }

  /**
   * Use appCofig to initialize app level settings
   */
  // http.init(httpConfig);

  // const finalMiddlewares = baseMiddlewares.concat(middlewares || []);

  /**
   * Create store with middlewares and devtools extension
   
   */
  const storeMain = store.createStore(combineReducersWithRoot(rootReducer, {
      activity: activityReducer,
      error: errorReducer
    }), rootSaga); // createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  /**
   * Render application with root component
   */
  if(LocalizationSettings && LocalizationSettings.language){  
    LocationManagerObj.setupLocationManager(LocalizationSettings.language, LocalizationSettings.resourcePathTypes);
    let localeMessages = null;
    if(LocalizationSettings.messages) {
      localeMessages = LocalizationSettings.messages[LocalizationSettings.language];
    }
    else {
      localeMessages = await LocationManagerObj.loadLocaleDataFile();
    }
    ReactDOM.render(
      <Provider store={storeMain}>
        <IntlProvider
          locale={LocalizationSettings.language}
          messages={localeMessages}
        >
          <Router history={history}>
            <RootComponent>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  {<RouteRenderer routes={routes} store={store.getState} />}
                </Switch>
              </Suspense>
            </RootComponent>
          </Router>
        </IntlProvider>
      </Provider>,
      documentObject
    );
  } else {
    ReactDOM.render(
      <Provider store={storeMain}>
        <Router history={history}>
          <RootComponent>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {<RouteRenderer routes={routes} store={store.getState} />}
              </Switch>
            </Suspense>
          </RootComponent>
        </Router>
      </Provider>,
      documentObject
    );
  }
}

export default RenderApp;
