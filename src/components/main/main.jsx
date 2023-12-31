import React from "react";
import ReactDOM from "react-dom/client";
import App from "../app/App";
// import './index.css'
import "@radix-ui/themes/styles.css";
import '../../assets/styles/bs-normalize.css'
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);
