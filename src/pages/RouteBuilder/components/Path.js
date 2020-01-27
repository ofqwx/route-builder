// @flow

import React, { Fragment } from "react";
import type { TWayPoint } from "../../../hooks/wayPoints/wayPoints";
import colors from "../../../theme/colors";

export type TSVGLayerProps = {
  wayPoints: Array<TWayPoint>,
  addWayPoint: () => void
};

export default function SVGLayer({ wayPoints, addWayPoint }: TSVGLayerProps) {
  return (
    <svg width="100%" height="100%">
      <g onClick={addWayPoint}>
        <rect width="100%" height="100%" fill="transparent" />
      </g>

      <Path wayPoints={wayPoints} />
    </svg>
  );
}

type TPathProps = {
  wayPoints: Array<TWayPoint>
};

function Path({ wayPoints }: TPathProps) {
  if (wayPoints.length) {
    return (
      <Fragment>
        {wayPoints.map((wayPoint, index) => {
          if (wayPoints[index + 1]) {
            return (
              <Fragment key={`${wayPoint.x}${wayPoint.y}`}>
                <Line wayPoint1={wayPoint} wayPoint2={wayPoints[index + 1]} />
                <Circle wayPoint={wayPoint} />
                <Circle wayPoint={wayPoints[index + 1]} />
              </Fragment>
            );
          }

          return (
            <Circle key={`${wayPoint.x}${wayPoint.y}`} wayPoint={wayPoint} />
          );
        })}
      </Fragment>
    );
  }

  return null;
}

function Circle({ wayPoint }) {
  return (
    <circle
      cx={wayPoint.x}
      cy={wayPoint.y}
      r="8"
      fill={colors.mapColors.circle.backgroundColor}
    />
  );
}

function Line({ wayPoint1, wayPoint2 }) {
  return (
    <line
      x1={wayPoint1.x}
      y1={wayPoint1.y}
      x2={wayPoint2.x}
      y2={wayPoint2.y}
      style={{ stroke: `${colors.mapColors.line.color}`, strokeWidth: 3 }}
    />
  );
}
