// @flow

import React, { Fragment } from "react";
import { Flex, Box } from "../../../grid";
import styled from "styled-components";
import colors from "../../../theme/colors";
import { useWayPoints } from "../../../hooks";
import WaypointsList from "./WaypointsList";
import { Heading, Button } from "../../../atoms";

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${colors.dark};
`;

const EmptyMessage = styled.p`
  color: ${colors.textColors.light};
  font-family: "Indie Flower", cursive;
  font-size: 16px;
  text-align: center;
`;

export default function Sidebar() {
  const [wayPoints, dispatch] = useWayPoints();

  return (
    <Wrapper>
      <Flex direction="column">
        <Box>
          <Heading level={2}>Route Builder</Heading>
          <hr />
        </Box>

        {wayPoints.length > 0 ? (
          <Fragment>
            <Box scroll flexGrow={1}>
              <WaypointsList wayPoints={wayPoints} dispatch={dispatch} />
            </Box>

            <Box alignSelf="center">
              <Button onClick={() => alert("Aguantiaaaa")}>
                Download your Route
              </Button>
            </Box>
          </Fragment>
        ) : (
          <EmptyMessage>
            To start, just click somewhere in the map.
          </EmptyMessage>
        )}
      </Flex>
    </Wrapper>
  );
}
