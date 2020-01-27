// @flow

import React from "react";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { WayPointsProvider, useWayPointsState } from "./hooks";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    line-height: 1.5;
    overflow-wrap: break-word;
    font-family: "Roboto", serif;
    font-size: 14px !important;   
  }
`;

export default function Setup() {
  const wayPointsState = useWayPointsState();

  return (
    <WayPointsProvider value={wayPointsState}>
      <GlobalStyle />
      <App />
    </WayPointsProvider>
  );
}
