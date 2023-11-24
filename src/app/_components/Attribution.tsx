import styled from 'styled-components';

const Wrapper = styled.footer`
  font-size: 11px;
  text-align: center;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export default function Attribution() {
  return (
    <Wrapper>
      Challenge by{' '}
      <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href='https://pattyb.dev' target='_blank'>
        Patrick Bryan
      </a>
      .
    </Wrapper>
  );
}
