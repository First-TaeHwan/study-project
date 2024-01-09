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
  input {
    border: none;
    background-color: #2ecc71;
    font-size: 20px;
  }
`;

function Time() {
  const active = {
    borderBottom: "solid 1px #2c3e50",
  };
  const [amount, setAmount] = useState(0);
  const [flip, setFlip] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const onReset = () => {
    setAmount(0);
  };
  const onFlip = () => {
    setAmount(0);
    setFlip((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <Items>
          <Item>
            <h1>Minutes</h1>
            <input
              style={!flip ? active : null}
              value={flip ? amount * 60 : amount}
              onChange={onChange}
              placeholder="Minutes"
              type="number"
              disabled={flip}
            />
          </Item>
          <Item>
            <h1>Hours</h1>
            <input
              style={flip ? active : null}
              value={flip ? amount : Math.round(amount / 60)}
              placeholder="Hours"
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

export default Time;
