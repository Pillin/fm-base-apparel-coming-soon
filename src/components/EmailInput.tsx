import React from "react";
import styled from "@emotion/styled";
import { P } from "./Typography";

const Container = styled.section`
  grid-area: "input";
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 0px 24px;
  height: 80px;
  @media (min-width: 769px) {
    padding: 0px 96px 0px 96px;
  }
`;

const Input = styled.input<{ error: boolean }>`
  border-color: ${({ error }) => (error ? "red" : "hsl(0, 36%, 70%)")};
  border-radius: 30px;
  height: 40px;
  width: 100%;
  outline: none;
  border-style: double;
  padding: 16px 140px 16px 16px;
  ::placeholder {
    background: white;
  }
  @media (min-width: 769px) {
    padding: 16px 140px 16px 16px;
  }
`;

const Button = styled.button`
  border-color: hsl(0, 93%, 68%);
  height: 40px;
  border-radius: 30px;
  border-weight: 0px;
  position: absolute;
  right: 24px;
  width: 100px;
  border: 0px;
  box-shadow: -8px 18px 50px 2px hsl(0, 80%, 86%);
  background: linear-gradient(
    135deg,
    hsl(0, 80%, 86%) 0%,
    hsl(0, 74%, 74%) 100%
  );
  top: 0px;
  @media (min-width: 769px) {
    right: 95px;
  }
`;

const ErrorImg = styled.img`
  height: 20px;
  position: absolute;
  right: 133px;
  top: 9px;
  @media (min-width: 769px) {
    right: 210px;
  }
`;
const EmptyContainer = styled.div`
  height: 20px;
`;

const EmailInput = () => {
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [value, setValue] = React.useState("");

  const validate = (val: string) =>
    /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+[.]{1}[A-Za-z]{2,64}/.test(val.trim());

  const onHandleChange = () => {
    if (!validate(value)) return setError(true);
    setError(false);
    setSuccess(true);
  };

  return (
    <>
      <Container>
        <Input
          error={error}
          value={value}
          placeholder="Email Address"
          onChange={(e: any) => setValue(e.target.value)}
        />
        <P
          style={{
            width: "100%",
            textAlign: "left",
            height: "16px",
            paddingLeft: "18px",
            fontSize: "14px",
            color: error ? "red" : "green"
          }}
        >
          {error ? "Please provide a valid email" : ""}
          {success && "Inscription is ready"}
        </P>
        {error && <ErrorImg src="/images/icon-error.svg" alt="icon error" />}
        {!error && <EmptyContainer />}
        <Button onClick={onHandleChange}>
          <img src="/images/icon-arrow.svg" alt="icon arrow" height="20px" />
        </Button>
      </Container>
    </>
  );
};

export default EmailInput;
