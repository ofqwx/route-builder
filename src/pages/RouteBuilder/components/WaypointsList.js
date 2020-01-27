// @flow

import React from "react";
import { List, ListItem, Button, Heading } from "../../../atoms";
import { Flex, Box } from "../../../grid";
import styled from "styled-components";
import colors from "../../../theme/colors";
import { useWayPoints } from "../../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${colors.dark};
`;

const IconButton = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${colors.textColors.darkLight};
  font-size: 24px;
`;

export default function WaypointsList() {
  const [wayPoints, dispatch] = useWayPoints();

  function handleDragStart(e, index) {
    e.dataTransfer.setData("sourceIndex", index);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
  }

  function handleDrop(e, index) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    if (e.dataTransfer.getData("sourceIndex") !== index) {
      dispatch({
        type: "changeWayPointPosition",
        sourceIndex: e.dataTransfer.getData("sourceIndex"),
        targetIndex: index
      });
    }
    return false;
  }

  return (
    <Wrapper>
      <Flex direction="column">
        <Box>
          <Heading level={2}>Route Builder</Heading>
          <hr />
        </Box>

        <Box scroll flexGrow={1}>
          <List>
            {wayPoints.map((wayPoint, index) => (
              <ListItem
                key={`${wayPoint.id}`}
                draggable="true"
                onDragStart={e => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={e => handleDrop(e, index)}
              >
                <Flex>
                  <Box>
                    <IconButton icon={faBars} />
                  </Box>
                  <Box flexGrow={1}>{wayPoint.name}</Box>
                  <Box>
                    <IconButton
                      icon={faTimes}
                      onClick={() =>
                        dispatch({
                          type: "removeWayPoint",
                          id: wayPoint.id
                        })
                      }
                    />
                  </Box>
                </Flex>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box alignSelf="center">
          <Button onClick={() => alert("Aguantiaaaa")}>
            Download your Route
          </Button>
        </Box>
      </Flex>
    </Wrapper>
  );
}
