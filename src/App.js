import Time from "./Time";
import Length from "./Length";
import { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  background-color: #2ecc71;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #03440c;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 10px;
  font-weight: 800;
`;
const Select = styled.select`
  background-color: #2ecc71;
  padding: 10px 130px;
  color: #03440c;
  border: solid 1px #03440c;
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
`;

function App() {
  const [index, setIndex] = useState("0");
  const onSelcter = (event) => {
    setIndex(event.target.value);
  };
  return (
    <Main>
      <Title>Super Converter</Title>
      <Select value={index} onChange={onSelcter}>
        <option value="0">hours & minutes</option>
        <option value="1">km & miles</option>
      </Select>
      <hr />
      {index === "0" ? <Time /> : null}
      {index === "1" ? <Length /> : null}
    </Main>
  );
}

export default App;
