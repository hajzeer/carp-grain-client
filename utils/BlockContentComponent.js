/** @format */

import styled from "styled-components";
import { colors, fontWeight, zIndex } from "../utils";

const Subject1 = styled.h1`
  width: 80%;
  color: ${colors.ligthGreyHEX};
  margin: 20px 0 15px 0;
  padding: 0;
  text-align: center;
`;
const Subject2 = styled.h2`
  width: 80%;
  color: ${colors.ligthGreyHEX};
  margin: 20px 0 15px 0;
  padding: 0;
  text-align: center;
`;
const Subject3 = styled.h3`
  width: 80%;
  color: ${colors.ligthGreyHEX};
  margin: 20px 0 15px 0;
  padding: 0;
  text-align: center;
`;
const Subject4 = styled.h4`
  width: 80%;
  color: ${colors.ligthGreyHEX};
  margin: 20px 0 15px 0;
  padding: 0;
  text-align: center;
`;

const Paragraph = styled.p`
  color: ${colors.ligthGreyHEX};
  margin: 15px 25px;
`;

export const components = {
  h1: ({ children }) => <Subject2>{children}</Subject2>,
  h2: ({ children }) => <Subject1>{children}</Subject1>,
  h3: ({ children }) => <Subject3>{children}</Subject3>,
  h4: ({ children }) => <Subject4>{children}</Subject4>,
  normal: ({ children }) => <Paragraph>{children}</Paragraph>,
};
