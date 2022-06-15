import groq from 'groq';

export const merchQuery = groq`
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
`;
