/** @format */

import { useState, useRef, useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../layout/Layout";
import SanityClient from "../../utils/client";
import { colors, fontSize, fontWeight, zIndex } from "../../utils";
import BlockContent from "@sanity/block-content-to-react";
import YouTube from "react-youtube";
import getYouTubeId from "get-youtube-id";
import { useSwipeable } from "react-swipeable";
import { CartContext } from "../../context/cartContext";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HelperContainer = styled.div`
  width: 100%;
  height: 55vh;
  background: transparent;
`;

const AboutContainer = styled.div`
  width: 100%;
  border-radius: 25px 25px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.darkGreyHEX};
  z-index: ${zIndex.level7};
  padding: 0 0 20% 0;
`;

const Subject = styled.h1`
  width: 80%;
  color: ${colors.ligthGreyHEX};
  margin: 15px 0 0 0;
  font-size: ${fontSize.bigFont};
  padding: 0;
  text-align: center;
`;

const PriceSubject = styled.h2`
  width: 80%;
  color: ${(props) => (props.discount ? "#FF2727" : `${colors.ligthGreyHEX}`)};
  margin: 15px 0 0 0;
  font-size: ${(props) => (props.discount ? `40px` : `${fontSize.bigFont}`)};
  padding: 0;
  text-align: center;
`;

const ContentContainer = styled.div`
  margin: 20px;
  width: 100%;

  h1 {
    color: ${colors.ligthGreyHEX};
    margin: 15px;
  }
  h2 {
    color: ${colors.ligthGreyHEX};
    margin: 15px;
  }
  h3 {
    color: ${colors.ligthGreyHEX};
    margin: 15px;
  }
  h4 {
    color: ${colors.ligthGreyHEX};
    margin: 15px;
  }

  p {
    color: ${colors.ligthGreyHEX};
    margin: 15px;
  }

  iframe {
    width: 100%;
  }

  ul {
    color: ${colors.ligthGreyHEX};
  }

  a {
    text-decoration: underline;
    color: ${colors.midGreyHEX};
  }
`;

const AddCartButton = styled.button`
  position: relative;
  border: none;
  background: ${colors.defaultBlackHEX};
  width: 85%;
  height: 60px;
  color: ${colors.ligthGreyHEX};
  font-size: 20px;
  text-transform: uppercase;
  font-weight: ${fontWeight.fontWeightMedium};
  margin: 20px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    border: 2px solid ${colors.ligthGreyHEX};
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.01);
    z-index: ${zIndex.leve1};
    transition-duration: 0.1s;
  }

  &:active::after {
    transform: scale(1);
  }
`;

const SelectStyled = styled.select`
  border: 2px solid ${colors.ligthGreyHEX};
  margin: 25px 0;
  width: 90%;
  height: 50px;
  background: ${colors.defaultBlackHEX};
  color: ${colors.midGreyHEX};
  font-weight: ${fontWeight.fontWeightMedium};

  font-size: 15px;
`;

const BackgroundImageStyled = styled(Image)`
  width: 100%;
  height: 40vh;
  z-index: ${zIndex.levelMinus1};
  object-fit: cover;
  object-position: 70%;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  animation: ${(props) => (props.active ? fadeIn : fadeOut)} 0.2s linear;
`;

const fadeIn = keyframes`
  from {
    transform: scale(.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }
  to {
    transform: scale(.9);
    opacity: 1;
  }
`;

const ImageDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 60vh;
`;

const ScrollButton = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  position: absolute;
  top: 65%;
  right: 20px;
  transform: rotate(180deg);
`;

const ArrowButtonPrev = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 40%;
  left: 15px;
  width: 40px;
  height: 40px;
  transition-duration: 0.2s;
  z-index: ${zIndex.level5};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: ${zIndex.levelMinus1};
    background: rgba(0, 0, 0, 0.5);
    filter: blur(8px);
  }

  &:active {
    transform: translateX(-5px);
  }
`;
const ArrowButtonNext = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  top: 40%;
  right: 15px;
  width: 40px;
  height: 40px;
  transition-duration: 0.2s;
  z-index: ${zIndex.level5};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: ${zIndex.levelMinus1};
    background: rgba(0, 0, 0, 0.5);
    filter: blur(8px);
  }
  &:active {
    transform: translateX(5px);
  }
`;

