// @flow

import React from "react";
import { Image } from "../../../atoms";
import Path from "./Path";
import { useWayPoints } from "../../../hooks";

export default function Map() {
  const [wayPoints, dispatch] = useWayPoints();

  function createWayPoint(evt: any) {
    const e = evt.target;
    const dim = e.getBoundingClientRect();
    const x = evt.clientX - dim.left;
    const y = evt.clientY - dim.top;
    const id = Math.random()
      .toString(36)
      .substr(2, 9);

    dispatch({
      type: "addWayPoint",
      wayPoint: {
        id,
        name: `WayPoint ${wayPoints.length}`,
        x,
        y
      }
    });
  }

  return (
    <Image alt="map" src="map.jpg" fit="cover">
      <Path wayPoints={wayPoints} addWayPoint={createWayPoint} />
    </Image>
  );
}
