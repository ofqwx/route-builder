// @flow

import React from "react";
import { Flex, Box } from "../../grid";
import WaypointsList from "./components/WaypointsList";
import Map from "./components/Map";

export default function RouteBuilder() {
  return (
    <Flex>
      <Box padding="0" flexShrink={0} flexBasis="25em">
        <WaypointsList />
      </Box>

      <Box padding="0" flexGrow={1}>
        <Map />
      </Box>
    </Flex>
  );
}
