import React from "react";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/lib/integration/react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./data/reducer.js";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

const persistConfig = {
  key: "root",
  storage
};

const pReducer = persistReducer(persistConfig, reducer);

const store = createStore(pReducer);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
