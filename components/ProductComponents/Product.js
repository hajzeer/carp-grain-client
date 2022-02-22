/** @format */

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { zIndex, colors, fontWeight } from "../../utils";

const Container = styled.div`
  width: 170px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Anchor = styled.a`
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  color: ${colors.ligthGreyHEX};
  font-size: 15px;
  margin: 0 0 0 10px;
  font-weight: ${fontWeight.fontWeightMedium};
`;
const PriceParagraph = styled.p`
  text-transform: uppercase;
  color: ${colors.ligthGreyHEX};
  margin: 0 0 0 10px;
  font-weight: ${fontWeight.fontWeightMedium};
`;

const ImageContainer = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  display: block;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 20%;
  padding: 0 0 0 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 20%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Products = ({ item, value }) => {
  console.log(item);
  return (
    <Container>
      <Link href={`/products/${value.slug.current}`}>
        <Anchor>
          <ImageContainer>
            <Image
              src={item.images[0].asset.url}
              layout='responsive'
              width='150px'
              height='150px'
              objectFit='cover'
            />
          </ImageContainer>
          <TitleContainer>
            <Title>{item.title}</Title>
          </TitleContainer>
          <TextContainer>
            <PriceParagraph>{item.price} zł</PriceParagraph>
          </TextContainer>
        </Anchor>
      </Link>
    </Container>
  );
};

export default Products;
