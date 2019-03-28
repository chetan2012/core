import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware();

class Store {
    constructor() {
        this.store = null;
    }

    createStore(commonRootReducer, rootSaga) {
        // const reduce = { commonRootReducer };

        const composeEnhancers =
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const appStore = createStore(
            commonRootReducer,
        /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware)),
        );
        // const appStore: any = createStore(commonRootReducer, applyMiddleware(sagaMiddleware));

        appStore.runSagaTask = () => {
            appStore.sagaTask = sagaMiddleware.run(rootSaga);
        };

        appStore.runSagaTask();

        this.store = appStore;
        return appStore;
    }

    getStore() {
        if(this.store) {
            return this.store;
        }
        throw new Error("Store is not created. Please use createStore function.");
    }

}
const store = new Store();

export default store;
