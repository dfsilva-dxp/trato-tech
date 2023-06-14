import { ShoppingCart } from "phosphor-react";

import * as S from "./styles";

import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <S.NavContent>
      <S.Logo src={logo} />

      <S.Links>
        <S.Link href="/">Home</S.Link>
      </S.Links>

      <S.Search>
        <h1>Search</h1>
      </S.Search>

      <S.Icons>
        <ShoppingCart size={20} weight="bold" />
      </S.Icons>
    </S.NavContent>
  );
};

export default Navbar;
