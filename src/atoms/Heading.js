// @flow

import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";

const Heading1 = styled.h1`
  color: ${props =>
    props.dark ? colors.textColors.dark : colors.textColors.light};
`;

const Heading2 = Heading1.withComponent("h2");
const Heading3 = Heading1.withComponent("h3");

type THeadingProps = {
  level: number,
  props?: any
};

export default function Heading({ level, ...props }: THeadingProps) {
  switch (level) {
    case 2:
      return <Heading2 {...props} />;
    case 3:
      return <Heading3 {...props} />;
    default:
      return <Heading1 {...props} />;
  }
}
