/** @format */

import { useRef, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { colors, zIndex, fontSize, fontWeight } from "../../utils";
import gsap from "gsap";

const Container = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
  right: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Cart = ({ isVisible }) => {
  const NavBarRef = useRef(null);
  const NavBarRefTween = useRef(null);
  const NavBarHelper = useRef(null);
  const NavBarHelperTween = useRef(null);

  useEffect(() => {
    if (isVisible.clicked === true) {
      NavBarHelperTween.current = gsap.to(NavBarHelper.current, {
        duration: 0.5,
        xPercent: 100,
        ease: "Power4.easeOut",
        delay: 0.3,
      });
      NavBarRefTween.current = gsap.to(NavBarRef.current, {
        duration: 1,
        xPercent: 100,
        ease: "Power4.easeOut",
        delay: 0.4,
      });
    } else if (isVisible.clicked === false) {
      NavBarRefTween.current = gsap.to(NavBarRef.current, {
        duration: 1,
        xPercent: -100,
        ease: "Power4.easeOut",
      });
    }
  }, [isVisible]);

  return (
    <Container ref={NavBarRef}>
      <Helper ref={NavBarHelper} />
      Empty Cart Component
    </Container>
  );
};

export default Cart;
