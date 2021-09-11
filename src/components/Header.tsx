import React from "react";
import styled from "@emotion/styled";
import { IMG } from "./Image";

const Container = styled.section`
  grid-area: logo;
  height: 100px;
  padding: 48px 96px 0px 24px;
  @media (min-width: 769px) {
    height: 100px;
    padding: 48px 96px 0px 96px;
  }
`;

const LogoImgCss = {
  float: "left",
  width: "120px"
} as const;

const Header = (props: {
  logo: { mobile: string; desktop: string; alt: string };
}) => (
  <Container>
    <IMG {...props.logo} style={LogoImgCss} />
  </Container>
);

export default Header;
