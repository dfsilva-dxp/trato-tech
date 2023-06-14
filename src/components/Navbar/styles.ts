import styled, { css } from "styled-components";

export const NavContent = styled.header`
  width: 100vw;
  height: 5rem;
  padding: 0 7.5rem;
  position: absolute;
  z-index: 1;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: "logo links search icons";

  @media (max-width: 1024px) {
    height: 10rem;
    grid-template-areas:
      "logo logo"
      "links icons"
      "search search";
    grid-template-columns: 6fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
  }

  @media (max-width: 768px) {
    padding: 0 2.5rem;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  grid-area: logo;
`;

export const Links = styled.nav`
  grid-area: links;

  display: flex;
  justify-content: flex-start;
  gap: 1.25rem;

  @media (max-width: 1024px) {
    justify-self: start;
  }
`;

export const Link = styled.a`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.purple400};
    transition: 0.15s ease-out;

    &:hover {
      color: ${theme.colors.purple800};
      text-decoration: underline;
    }
  `}
`;

export const Search = styled.span`
  width: 100%;

  grid-area: search;
  display: flex;
  align-items: center;
`;

export const Icons = styled.span`
  margin-left: 30px;
  grid-area: icons;

  display: flex;
  gap: 1.25rem;
`;
