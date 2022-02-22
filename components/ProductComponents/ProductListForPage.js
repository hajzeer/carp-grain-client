/** @format */

import styled from "styled-components";
import Products from "./Product";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductsListForPage = ({ items }) => {
  return items.map((item) => {
    return (
      <Container>
        <Products item={item.defaultProductVariant} value={item} />
      </Container>
    );
  });
};

export default ProductsListForPage;
