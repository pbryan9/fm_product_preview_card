'use client';

import Image from 'next/image';
import styled from 'styled-components';
import mobileImage from '@/images/image-product-mobile.jpg';
import desktopImage from '@/images/image-product-desktop.jpg';
import cartIcon from '@/images/icon-cart.svg';

const Wrapper = styled.article`
  width: 90vw;
  margin: 30px auto;

  font-size: var(--fs-standard);
  font-family: var(--font-montserrat);

  background-color: hsl(var(--white));

  border-radius: 12px;
  overflow: clip;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled(Image)`
  object-fit: cover;

  flex-basis: 33%;
`;

const InfoContainer = styled.section`
  background-color: hsl(var(--white));
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductCategory = styled.p`
  text-transform: uppercase;
  color: hsl(var(--gray-blue));
  letter-spacing: 0.25rem;
`;

const ProductName = styled.h1`
  font-family: var(--font-fraunces);
  font-size: 2rem;

  line-height: 1;
`;

const ProductDescription = styled.p`
  color: hsl(var(--gray-blue));
`;

const ProductPrice = styled.p`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const CurrentPrice = styled.span`
  font-family: var(--font-fraunces);
  font-size: 2rem;
  color: hsl(var(--dark-cyan));

  line-height: 1;
`;

const OriginalPrice = styled.span`
  color: hsl(var(--gray-blue));
  text-decoration: line-through;
`;

const CartButton = styled.button`
  background-color: hsl(var(--dark-cyan));
  color: hsl(var(--white));
  border: none;
  border-radius: 8px;

  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 12px;
`;

export default function Home() {
  return (
    <Wrapper>
      <ProductImage
        src={mobileImage}
        alt='elegant, square-shaped perfume bottle with Gabrielle and CHANEL wordmarks'
      />
      <InfoContainer>
        <ProductCategory>Perfume</ProductCategory>

        <ProductName>Gabrielle Essence Eau De Parfum</ProductName>

        <ProductDescription>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </ProductDescription>

        <ProductPrice>
          <CurrentPrice>$149.99</CurrentPrice>
          <OriginalPrice>$169.99</OriginalPrice>
        </ProductPrice>

        <CartButton>
          <Image src={cartIcon} alt='' />
          Add to Cart
        </CartButton>
      </InfoContainer>
    </Wrapper>
  );
}
