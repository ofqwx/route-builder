// @flow

import React from "react";
import type { Node } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  flex-wrap: ${props => props.wrap || "no-wrap"};
  align-items: ${props => props.alignItems || "stretch"};
  justify-content: ${props => props.justifyContent || "flex-start"};
`;

type TFlexProps = {
  children: Node,
  direction?: string,
  wrap?: string,
  alignItems?: string,
  justifyContent?: string
};

export default function Flex({
  children,
  direction,
  wrap,
  alignItems,
  justifyContent
}: TFlexProps) {
  return (
    <Wrapper
      direction={direction}
      wrap={wrap}
      alignItems={alignItems}
      justifyConten={justifyContent}
    >
      {children}
    </Wrapper>
  );
}
