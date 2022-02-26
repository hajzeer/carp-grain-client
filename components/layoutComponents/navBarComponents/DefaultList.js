/** @format */

import styled from "styled-components";
import { colors, fontWeight } from "../../../utils";
import Link from "next/link";

const Anchor = styled.a`
  color: ${colors.ligthGreyHEX};
  margin: 10px 50px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: ${fontWeight.fontWeightReagular};
`;

const DefaultList = ({ items, path, handleClose }) => {
  return items.map(({ title, slug }) => {
    return (
      <Link key={items.id} href={`/${path}/${slug.current}`}>
        <Anchor onClick={handleClose}>{title}</Anchor>
      </Link>
    );
  });
};

export default DefaultList;
