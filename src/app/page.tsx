'use client';

import Image from 'next/image';
import styled from 'styled-components';
import mobileImage from '@/images/image-product-mobile.jpg';
import desktopImage from '@/images/image-product-desktop.jpg';
import cartIcon from '@/images/icon-cart.svg';

const BREAKPOINT = '650px';

const Wrapper = styled.main`
  width: 90vw;
  max-width: 343px;
  margin: 30px auto;

  font-size: var(--fs-standard);
  font-family: var(--font-montserrat);

  background-color: hsl(var(--white));
  color: hsl(var(--dark-blue));

  border-radius: 12px;
  overflow: clip;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${BREAKPOINT}) {
    /* min-height: 400px; */
    /* max-width: 540px; */
    height: fit-content;
    max-width: 540px;

    margin: 0;

    flex-direction: row;
    align-items: normal;

    overflow: initial;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ImageWrapper = styled.div`
  overflow: clip;
  width: 100%;

  border-radius: 12px 12px 0 0;

  @media only screen and (min-width: ${BREAKPOINT}) {
    width: 50%;
    flex-shrink: 0;
    border-radius: 12px 0 0 12px;
  }
`;

const ProductImageBase = styled(Image)`
  object-fit: cover;
  height: 100%;

  @media only screen and (min-width: ${BREAKPOINT}) {
  }
`;

const ProductImageMobile = styled(ProductImageBase)`
  @media only screen and (min-width: ${BREAKPOINT}) {
    display: none;
  }
`;

const ProductImageDesktop = styled(ProductImageBase)`
  display: none;

  @media only screen and (min-width: ${BREAKPOINT}) {
    display: initial;
  }
`;

const InfoContainer = styled.section`
  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 18px;
  flex-shrink: 0;

  @media only screen and (min-width: ${BREAKPOINT}) {
    width: 50%;
  }
`;

const ProductCategory = styled.p`
  text-transform: uppercase;
  color: hsl(var(--gray-blue));
  letter-spacing: 0.25rem;
  font-size: 0.9em;

  @media only screen and (min-width: ${BREAKPOINT}) {
    font-size: 0.75em;
    width: 50%;
  }
`;

const ProductName = styled.h1`
  font-family: var(--font-fraunces);
  font-size: 1.9rem;

  line-height: 1;
`;

const ProductDescription = styled.p`
  color: hsl(var(--gray-blue));

  @media only screen and (min-width: ${BREAKPOINT}) {
    font-size: 0.95em;
    /* width: 50%; */
  }
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
  font-size: 0.9em;
`;

const CartButton = styled.button`
  background-color: hsl(var(--dark-cyan));
  color: hsl(var(--white));
  border: none;
  border-radius: 8px;

  height: 48px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 12px;

  cursor: pointer;

  &:hover {
    background-color: hsl(
      156.31578947368422,
      42.22222222222223%,
      17.64705882352941%
    );
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <ImageWrapper>
        <ProductImageMobile
          src={mobileImage}
          alt='elegant, square-shaped perfume bottle with Gabrielle and CHANEL wordmarks'
        />
        <ProductImageDesktop
          src={desktopImage}
          alt='elegant, square-shaped perfume bottle with Gabrielle and CHANEL wordmarks'
        />
      </ImageWrapper>
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
