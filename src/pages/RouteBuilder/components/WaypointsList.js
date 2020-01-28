// @flow

import React from "react";
import { List, ListItem, Heading } from "../../../atoms";
import { Flex, Box } from "../../../grid";
import styled from "styled-components";
import colors from "../../../theme/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTrash } from "@fortawesome/free-solid-svg-icons";
import type { TWayPointsState } from "../../../hooks/wayPoints/wayPoints";

const IconButton = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${colors.textColors.darkLight};
  font-size: 24px;
`;

const Text = styled.span`
  color: ${props => props.color || colors.textColors.light};
`;

type TWaypointsListProps = {
  wayPoints: TWayPointsState,
  dispatch: any => void
};

export default function WaypointsList({
  wayPoints,
  dispatch
}: TWaypointsListProps) {
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
              <Text color={colors.textColors.darkLight}>{index}</Text>
            </Box>
            <Box>
              <IconButton icon={faBars} />
            </Box>
            <Box flexGrow={1}>{wayPoint.name}</Box>
            <Box>
              <IconButton
                icon={faTrash}
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
  );
}
