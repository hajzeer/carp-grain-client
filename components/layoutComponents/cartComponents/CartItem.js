/** @format */

import styled from 'styled-components';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../context/cartContext';
import { colors } from '../../../utils';

const Container = styled.div`
  width: 96%;
  height: 80px;
  padding: 10px 0 10px 0;
  margin: 5px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: #777777;
  border-bottom: 0.5px solid ${colors.defaultBlackHEX};
`;

const Paragraph = styled.p`
  padding: 3px;
  width: 40px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.ligthGreyHEX};
  font-size: 12px;

  margin: 0;

  @media (min-width: 786px) {
    font-size: 18px;
  }
`;
const ParagraphPrice = styled.p`
  width: 100px;
  color: ${colors.ligthGreyHEX};
  font-size: 12px;

  margin: 0;
  @media (min-width: 786px) {
    font-size: 18px;
  }
`;

const ParagraphTitle = styled.p`
  width: 200px;
  height: 80px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.ligthGreyHEX};
  font-size: 12px;
  margin: 0;
  @media (min-width: 786px) {
    font-size: 18px;
  }
`;

const RemoveButton = styled.button`
  width: 50px;
  height: 50px;
  margin: 5px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  font-size: 12px;
  color: ${colors.ligthGreyHEX};
  cursor: pointer;

  @media (min-width: 786px) {
    font-size: 18px;
  }
`;

const ImageDiv = styled.div`
  display: block;

  width: 50px;
  height: 40px;

  @media (min-width: 786px) {
    width: 70px;
    height: 70px;
  }
`;

const ImageStyled = styled(Image)`
  border-radius: 100%;
  margin: 0;
`;

const QuanityDiv = styled.div`
  width: 60px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QuantityButtons = styled.button`
  width: 20px;
  height: 20px;
  color: ${colors.ligthGreyHEX};
  background: transparent;
  outline: none;
  border: none;
  font-size: 15px;
  cursor: pointer;
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

  const handleAddCapacity = () => {
    const index = cart.indexOf(item);
    setCart((currentState) => {
      currentState[index].quantity++;
      return [...currentState];
    });
  };

  const handleDeleteCapacity = () => {
    const index = cart.indexOf(item);
    if (item.quantity > 1) {
      setCart((currentState) => {
        currentState[index].quantity--;
        return [...currentState];
      });
    } else if (item.quantity == 1) {
      setCart((currentState) => {
        currentState.splice(index, 1);
        return [...currentState];
      });
    }
  };

  useEffect(() => {
    setIsProductFinalPrice(item.quantity * item.price);
  });

  return (
    <Container>
      <RemoveButton onClick={() => removeItem(item)}>X</RemoveButton>
      <ImageDiv>
        <ImageStyled
          src={item.images}
          width={80}
          height={80}
          layout="responsive"
        />
      </ImageDiv>
      <ParagraphTitle>{item.name}</ParagraphTitle>
      {item.variant != null ? (
        <Paragraph>{item.variant}</Paragraph>
      ) : (
        <Paragraph> </Paragraph>
      )}
      <QuanityDiv>
        <QuantityButtons onClick={handleAddCapacity}>+</QuantityButtons>
        <Paragraph>{item.quantity}</Paragraph>
        <QuantityButtons onClick={handleDeleteCapacity}>-</QuantityButtons>
      </QuanityDiv>

      <ParagraphPrice>{isProductFinalPrice.toFixed(2)} zł</ParagraphPrice>
    </Container>
  );
};

export default CartItem;
