import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  button {
    padding: 10px 50px;
    background-color: #2ecc71;
    border: solid 1px #03440c;
    margin-right: 20px;
    margin-top: 10px;
    font-size: 19px;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Item = styled.div`
  display: flex;
  gap: 10px;
  font-size: 30px;
`;
const StyledInput = styled.input`
  border: none;
  background-color: #2ecc71;
  font-size: 20px;
  padding: 5px 10px;
  &:hover {
    background-color: ${(props) => (props.flip ? "#00BA75" : null)};
    border-radius: 5px;
  }
`;

function Length() {
  const active = {
    borderBottom: "solid 1px #2c3e50",
  };
  const [length, setLength] = useState(0);
  const [flip, setFlip] = useState(false);
  const onChange = (event) => {
    setLength(event.target.value);
  };
  const onReset = () => {
    setLength(0);
  };
  const onFlip = () => {
    setLength(0);
    setFlip((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <Items>
          <Item>
            <h1>Km</h1>
            <StyledInput
              flip={!flip}
              style={!flip ? active : null}
              value={flip ? length * 1.6 : length}
              onChange={onChange}
              placeholder="Km"
              type="number"
              disabled={flip}
            />
          </Item>
          <Item>
            <h1>Miles</h1>
            <StyledInput
              flip={flip}
              style={flip ? active : null}
              value={flip ? length : Math.round(length / 1.6)}
              placeholder="Miles"
              type="number"
              onChange={onChange}
              disabled={!flip}
            />
          </Item>
        </Items>
        <button onClick={onReset}>reset</button>
        <button onClick={onFlip}>Change</button>
      </Wrapper>
    </>
  );
}

export default Length;
