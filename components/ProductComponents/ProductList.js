/** @format */

import styled from "styled-components";
import Products from "./Product";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ProductsList = ({ items, value }) => {
  return items.map((item) => {
    return item.categories.map((element) => {
      return (
        <>
          {element.title === value ? (
            <Container key={items.id}>
              <Products item={item.defaultProductVariant} value={item} />
            </Container>
          ) : null}
        </>
      );
    });
  });
};

export default ProductsList;
