import React from "react";
import styled from "@emotion/styled";
import { IMG } from "../Image";
import Header from "../Header";
import { H1, H2, P } from "../Typography";
import EmailInput from "../EmailInput";

const Container = styled.section`
  position: relative;
  width: 100%;
  max-width: 1140px;
  display: grid;
  grid-template: "logo" "image" "container" "input";
  text-align: center;
  background-color: white;
  @media (min-width: 769px) {
    grid-template: "logo image" "container image" "input image";
    text-align: left;
    height: 600px;
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
  width: "100%",
  minWidth: "320px",
  maxHeight: "600px",
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
      <EmailInput />
    </Container>
  );
};

export default CommingSoon;
