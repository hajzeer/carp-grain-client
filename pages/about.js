/** @format */

import Layout from "../layout/Layout";
import Image from "next/image";
import styled from "styled-components";
import { colors } from "../utils";

const Container = styled.div`
  width: 100%;
  height: auto;

  padding: 30px 0 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  margin: 20px;
  color: ${colors.ligthGreyHEX};
`;

const Subject = styled.h3`
  text-align: center;
  color: ${colors.ligthGreyHEX};
  text-transform: uppercase;
`;

const About = () => {
  return (
    <Layout>
      <Container>
        <Image
          src='/images/about_image.jpg'
          layout='fixed'
          width={350}
          height={350}
          objectFit='contain'
        />
        <Subject>Carp Grain Team</Subject>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
          nunc sed felis fermentum, vitae viverra arcu commodo. Sed at eros
          libero. Quisque maximus leo vitae sapien fermentum, ut ullamcorper
          odio lacinia. Etiam tristique metus vel risus tempus, ac auctor eros
          luctus. Nulla vel urna nisi. Nunc aliquam nisl a dolor ultricies, non
          venenatis justo faucibus. Nulla finibus laoreet ex, sed dictum nunc
          consequat vitae. Vivamus nec sodales lacus. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Mauris ut ante ut dui placerat
          consequat ut eu metus. Donec ante leo, egestas ac efficitur quis,
          tincidunt rutrum lectus. Nulla accumsan lorem ac risus tristique
          ultrices.
        </Paragraph>
        <Image
          src='/logo.png'
          layout='fixed'
          width={100}
          height={100}
          objectFit='contain'
        />
      </Container>
    </Layout>
  );
};
export default About;
