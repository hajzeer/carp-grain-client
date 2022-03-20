/** @format */

import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { colors } from "../utils";
import Header from "../components/layoutComponents/header";
import Footer from "../components/layoutComponents/footer";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background: ${colors.darkGreyHEX};
    margin: 0;
    padding: 0;
    font-family: 'Prompt', sans-serif;
}
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Carp Grain</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <section>
        <Header />
        {children}
        <Footer />
      </section>
    </>
  );
};

export default Layout;
