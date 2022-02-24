/** @format */
import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

import Layout from "../../layout/Layout";
import SanityClient from "../../utils/client";
import { colors, fontWeight, zIndex } from "../../utils";
import ProductsListForPage from "../../components/ProductComponents/ProductListForPage";
import { byPriceLowest, byPriceHighest } from "../../functions/helpFunc";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 15% 0 20% 0;
  background: ${colors.darkGreyHEX};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerContainer = styled.div`
  z-index: ${zIndex.level5};
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 100px 0 0 0;
`;

const FieldsetStyled = styled.fieldset`
  z-index: ${zIndex.level7};

  border: none;
  width: 100%;
  height: auto;
  margin: 0 20px 0 0;
`;

const SelectButton = styled.button`
  width: 40px;
  height: 40px;
  outline: none;
  border: none;
  background: transparent;
  transition: all 0.4s;

  transform: ${(props) => (props.active ? "rotate(180deg)" : "rotate(0)")};
`;

const DivInnerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  color: ${colors.ligthGreyHEX};
  font-weight: ${fontWeight.fontWeightBold};
  text-transform: uppercase;
`;

const ListContainer = styled.div`
  z-index: ${zIndex.level7};
  width: 100%;
  height: auto;
  overflow: hidden;
  transition: transform 0.2s ease-out;
  transform: ${(props) => (props.active ? "scaleY(1)" : "scaleY(0)")};
  background: ${colors.darkGreyHEX};
  transform-origin: top;
`;

const LabelStyled = styled.label`
  color: ${colors.ligthGreyHEX};
  font-weight: ${fontWeight.fontWeightMedium};
  text-transform: uppercase;
`;

const FormStyled = styled.form`
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
`;

const CategoryPage = ({ category }) => {
  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState({
    lowest: false,
    highest: false,
  });

  const handleLowestChange = () => {
    setIsChecked({ highest: false, lowest: true });
    category.sort(byPriceLowest);
  };

  const handleHighestChange = () => {
    setIsChecked({ highest: true, lowest: false });
    category.sort(byPriceHighest);
  };

  const handleOpen = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  return (
    <Layout>
      <Container>
        <FormStyled>
          <FieldsetStyled>
            <DivInnerButton>
              <Paragraph>Sortuj wg</Paragraph>
              <SelectButton active={isActive} onClick={handleOpen}>
                <Image src='/arrow.png' width={20} height={20} />
              </SelectButton>
            </DivInnerButton>
            <ListContainer active={isActive}>
              <input
                type='radio'
                id='the__highest'
                name='sort'
                value={isChecked.lowest}
                onChange={handleLowestChange}
              />
              <LabelStyled for='the__highest'>Najwyższa cena</LabelStyled>
              <br />
              <input
                type='radio'
                id='the__lowest'
                name='sort'
                value={isChecked.highest}
                onChange={handleHighestChange}
              />
              <LabelStyled for='the__lowest'>najniższa cena</LabelStyled>
            </ListContainer>
          </FieldsetStyled>
        </FormStyled>
        <InnerContainer>
          <ProductsListForPage items={category} />
        </InnerContainer>
      </Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await SanityClient.fetch(
    `*[_type == "category" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const category = await SanityClient.fetch(
    `
        *[_type == "product" && $slug in categories[]->.slug.current] {
            slug,
        title,
        defaultProductVariant{
            title,
            price,
            images[]{
                asset->{
                    url
                }
            }
        }
    }
      `,
    { slug }
  );
  return {
    props: {
      category,
    },
  };
}

export default CategoryPage;
