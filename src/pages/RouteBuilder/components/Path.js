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
                <Circle
                  currentIndex={index}
                  lastIndex={wayPoints.length - 1}
                  wayPoint={wayPoint}
                />
                <Circle
                  currentIndex={index}
                  lastIndex={wayPoints.length - 1}
                  wayPoint={wayPoints[index + 1]}
                />
                <Text wayPoint={wayPoint} index={index} />
              </Fragment>
            );
          }

          return (
            <Fragment key={`${wayPoint.x}${wayPoint.y}`}>
              <Circle
                currentIndex={index}
                lastIndex={wayPoints.length - 1}
                key={`${wayPoint.x}${wayPoint.y}`}
                wayPoint={wayPoint}
              />
              <Text wayPoint={wayPoint} index={index} />
            </Fragment>
          );
        })}
      </Fragment>
    );
  }

  return null;
}

function circleColor(currentIndex, lastIndex) {
  if (currentIndex === 0) {
    return colors.mapColors.circle.colorFirst;
  }

  if (currentIndex === lastIndex) {
    return colors.mapColors.circle.colorLast;
  }

  return colors.mapColors.circle.backgroundColor;
}

type TCircleProps = {
  wayPoint: TWayPoint,
  currentIndex?: number,
  lastIndex?: number
};

function Circle({ wayPoint, currentIndex, lastIndex }: TCircleProps) {
  return (
    <circle
      cx={wayPoint.x}
      cy={wayPoint.y}
      r="14"
      fill={circleColor(currentIndex, lastIndex)}
    />
  );
}

function Text({ wayPoint, index }) {
  return (
    <text
      x={wayPoint.x - 4}
      y={wayPoint.y + 6}
      fill={colors.textColors.light}
      style={{ fontSize: "16px", cursor: "default" }}
    >
      <title>{wayPoint.name}</title>
      {index}
    </text>
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
