import React from "react";
import styled from "@emotion/styled";
import { IMG } from "./Image";

const Container = styled.section``;

const Input = styled.input<{ error: boolean }>`
  border-color: ${({ error }) => (error ? "red" : "gray")};
`;

const EmailInput = () => {
  const [error, setError] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <>
      <Container>
        <Input
          error={error}
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
        />
        <IMG desktop="" mobile="" alt="" />
      </Container>
      <button onClick={() => setError(true)} />
    </>
  );
};

export default EmailInput;
