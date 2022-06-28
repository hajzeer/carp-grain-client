/** @format */

import Layout from "../layout/Layout";
import Image from "next/image";
import styled from "styled-components";
import { colors } from "../utils";

const Container = styled.div`
  width: 100%;
  height: auto;

  //padding: 30px 0 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  height: auto;



  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Paragraph = styled.p`
  margin: 20px;
  color: ${colors.ligthGreyHEX};
`;

const Subject = styled.h3`
  text-align: center;
  color: ${colors.ligthGreyHEX};
  text-transform: uppercase;
`;

const ImageDiv = styled.div`
  width: 90%;
  height: auto;
  margin: 10px;


  @media (min-width: 1024px) {
    width: 70%;
    margin: 50px 0;
    height: auto;
  }
`;

const About = () => {
  return (
    <Layout>
      <Container>
        <InnerContainer>
          <ImageDiv>
        <Image
          src='/images/about_image.jpg'
          width={500}
          height={500}
          objectFit='contain'
        />
          </ImageDiv>
        </InnerContainer>
      <InnerContainer>
        <Subject>Carp Grains Team</Subject>
        <Paragraph>
            Carp Grains Team, drużyna mistrzów World Carp Classic 2020, oraz oficlajny dystrybutor Dream Baits, Ridge Monkey, Raptor Boats oraz RCG 
        </Paragraph>
        <Image
          src='/logo.png'
          layout='fixed'
          width={100}
          height={100}
          objectFit='contain'
        />
    </InnerContainer>
      </Container>
    </Layout>
  );
};
export default About;
