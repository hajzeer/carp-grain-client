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
import Loading from "../components/layoutComponents/loading";

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
  justify-content: flex-start;
  overflow-y: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 786px) {
    height: 320px;
  }
`;
const Subject = styled.h2`
  color: ${colors.ligthGreyHEX};
  font-size: 25px;
  margin: 0 0 0 10px;

  @media (min-width: 786px) {
    font-size: 35px;
  }
`;

const ButtonStyled = styled.button`
  position: absolute;
  bottom: 20%;
  left: 50%;
  margin-left: -60px;
  margin-left: -125px;
  padding: 10px;
  width: 250px;
  height: 60px;
  background: none;
  border: 2px solid ${colors.ligthGreyHEX};
  border-radius: 25px;
  text-transform: uppercase;
  color: ${colors.ligthGreyHEX};
  cursor: pointer;
  z-index: ${zIndex.level3};
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  outline: none;
  transition: all .1s ease-out;
  
  &:active {
    outline: none;

    -webkit-box-shadow: -1px 2px 18px 6px rgba(241, 241, 241, .5);
    -moz-box-shadow: -1px 2px 18px 6px rgba(241, 241, 241, .5);
    box-shadow: -1px 2px 18px 6px rgba(241, 241, 241, .5);
    transform: scale(.95);

  }
  
  &:hover {
    -webkit-box-shadow: -1px 2px 18px 6px rgba(241, 241, 241, .5);
    -moz-box-shadow: -1px 2px 18px 6px rgba(241, 241, 241, .5);
    box-shadow: -1px 2px 18px 6px rgba(241, 241, 241, .5);
  }

  @media (min-width: 786px) {
    font-size: 20px;
    width: 300px;
    margin-left: -150px;
  }
`;

const LoadingPageStyled = styled.div`

  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

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
          rozpocznij zakupy
          <Image src='/arrow.png' width={20} height={20} />
        </ButtonStyled>
      </HelperContainer>
      <Container>
        <Link href='/categories/nowosci' passHref>
          <Anchor>
            <Subject id='theFirst'>Nowości</Subject>
          </Anchor>
        </Link>
        <InnerContainer>
          {isLoading ? (
            <ProductsList value='nowości' items={isData} />
          ) : (
              <Loading/>
          )}
        </InnerContainer>
        <Link href='/categories/promocje' passHref>
          <Anchor>
            <Subject>Promocje</Subject>
          </Anchor>
        </Link>
        <InnerContainer>
          {isLoading ? (
            <ProductsList value='promocje' items={isData} />
          ) : (
              <Loading/>
          )}
        </InnerContainer>
        <Link href='/categories/popularne' passHref>
          <Anchor>
            <Subject>Popularne</Subject>
          </Anchor>
        </Link>
        <InnerContainer>
          {isLoading ? (
            <ProductsList value='popularne' items={isData} />
          ) : (
            <Loading/>
          )}
        </InnerContainer>
      </Container>
    </Layout>
  );
}
