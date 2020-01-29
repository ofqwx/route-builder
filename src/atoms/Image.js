// @flow

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  background-image: url(${props => props.src});
  background-position: ${props => props.position};
  background-size: ${props => props.fit};
`;

type TBackgroundPosition =
  | "bottom"
  | "center"
  | "inherit"
  | "initial"
  | "left"
  | "right"
  | "top"
  | "unset";

type TBackgroundSize =
  | "auto"
  | "contain"
  | "cover"
  | "inherit"
  | "initial"
  | "unset";

type TImageProps = {
  alt: string,
  src: string,
  position?: TBackgroundPosition,
  fit?: TBackgroundSize
};

export default function Image({ alt }: TImageProps) {
  return <Wrapper role="img" aria-label={alt} />;
}
