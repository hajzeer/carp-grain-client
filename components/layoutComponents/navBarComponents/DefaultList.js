/** @format */

import styled from "styled-components";
import { colors } from "../../../utils";

const Paragraph = styled.h3`
  color: ${colors.ligthGreyHEX};
  margin: 30px 50px;
  text-transform: uppercase;
`;

const DefaultList = ({ items }) => {
  return items.map(({ title }) => {
    return <Paragraph>{title}</Paragraph>;
  });
};

export default DefaultList;
