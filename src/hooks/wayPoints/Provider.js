// @flow

import { createContext } from "react";

const wayPointsContext = createContext<any>();

export const WayPointsProvider = wayPointsContext.Provider;

export default wayPointsContext;
