/** @format */

import { useState, useContext } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { colors, fontWeight, zIndex } from "../../utils";
import Hamburger from "./hamburger";
import Cart from "./cart";
import NavBar from "./NavBar";
import { CartContext } from "../../context/cartContext";

const Container = styled.header`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  margin: 0;
  padding: 0;
  z-index: ${zIndex.level9};

  background: transparent;

  @media (min-width: 786px) {
    height: 100px;
  }
`;

const BluredDiv = styled.div`
  height: 70px;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  box-shadow: 2em 0 2em ${colors.defaultBlackHEX};

  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: ${zIndex.level7};

  @media (min-width: 786px) {
    height: 100px;
  }
`;

const InnerContainer = styled.div`
  height: 100%;
  z-index: ${zIndex.level7};
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ImageDiv = styled.div`
  display: block;
  width: 30px;
  height: 30px;
  z-index: ${zIndex.level8};

  @media (min-width: 786px) {
    width: 40px;
    height: 40px;
  }
`;

const LogoDiv = styled.div`
  display: block;

  width: 50px;
  height: 50px;

  @media (min-width: 786px) {
    width: 70px;
    height: 70px;
  }
`;

const ImageStyled = styled(Image)`
  z-index: ${zIndex.level8};
`;

const ButtonContainer = styled.div`
  width: 30%;
  height: 60px;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonStyled = styled.button`
  width: 100%;
  height: 100%;
  align-self: center;

  background: none;
  outline: none;
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CartStock = styled.p`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  bottom: 25px;
  left: 21%;
  background: ${colors.ligthGreyHEX};
  border-radius: 100%;
  color: ${colors.defaultBlackHEX};
  z-index: ${zIndex.level9};
  font-weight: ${fontWeight.fontWeightBold};

  @media (min-width: 786px) {
    left: 21%;
    width: 25px;
    height: 25px;
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    left: 21.5%;
    width: 25px;
    height: 25px;
    font-size: 20px;
  }
`;

const Header = () => {
  const [isVisible, setIsVisible] = useState({
    initial: false,
    clicked: null,
  });

  const [isVisibility, setIsVisibility] = useState({
    initial: false,
    clicked: null,
  });

  const { cart } = useContext(CartContext);

  const handleHamburger = () => {
    if (isVisible.initial === false) {
      setIsVisible({
        clicked: true,
      });
      setIsVisibility({
        clicked: false,
      });
    } else if (isVisible.clicked === true) {
      setIsVisible({
        clicked: !isVisible.clicked,
      });
      setIsVisibility({
        clicked: false,
      });
    } else if (isVisible.clicked === false) {
      setIsVisible({
        clicked: !isVisible.clicked,
      });
      setIsVisibility({
        clicked: false,
      });
    }
  };
  const handleCart = () => {
    if (isVisibility.initial === false) {
      setIsVisibility({
        clicked: true,
      });
      setIsVisible({
        clicked: false,
      });
    } else if (isVisibility.clicked === true) {
      setIsVisibility({
        clicked: !isVisibility.clicked,
      });
      setIsVisible({
        clicked: false,
      });
    } else if (isVisibility.clicked === false) {
      setIsVisibility({
        clicked: !isVisibility.clicked,
      });
      setIsVisible({
        clicked: false,
      });
    }
  };
  return (
    <Container>
      <InnerContainer>
        <BluredDiv />

        <ButtonContainer>
          <ButtonStyled onClick={handleCart}>
            <CartStock>{cart.length}</CartStock>
            <ImageDiv>
              <ImageStyled
                src='/cart.svg'
                width='50'
                height='50'
                quality='100'
                layout='responsive'
              />
            </ImageDiv>
          </ButtonStyled>
        </ButtonContainer>
        <Link href='/'>
          <LogoDiv>
            <ImageStyled
              src='/logo.png'
              width='70'
              height='70'
              quality='100'
              layout='responsive'
            />
          </LogoDiv>
        </Link>
        <ButtonContainer>
          <Hamburger isVisible={isVisible} handlerIsVisible={handleHamburger} />
        </ButtonContainer>
      </InnerContainer>
      <Cart isVisible={isVisibility} handlerIsVisible={handleCart} />
      <NavBar isVisible={isVisible} handlerIsVisible={handleHamburger} />
    </Container>
  );
};

export default Header;
