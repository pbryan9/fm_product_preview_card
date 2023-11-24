import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.footer`
  font-size: 11px;
  text-align: center;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  min-width: 100vw;
`;

export default function Attribution() {
  return (
    <Wrapper>
      Challenge by{' '}
      <Link href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
        Frontend Mentor
      </Link>
      . Coded by{' '}
      <Link href='https://pattyb.dev' target='_blank'>
        Patrick Bryan
      </Link>
      .
    </Wrapper>
  );
}
