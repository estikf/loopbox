import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

const SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN
if(SENTRY_DSN){
    Sentry.init({
        dsn: "https://a1c0539c1a7b43958d193a31dba88cfb@o4504001156481024.ingest.sentry.io/4504001157595136",
        integrations: [new BrowserTracing()],
        tracesSampleRate: 1.0,
      });    
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
