/** @format */

import CartItem from "./CartItem";
import styled from "styled-components";
import { colors } from "../../../utils";

const Container = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow: auto;
`;

const CartItemList = ({ items }) => {
  return (
    <Container>
      {items.map((item) => {
        return <CartItem key={item._id} item={item} />;
      })}
    </Container>
  );
};

export default CartItemList;
