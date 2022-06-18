/** @format */

import { useRef, useEffect, useContext, useState } from 'react';
import { fetchPostJSON } from '../../utils/apiHelpers';
import styled from 'styled-components';
import { colors, zIndex, fontSize, fontWeight } from '../../utils';
import gsap from 'gsap';
import CartItemList from './cartComponents/CartItemList';
import { CartContext } from '../../context/cartContext';
import { getStripe } from '../../utils/stripe/getStripe';
import {loadStripe} from "@stripe/stripe-js";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  right: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${colors.darkGreyHEX};
  z-index: ${zIndex.level7};
`;

const Helper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: ${colors.midGreyHEX};
  z-index: ${zIndex.level6};
`;

const Paragraph = styled.p`
  color: ${colors.ligthGreyHEX};
  font-size: 15px;
  font-weight: ${fontWeight.fontWeightMedium};
  margin: 0 0 20px 0;
  text-transform: uppercase;
`;

const FinalContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 20%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubmitButton = styled.button`
  position: relative;
  border: none;
  background: ${colors.defaultBlackHEX};
  width: 85%;
  height: 45px;
  color: ${colors.ligthGreyHEX};
  font-size: 20px;
  text-transform: uppercase;
  font-weight: ${fontWeight.fontWeightMedium};
  margin: 0;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    border: 2px solid ${colors.ligthGreyHEX};
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.01);
    z-index: ${zIndex.leve1};
    transition-duration: 0.1s;
  }

  &:active::after {
    transform: scale(1);
  }
`;

const Cart = ({ isVisible }) => {
  const NavBarRef = useRef(null);
  const NavBarRefTween = useRef(null);
  const NavBarHelper = useRef(null);
  const NavBarHelperTween = useRef(null);
  const [isFinalPrice, setIsFinalPrice] = useState(0);

  const { cart,setCart } = useContext(CartContext);
  const handleCheckout = async (e) => {
    e.preventDefault();

    //send the cart data to our serverless API
    const response = await fetchPostJSON('/api/checkout_sessions/cart', cart);
    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    //if nothing went wrong, sends user to Stripe checkout
    setCart([])
    await stripe.redirectToCheckout({sessionId: response.id});
  };
  useEffect(() => {
    if (isVisible.clicked === true) {
      NavBarHelperTween.current = gsap.to(NavBarHelper.current, {
        duration: 0.5,
        xPercent: 100,
        ease: 'Power4.easeOut',
        delay: 0.3,
      });
      NavBarRefTween.current = gsap.to(NavBarRef.current, {
        duration: 1,
        xPercent: 100,
        ease: 'Power4.easeOut',
        delay: 0.4,
      });
    } else if (isVisible.clicked === false) {
      NavBarRefTween.current = gsap.to(NavBarRef.current, {
        duration: 1,
        xPercent: -100,
        ease: 'Power4.easeOut',
      });
    }
  }, [isVisible]);

  useEffect(() => {
    let total = 0;
    for (let el in cart) {
      total += cart[el].price * cart[el].quantity;
      const value = parseFloat(total.toFixed(2));
      setIsFinalPrice(value);
    }
  });
  return (
    <Container ref={NavBarRef}>
      <Helper ref={NavBarHelper} />
      <CartItemList items={cart} />
      <FinalContainer>
        {cart.length !== 0 ? (
          <Paragraph>wartość koszyka: {isFinalPrice.toFixed(2)} zł</Paragraph>
        ) : (
          <Paragraph>wartość koszyka: 0,00 zł</Paragraph>
        )}

        <SubmitButton onClick={handleCheckout}>
          PRZEJDŹ DO PŁATNOŚCI
        </SubmitButton>
      </FinalContainer>
    </Container>
  );
};

export default Cart;
