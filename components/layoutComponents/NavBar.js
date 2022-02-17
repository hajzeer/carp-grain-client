/** @format */

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { colors, zIndex, fontSize, fontWeight } from "../../utils";
import gsap from "gsap";
import Image from "next/image";
import sanityClient from "../../utils/client";
import DefaultList from "./navBarComponents/DefaultList";

const Container = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 100%;
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

const Anchor = styled.a`
  color: ${colors.ligthGreyHEX};
  font-size: ${fontSize.bigFont};
  font-weight: ${fontWeight.fontWeightMedium};
  cursor: pointer;
  margin: 15px 15px;
  text-decoration: none;
  z-index: ${zIndex.level9};
`;

const Paragraph = styled.p`
  color: ${colors.ligthGreyHEX};
  font-size: ${fontSize.bigFont};
  font-weight: ${fontWeight.fontWeightMedium};
  cursor: pointer;
  margin: 15px 15px;
  text-decoration: none;
  z-index: ${zIndex.level9};
`;

const ValueContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const InnerValueContainer = styled.div`
  width: 100%;
  justify-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ImageOuterButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 0 25% 0 0;
  outline: none;
  border: none;
  background: transparent;
  transition: all 0.4s;

  transform: ${(props) => (props.active ? "rotate(180deg)" : "rotate(0)")};
`;

const ListContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.active ? "auto" : "0")};
  overflow: hidden;
  transition: transform 0.4s ease-out;
  transform: ${(props) => (props.active ? "scaleY(1)" : "scaleY(0)")};

  transform-origin: top;
`;

const NavBar = ({ isVisible, handlerIsVisible }) => {
  const NavBarRef = useRef(null);
  const NavBarRefTween = useRef(null);
  const NavBarHelper = useRef(null);
  const NavBarHelperTween = useRef(null);
  const [isActive, setIsActive] = useState({
    first: false,
    second: false,
  });

  const [isCategory, setIsCategory] = useState(Array);
  const [isProducer, setIsProducer] = useState(Array);

  const getCategory = () => {
    sanityClient
      .fetch(
        `*[_type=="category"]{
        title
                }`
      )
      .then((data) => {
        setIsCategory(data);
      })
      .catch(console.error);
  };
  const getProduces = () => {
    sanityClient
      .fetch(
        `*[_type=="producent"]{
        title
                }`
      )
      .then((data) => {
        setIsProducer(data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (isVisible.clicked === true) {
      NavBarHelperTween.current = gsap.to(NavBarHelper.current, {
        duration: 0.5,
        xPercent: -100,
        ease: "Power4.easeOut",
        delay: 0.3,
      });
      NavBarRefTween.current = gsap.to(NavBarRef.current, {
        duration: 1,
        xPercent: -100,
        ease: "Power4.easeOut",
        delay: 0.4,
      });
    } else if (isVisible.clicked === false) {
      NavBarRefTween.current = gsap.to(NavBarRef.current, {
        duration: 1,
        xPercent: 100,
        ease: "Power4.easeOut",
      });
    }
    getCategory();
    getProduces();
  }, [isVisible]);
  return (
    <Container ref={NavBarRef}>
      <Helper ref={NavBarHelper} />

      <Link href='/'>
        <Anchor onClick={handlerIsVisible}>HOME</Anchor>
      </Link>

      <Link href='/about'>
        <Anchor onClick={handlerIsVisible}>O NAS</Anchor>
      </Link>
      <Link href='/products'>
        <Anchor onClick={handlerIsVisible}>PRODUKTY</Anchor>
      </Link>
      <ValueContainer>
        <InnerValueContainer>
          <Paragraph onClick={handlerIsVisible}>KATEGORIE</Paragraph>
          <ImageOuterButton
            active={isActive.first}
            onClick={() => setIsActive({ first: !isActive.first })}>
            <Image src='/arrow.png' width={20} height={20} />
          </ImageOuterButton>
        </InnerValueContainer>
        <ListContainer active={isActive.first}>
          <DefaultList items={isCategory} />
        </ListContainer>
      </ValueContainer>
      <ValueContainer>
        <InnerValueContainer>
          <Paragraph onClick={handlerIsVisible}>PRODUCENCI</Paragraph>
          <ImageOuterButton
            active={isActive.second}
            onClick={() => setIsActive({ second: !isActive.second })}>
            <Image src='/arrow.png' width={20} height={20} />
          </ImageOuterButton>
        </InnerValueContainer>
        <ListContainer active={isActive.second}>
          <DefaultList items={isProducer} />
        </ListContainer>
      </ValueContainer>
      <Link href='/rules'>
        <Anchor onClick={handlerIsVisible}>REGULAMIN</Anchor>
      </Link>

      <Link href='/contact'>
        <Anchor onClick={handlerIsVisible}>KONTAKT</Anchor>
      </Link>
    </Container>
  );
};

export default NavBar;
