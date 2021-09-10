import React from "react";
import styled from "@emotion/styled";
import { IMG } from "../Image";
import Header from "../Header";
import { H1, H2, P } from "../Typography";

const Container = styled.section`
  position: relative;
  width: 100%;
  max-width: 1140px;
  display: grid;
  grid-template: "logo" "image" "container";
  text-align: center;
  background-color: white;
  @media (min-width: 769px) {
    grid-template: "logo image" "container image";
    text-align: left;
  }
`;

const Content = styled.section`
  grid-area: container;
  min-width: 320px;
  max-width: 640px;
  padding: 24px 24px;
  @media (min-width: 769px) {
    padding: 24px 96px;
  }
`;

const ImgCss = {
  height: "100%",
  gridArea: "image"
} as const;

const CommingSoon = (props: {
  logo: { mobile: string; desktop: string; alt: string };
  headerImage: { mobile: string; desktop: string; alt: string };
  title: string;
  subTitle: string;
  content: string;
}) => {
  return (
    <Container>
      <Header logo={props.logo} />
      <Content>
        <H2>{props.title}</H2>
        <H1>{props.subTitle}</H1>
        <P>{props.content}</P>
      </Content>
      <IMG {...props.headerImage} style={ImgCss} />
    </Container>
  );
};

export default CommingSoon;
