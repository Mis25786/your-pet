import { styled } from 'styled-components';

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 60px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const NavBarLink = styled.a`
  font-family: Manrope500;
  font-size: 32px;
  transition: transform  250ms linear;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.yellow};
    cursor: pointer;
    transform: scale(1.1);
  }

  &.active {
    font-family: Manrope700;
    color: ${p => p.theme.colors.yellow};
  }
`;
