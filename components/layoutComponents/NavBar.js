/** @format */

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { colors, zIndex, fontSize, fontWeight } from "../../utils";
import gsap from "gsap";
import Image from "next/image";
import sanityClient from "../../utils/client";
import DefaultList from "./navBarComponents/DefaultList";

const Container = styled.div`
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

const InnerDiv = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;

  overflow: auto;
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
  cursor: pointer;

  @media (min-width: 786px) {
    font-size: 25px;
  }
`;

const Paragraph = styled.p`
  color: ${colors.ligthGreyHEX};
  font-size: ${fontSize.bigFont};
  font-weight: ${fontWeight.fontWeightMedium};
  cursor: pointer;
  margin: 15px 15px;
  text-decoration: none;
  z-index: ${zIndex.level9};
  cursor: pointer;

  @media (min-width: 786px) {
    font-size: 25px;
  }
`;

const ValueContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const InnerValueContainer = styled.div`
  width: 70%;
  justify-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 786px) {
    width: 30%;
  }
`;

const ImageOuterButton = styled.button`
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 0 0 0;
  outline: none;
  border: none;
  cursor: pointer;

  background: transparent;
  transition: all 0.4s;

  transform: ${(props) => (props.active ? "rotate(180deg)" : "rotate(0)")};

  @media (min-width: 786px) {
    width: 30px;
    height: 30px;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.active ? "auto" : "0")};
  overflow: hidden;
  transition: transform 0.3s ease-out;
  transform: ${(props) => (props.active ? "scaleY(1)" : "scaleY(0)")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform-origin: top;
  cursor: pointer;
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
            title,
            slug
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
            title,
            slug
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

      <InnerDiv>
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
            <Paragraph onClick={() => setIsActive({ first: !isActive.first })}>
              KATEGORIE
            </Paragraph>
            <ImageOuterButton
              active={isActive.first}
              onClick={() => setIsActive({ first: !isActive.first })}>
              <Image
                src='/arrow.png'
                width={60}
                height={60}
                layout='responsive'
              />
            </ImageOuterButton>
          </InnerValueContainer>
          <ListContainer active={isActive.first}>
            <DefaultList
              items={isCategory}
              path='categories'
              handleClose={handlerIsVisible}
            />
          </ListContainer>
        </ValueContainer>
        <ValueContainer>
          <InnerValueContainer>
            <Paragraph
              onClick={() => setIsActive({ second: !isActive.second })}>
              PRODUCENCI
            </Paragraph>
            <ImageOuterButton
              active={isActive.second}
              onClick={() => setIsActive({ second: !isActive.second })}>
              <Image
                src='/arrow.png'
                width={60}
                height={60}
                layout='responsive'
              />
            </ImageOuterButton>
          </InnerValueContainer>
          <ListContainer active={isActive.second}>
            <DefaultList
              items={isProducer}
              path='producers'
              handleClose={handlerIsVisible}
            />
          </ListContainer>
        </ValueContainer>
        <Link href='/rules'>
          <Anchor onClick={handlerIsVisible}>REGULAMIN</Anchor>
        </Link>
      </InnerDiv>
    </Container>
  );
};

export default NavBar;
