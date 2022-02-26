/** @format */

import styled from "styled-components";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/cartContext";
import { colors } from "../../../utils";

const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-bottom: 0.5px solid ${colors.defaultBlackHEX};
`;

const Paragraph = styled.p`
  width: 50px;
  color: ${colors.ligthGreyHEX};
  font-size: 12px;

  margin: 0;
`;
const ParagraphPrice = styled.p`
  width: 100px;
  color: ${colors.ligthGreyHEX};
  font-size: 12px;

  margin: 0;
`;

const ParagraphTitle = styled.p`
  width: 200px;
  color: ${colors.ligthGreyHEX};
  font-size: 12px;
  margin: 0;
`;

const RemoveButton = styled.button`
  width: 35px;
  height: 35px;
  margin: 5px;
  padding: 0;
  background: none;
  border: none;
  font-size: 12px;
  color: ${colors.ligthGreyHEX};
  cursor: pointer;
`;

const ImageStyled = styled(Image)`
  border-radius: 100%;
  margin: 0;
`;

const CartItem = ({ item }) => {
  const { cart, setCart } = useContext(CartContext);
  const [isProductFinalPrice, setIsProductFinalPrice] = useState(0);
  const removeItem = (item) => {
    setCart(
      cart.filter((removeItem) => {
        return removeItem !== item;
      })
    );
  };

  useEffect(() => {
    setIsProductFinalPrice(item.capacity * item.price);
  });

  return (
    <Container>
      <RemoveButton onClick={() => removeItem(item)}>X</RemoveButton>
      <ImageStyled src={item.Images} width={50} height={50} />

      <ParagraphTitle>{item.title}</ParagraphTitle>
      {item.variant != null ? (
        <Paragraph>{item.variant}</Paragraph>
      ) : (
        <Paragraph> </Paragraph>
      )}
      <Paragraph>{item.capacity}</Paragraph>
      <ParagraphPrice>{isProductFinalPrice.toFixed(2)} zł</ParagraphPrice>
    </Container>
  );
};

export default CartItem;
