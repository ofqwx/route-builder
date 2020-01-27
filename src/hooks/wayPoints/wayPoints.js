// @flow

import { useReducer, useContext } from "react";
import wayPointsContext from "./Provider";

export type TWayPoint = {
  id: string,
  x: string,
  y: string
};

export type TWayPointsState = Array<TWayPoint>;

type TAction = {
  type: string,
  name: string,
  wayPoint?: TWayPoint,
  id?: string,
  sourceIndex?: number,
  targetIndex?: number
};

export default function useWayPoints() {
  const wayPoints = useContext(wayPointsContext);

  return wayPoints;
}

function reducer(state: TWayPointsState, action: TAction) {
  switch (action.type) {
    case "addWayPoint":
      return [...state, action.wayPoint];
    case "removeWayPoint":
      return state.filter(wayPoint => wayPoint.id !== action.id);
    case "changeWayPointPosition":
      const newState = [...state];

      if (
        action.sourceIndex !== undefined &&
        action.targetIndex !== undefined
      ) {
        const sourcePosition = parseInt(action.sourceIndex, 10);
        const targetPosition = parseInt(action.targetIndex, 10);
        const wayPointToMove = newState[sourcePosition];

        if (sourcePosition < targetPosition) {
          let i = sourcePosition;
          while (i < targetPosition) {
            newState[i] = newState[i + 1];
            i = i + 1;
          }
        } else {
          let i = sourcePosition;
          while (i > targetPosition) {
            newState[i] = newState[i - 1];
            i = i - 1;
          }
        }

        newState[targetPosition] = wayPointToMove;
      }

      return newState;
    default:
      throw new Error();
  }
}

export function useWayPointsState() {
  return useReducer(reducer, []);
}
