/** @format */

import { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Layout from "../../layout/Layout";
import SanityClient from "../../utils/client";
import { colors, fontWeight, zIndex } from "../../utils";

import { useSwipeable } from "react-swipeable";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HelperContainer = styled.div`
  width: 100%;
  height: 55vh;
  background: transparent;
`;

const AboutContainer = styled.div`
  width: 100%;
  border-radius: 25px 25px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.darkGreyHEX};
  z-index: ${zIndex.level7};
  padding: 0 0 20% 0;
`;

const Subject = styled.h2`
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

const AddCartButton = styled.button`
  position: relative;
  border: none;
  background: ${colors.defaultBlackHEX};
  border-radius: 5px;
  width: 90%;
  height: 50px;
  color: ${colors.ligthGreyHEX};
  font-size: 20px;
  text-transform: uppercase;
  font-weight: ${fontWeight.fontWeightMedium};
  margin: 20px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    border: 2px solid ${colors.ligthGreyHEX};
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.05);
    border-radius: 5px;
    z-index: ${zIndex.leve1};
    transition-duration: 0.1s;
  }

  &:active::after {
    transform: scale(1);
  }
`;

const SelectStyled = styled.select`
  border: 2px solid ${colors.ligthGreyHEX};
  margin: 25px 0;
  width: 90%;
  height: 50px;
  background: ${colors.defaultBlackHEX};
  color: ${colors.midGreyHEX};
  font-weight: ${fontWeight.fontWeightMedium};

  font-size: 15px;
`;

const BackgroundImageStyled = styled(Image)`
  width: 100%;
  height: 40vh;
  z-index: ${zIndex.levelMinus1};
  object-fit: cover;
  object-position: 70%;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  animation: ${(props) => (props.active ? fadeIn : fadeOut)} 0.2s linear;
`;

const fadeIn = keyframes`
  from {
    transform: scale(.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }
  to {
    transform: scale(.9);
    opacity: 1;
  }
`;

const ImageDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 60vh;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 60vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const ScrollButton = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 65%;
  right: 20px;
`;

const ArrowButtonPrev = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 40%;
  left: 15px;
  width: 40px;
  height: 40px;
  transition-duration: 0.2s;
  z-index: ${zIndex.level5};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: ${zIndex.levelMinus1};
    background: rgba(0, 0, 0, 0.5);
    filter: blur(8px);
  }

  &:active {
    transform: translateX(-5px);
  }
`;
const ArrowButtonNext = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  top: 40%;
  right: 15px;
  width: 40px;
  height: 40px;
  transition-duration: 0.2s;
  z-index: ${zIndex.level5};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: ${zIndex.levelMinus1};
    background: rgba(0, 0, 0, 0.5);
    filter: blur(8px);
  }
  &:active {
    transform: translateX(5px);
  }
`;

const ProductPage = ({ product }) => {
  const [current, setCurrent] = useState(0);
  const myRef = useRef();

  const ImageArray = product.defaultProductVariant.images.length;

  const nextSlide = () => {
    setCurrent(current === ImageArray - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? ImageArray - 1 : current - 1);
  };

  const handerLeft = useSwipeable({
    onSwipedLeft: () => {
      setCurrent(current === ImageArray - 1 ? 0 : current + 1);
    },
  });
  const handlerRight = useSwipeable({
    onSwipedRight: () => {
      setCurrent(current === 0 ? ImageArray - 1 : current - 1);
    },
  });

  const refPassthrough = (el) => {
    handerLeft.ref(el);
    handlerRight.ref(el);

    myRef.current = el;
  };

  const handleScroll = () => {
    const el = document.getElementById("paragraph");

    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <Layout>
      <Container>
        <HelperContainer>
          <ImageDiv ref={refPassthrough}>
            <ArrowButtonPrev onClick={prevSlide}>
              <Image src='/arrow-left.png' width={30} height={30} />
            </ArrowButtonPrev>
            <ArrowButtonNext onClick={nextSlide}>
              <Image src='/arrow-right.png' width={30} height={30} />
            </ArrowButtonNext>
            {product.defaultProductVariant.images.map((image, index) => {
              return (
                <>
                  {index === current && (
                    <BackgroundImageStyled
                      src={image.asset.url}
                      active={current === index}
                      layout='fill'
                    />
                  )}
                </>
              );
            })}
          </ImageDiv>
        </HelperContainer>
        <AboutContainer>
          <Subject>{product.title}</Subject>
          <ScrollButton onClick={handleScroll}>
            <Image src='/arrow.png' width={20} height={20} />
          </ScrollButton>
          <Paragraph id='paragraph'>
            {product.body.pl[0].children[0].text}
          </Paragraph>
          {product.variants ? (
            <SelectStyled>
              {product.variants.map((item) => {
                return (
                  <option>
                    {item.title}, {item.price}zł
                  </option>
                );
              })}
            </SelectStyled>
          ) : null}
          <AddCartButton> add to cart </AddCartButton>
        </AboutContainer>
      </Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await SanityClient.fetch(
    `*[_type == "product" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const product = await SanityClient.fetch(
    `
      *[_type == "product" && slug.current == $slug][0] {
        slug,
        categories,
        producent,
        title,
        body,
        variants,
        defaultProductVariant {
          price,
        images[]{
          asset->{
          url
        }
        }
      }
      }
    `,
    { slug }
  );
  return {
    props: {
      product,
    },
  };
}

export default ProductPage;
