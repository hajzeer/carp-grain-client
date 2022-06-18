/** @format */

import styled from "styled-components";

const ContainerFooter = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;

  width: 100%;
  height: auto;

  padding: 20px 0 80px 0;

  background: #151515;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: #f1f1f1;

  p,
  a,
  h3 {
    padding: 0 0 0 20px;
    color: #f1f1f1;
    text-decoration: none;
  }

  @media (min-width: 786px) {
    font-size: 20px;
  }
`;

const Footer = () => {
  return (
    <ContainerFooter>
      <h3> Carp Grains </h3>
      <p>Kontakt: </p>
      <a href='tel:+48-690-690-157'>+48 690 690 157</a>
      <br />
      <a href='mailto:carpgrains@wp.pl'>carpgrains@wp.pl</a>
      <p>
        Numer konta:
        <br />
          73 1050 1298 1000 0092 5258 2250
      </p>
      <p>
        Polityka prywatności: <br />©{new Date().getFullYear()} Created by
        hiThere Studio for Carp Grains <br />
        All rights reserved
      </p>
    </ContainerFooter>
  );
};

export default Footer;