const LogoAnchor = styled.a`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} />;
    },
  },
};

const ProductPage = ({ product }) => {
  const [current, setCurrent] = useState(0);
  const [isSelected, setIsSelected] = useState(null);
  const [isParsed, setIsParsed] = useState(null);

  const myRef = useRef();

  const { cart, setCart } = useContext(CartContext);

  const ImageArray = product.defaultProductVariant.images.length;

  const nextSlide = () => {
    setCurrent(current === ImageArray - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? ImageArray - 1 : current - 1);
  };

  const handerLeft = useSwipeable({
    onSwipedLeft: () => {
      setCurrent(current === ImageArray - 1 ? 0 : current + 1);
    },
  });
  const handlerRight = useSwipeable({
    onSwipedRight: () => {
      setCurrent(current === 0 ? ImageArray - 1 : current - 1);
    },
  });

  const refPassthrough = (el) => {
    handerLeft.ref(el);
    handlerRight.ref(el);

    myRef.current = el;
  };

  const handleScroll = () => {
    const el = document.getElementById("paragraph");

    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  const handleAdd = () => {
    let value = 1;

    const productPrice = 0;
    const variantTitle = null;
    const variantKey = null;
    if (isSelected != null) {
      productPrice = isParsed.price;
    } else {
      productPrice = product.defaultProductVariant.price.toFixed(2);
    }

    if (isSelected != null && isParsed.discount != null) {
      productPrice = isParsed.discount;
    } else if (product.defaultProductVariant.discount) {
      productPrice = product.defaultProductVariant.discount;
    }

    if (isParsed != null) {
      variantTitle = isParsed.title;
    } else {
      variantTitle = null;
    }

    if (isParsed != null) {
      variantKey = isParsed._key;
    } else {
      variantKey = product._id;
    }

    const productAdded = {
      id: product._id,
      key: variantKey,
      title: product.title,
      variant: variantTitle,
      Images: product.defaultProductVariant.images[0].asset.url,
      capacity: value,
      price: value * productPrice,
    };
    const exist = cart.find((x) => x.key === productAdded.key);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.key === productAdded.key
            ? { ...exist, capacity: exist.capacity + 1 }
            : x
        )
      );
    } else {
      setCart((currentState) => [...currentState, productAdded]);
    }
  };

  useEffect(() => {
    if (isSelected) setIsParsed(JSON.parse(isSelected));
  }, [isSelected]);
  return (
    <Layout>
      <Container>
        <HelperContainer>
          <ImageDiv ref={refPassthrough}>
            <ArrowButtonPrev onClick={prevSlide}>
              <Image src='/arrow-left.png' width={30} height={30} />
            </ArrowButtonPrev>
            <ArrowButtonNext onClick={nextSlide}>
              <Image src='/arrow-right.png' width={30} height={30} />
            </ArrowButtonNext>
            {product.defaultProductVariant.images.map((image, index) => {
              return (
                <>
                  {index === current && (
                    <BackgroundImageStyled
                      src={image.asset.url}
                      active={current === index}
                      layout='fill'
                    />
                  )}
                </>
              );
            })}
          </ImageDiv>
        </HelperContainer>
        <AboutContainer>
          <Subject>{product.title}</Subject>
          {isParsed != null && product.variants ? (
            <PriceSubject>{isParsed.price.toFixed(2)} zł</PriceSubject>
          ) : (
            <PriceSubject>
              {product.defaultProductVariant.price.toFixed(2)} zł
            </PriceSubject>
          )}
          {product.defaultProductVariant.discount ? (
            <PriceSubject discount>
              {product.defaultProductVariant.discount.toFixed(2)} zł
            </PriceSubject>
          ) : null}

          {isParsed != null && product.variants && isParsed.discount ? (
            <PriceSubject discount>
              {isParsed.discount.toFixed(2)} zł
            </PriceSubject>
          ) : null}

          <ScrollButton onClick={handleScroll}>
            <Image src='/arrow.png' width={20} height={20} />
          </ScrollButton>
          {product.variants ? (
            <SelectStyled
              value={isSelected}
              onChange={(e) => setIsSelected([e.target.value])}>
              <option value='none' selected disabled hidden>
                --- select variant ---
              </option>

              {product.variants.map((item) => {
                return (
                  <option key={item._id} value={JSON.stringify(item)}>
                    {item.title},{" "}
                    {item.discount
                      ? item.discount.toFixed(2)
                      : item.price.toFixed(2)}
                    zł
                  </option>
                );
              })}
            </SelectStyled>
          ) : null}
          {isParsed != null || !product.variants ? (
            <AddCartButton onClick={handleAdd} id='paragraph'>
              Dodaj do koszyka
            </AddCartButton>
          ) : (
            <AddCartButton id='paragraph'>
              Wybierz rodzaj produktu
            </AddCartButton>
          )}
          <ContentContainer>
            <BlockContent blocks={product.body.pl} serializers={serializers} />
          </ContentContainer>
          <Link href={`/producers/${product.producent.slug.current}`}>
            <LogoAnchor>
              <Image
                src={product.producent.logo.asset.url}
                layout='fixed'
                width={300}
                height={300}
                objectFit='contain'
              />
            </LogoAnchor>
          </Link>
        </AboutContainer>
      </Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await SanityClient.fetch(
    `*[_type == "product" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const product = await SanityClient.fetch(
    `
      *[_type == "product" && slug.current == $slug][0] {
        _id,
        slug,
        categories[]->,
        producent->{
          title,
          slug{
            current,
          },
          logo{
            asset->{
              url
            }
          }
        },
        title,
        body,
        variants,
        defaultProductVariant {
          discount,
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
      product,
    },
  };
}

export default ProductPage;
