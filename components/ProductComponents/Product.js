/** @format */

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { zIndex, colors, fontWeight } from "../../utils";

const Container = styled.button`
  width: 170px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: none;
  font-family: "Prompt", sans-serif;
`;

const Anchor = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: ${colors.ligthGreyHEX};
  font-size: 15px;
  font-weight: ${fontWeight.fontWeightMedium};
  margin: 0;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const PriceParagraph = styled.p`
  text-transform: uppercase;
  color: ${colors.ligthGreyHEX};
  font-weight: ${fontWeight.fontWeightMedium};
  margin: 0;
  width: 100%;
  justify-self: flex-start;
`;

const DiscountParagraph = styled.p`
  text-transform: uppercase;
  color: #ff2727;
  font-weight: ${fontWeight.fontWeightBold};
  font-size: 20px;
  margin: 0;
  width: 100%;
  justify-self: flex-start;
`;

const ImageContainer = styled.div`
  width: 95%;
  height: auto;

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
  return (
    <Link href={`/products/${value.slug.current}`}>
      <Anchor>
        <Container>
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
            <PriceParagraph>{item.price.toFixed(2)} zł</PriceParagraph>
            {item.discount != null ? (
              <DiscountParagraph>
                {item.discount.toFixed(2)} zł
              </DiscountParagraph>
            ) : null}
          </TextContainer>
        </Container>
      </Anchor>
    </Link>
  );
};

export default Products;
