// @flow

import React from "react";
import { Flex, Box } from "../../grid";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";

export default function RouteBuilder() {
  return (
    <Flex>
      <Box padding="0" flexShrink={0} flexBasis="25em">
        <Sidebar />
      </Box>

      <Box padding="0" flexGrow={1}>
        <Map />
      </Box>
    </Flex>
  );
}
