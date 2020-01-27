// @flow

import styled from "styled-components";
import colors from "../theme/colors";

const Button = styled.button`
  color: ${colors.buttonColors.normal.text};
  background-color: ${colors.buttonColors.normal.background};
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color: ${colors.buttonColors.hover.text};
    background-color: ${colors.buttonColors.hover.background};
  }

  cursor: pointer;

  border-radius: 8px;
  padding: 16px;
`;

export default Button;
