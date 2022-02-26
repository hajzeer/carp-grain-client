/** @format */

import { useState, useEffect } from "react";
import styled from "styled-components";
import HeroImage from "../components/homeComponents/HeroImage";
import ProductsList from "../components/ProductComponents/ProductList";
import Layout from "../layout/Layout";
import { colors, zIndex } from "../utils";
import sanityClient from "../utils/client";
import Image from "next/image";
import Link from "next/link";

const HelperContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: transparent;
`;
const Container = styled.div`
  border-radius: 25px 25px 0 0;
  width: 100%;
  height: auto;
  padding: 15% 0 20% 0;
  background: ${colors.darkGreyHEX};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Subject = styled.h2`
  color: ${colors.ligthGreyHEX};
  font-size: 25px;
  margin: 0 0 0 10px;
`;

const ButtonStyled = styled.button`
  position: absolute;
  bottom: 20%;
  left: 25%;
  width: 200px;
  height: 50px;
  border: none;
  background: none;
  text-decoration: underline;
  color: ${colors.defaultWhiteHEX};
  cursor: pointer;
  z-index: ${zIndex.level3};
`;

const Anchor = styled.a`
  text-decoration: none;
`;

export default function Home() {
  const [isData, setIsData] = useState(Array);
  const [isLoading, setLoading] = useState(false);

  const getData = () => {
    sanityClient
      .fetch(
        `*[_type=="product"]{
          slug,
        categories[]->,
        variants,
                  defaultProductVariant{
                  discount,
                  title,
                  price,
                  images[]{
                    asset->{
                    url
                  }
                  }
                }
                }`
      )
      .then((data) => {
        setIsData(data);
        setLoading(true);
      })
      .catch(console.error);
  };

  const handleScroll = () => {
    const el = document.getElementById("theFirst");

    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <HelperContainer>
        <HeroImage />
        <ButtonStyled onClick={handleScroll}>
          Naciśnij i sprawdź <br />
          <Image src='/arrow.png' width={20} height={20} />
        </ButtonStyled>
      </HelperContainer>
      <Container>
        <Link href='/categories/nowosci'>
          <Anchor>
            <Subject id='theFirst'>Nowości</Subject>
          </Anchor>
        </Link>
        <InnerContainer>
          {isLoading ? (
            <ProductsList value='nowości' items={isData} />
          ) : (
            <p>loading</p>
          )}
        </InnerContainer>
        <Link href='/categories/promocje'>
          <Anchor>
            <Subject>Promocje</Subject>
          </Anchor>
        </Link>
        <InnerContainer>
          {isLoading ? (
            <ProductsList value='promocje' items={isData} />
          ) : (
            <p>loading</p>
          )}
        </InnerContainer>
        <Link href='/categories/popularne'>
          <Anchor>
            <Subject>Popularne</Subject>
          </Anchor>
        </Link>
        <InnerContainer>
          {isLoading ? (
            <ProductsList value='ulubione' items={isData} />
          ) : (
            <p>loading</p>
          )}
        </InnerContainer>
      </Container>
    </Layout>
  );
}
