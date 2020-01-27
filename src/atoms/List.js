// @flow

import styled from "styled-components";
import colors from "../theme/colors";

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: ${props => props.margin || "0 0 0.8rem 0"};
  color: ${colors.textColors.light};
`;
