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
      <h3> Carp Grain </h3>
      <p>Kontakt: </p>
      <a href='tel:+48-123-456-789'>+48 123 456 789</a>
      <br />
      <a href='mailto:mail@mail.com'>mail@mail.com</a>
      <p>
        Numer konta:
        <br />
        00 1111 2222 3333 4444 5555 6666
      </p>
      <p>
        Polityka prywatności: <br />©{new Date().getFullYear()} Created by
        hiThere Studio for Carp Grain <br />
        All rights reserved
      </p>
    </ContainerFooter>
  );
};

export default Footer;
