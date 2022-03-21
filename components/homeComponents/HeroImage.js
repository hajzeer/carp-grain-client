/** @format */
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { zIndex, colors } from "../../utils";
import sanityClient from "../../utils/client";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: ${zIndex.levelMinus1};
`;

const HelperDiv = styled.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${zIndex.level2};
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 20% 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const BackgroundImageStyled = styled(Image)`
  width: 100%;
  height: 100vh;

  object-fit: cover;
  object-position: 70%;

  display: inline-block;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  animation: ${(props) => (props.active ? fadeIn : fadeOut)} 0.5s linear;
  transition: visibility 0.5s linear;
`;

const fadeIn = keyframes`
  from {
    transform: scale(1.1);
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
    transform: scale(1.1);
    opacity: 1;
  }
`;

const ImageDiv = styled.div`
  justify-self: flex-start;
  display: block;
  width: 200px;
  height: 200px;

  @media (min-width: 786px) {
    width: 300px;
    height: 300px;
  }
`;

const ImageStyled = styled(Image)`
  z-index: ${zIndex.level3};
`;

const Subject = styled.h1`
  text-align: center;
  z-index: ${zIndex.level3};
  color: ${colors.ligthGreyHEX};
  text-transform: uppercase;
`;
const HeroImage = () => {
  const [isImage, setIsImage] = useState("");
  const [current, setCurrent] = useState(0);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="ImagesCollection"]{
            images[]{
              asset->{
                url
            }
            }
          }`
      )
      .then((data) => {
        setIsImage(data);
        setLoading(true);
      })
      .catch(console.error);
    if (isLoading === true) {
      const ImageArray = isImage[0].images.length;
      const Interval = setInterval(() => {
        setCurrent(current === ImageArray - 1 ? 0 : current + 1);
      }, 5000);
      return () => clearInterval(Interval);
    }
  }, [current]);

  return (
    <Container>
      <HelperDiv />
      {isImage
        ? isImage[0].images.map((value, index) => {
            return (
              <>
                {index === current && (
                  <BackgroundImageStyled
                    key={index}
                    active={current === index}
                    src={value.asset.url}
                    layout='fill'
                  />
                )}
              </>
            );
          })
        : null}

      <InnerContainer>
        <ImageDiv>
          <ImageStyled
            src='/transparent_light_logo.png'
            layout='responsive'
            width={300}
            height={300}
          />
        </ImageDiv>
        <Subject>carp grain shop</Subject>
      </InnerContainer>
    </Container>
  );
};
export default HeroImage;
