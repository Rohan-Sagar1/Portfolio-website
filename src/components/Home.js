import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import UFCTimer from "./UFCTimer";

let id = 0;

const INITIAL_STATES = [
  { id: id++, label: "Major: Computer Engineering"},
  { id: id++, label: "Minor: Economics"},
  { id: id++, label: "Software Engineering"},
  { id: id++, label: "Python Developer"}
]

function Home(props) {
  const [count, setCount] = useState(2);
  const [selectedChoice, setSelectedChoice] = useState("");

  const handleSelection = choice => {
    if (!selectedChoice) {
      setSelectedChoice(choice);
    }};

  useEffect(() => {
    let interval = null;
    if (count < 15) {
      interval = setInterval(() => {
        setCount(count + 1);
      }, 5000);
    } else {
      setCount(2);
    }
    return () => clearInterval(interval);
  }, [count]);

  return (
    <Container>
      <Landing>
        <LeftMenu>
          <TagWrapper>
            {INITIAL_STATES.map(({ id, label}) => (
              <Tag key={id}>{label}</Tag>
            ))}
          </TagWrapper>
          <Name>ROHAN SAGAR</Name>
          <SchoolDetails>Junior at Purdue University</SchoolDetails>
          <Graduation>20-05-24 (DD-MM-YY)</Graduation>
          <NumberChart>
            <OtherInfo>
              <h1>4</h1>
              <span>SPOKEN <br/>LANGUAGES</span>
            </OtherInfo>
            <label></label>

            <OtherInfo>
              <h1>8</h1>
              <span>PROGRAMMING<br/>LANGUAGES</span>
            </OtherInfo>
            <label></label>

            <OtherInfo>
              <h1>{count}</h1>
              <span>COFFEE<br/>CUPS</span>
            </OtherInfo>
          </NumberChart>
        </LeftMenu>

        <Picture>
          <img src={"/assets/IMG_2224.png"} alt="me"></img>
        </Picture>

        <RightMenu>
          <UFCTimer/>
            <UserSelect>
              <span>What are your picks for the fight?</span>
              <RedOption onClick={() => handleSelection("Red")}>
                <p>Red</p>
                {selectedChoice === "Red"}
              </RedOption>
              <BlueOption onClick={() => handleSelection("Blue")}>
                <p>Blue</p>
                {selectedChoice === "Blue"}
              </BlueOption>
              <label>You selected: {selectedChoice}</label>
            </UserSelect>
        </RightMenu>
      </Landing>
    </Container>
  )
}

export default Home

const Container = styled.main`
  display: flex;
  width: 100%;
  height: 85%;
  position: absolute;
  background-color: #191A20;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Landing = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10%;
  margin-left: 2%;
`

const LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    position: static;
    text-align: center;
    margin-bottom: 50px;
  }
`;

const Picture = styled.div`
  flex-direction: column;
  img {
    height: 350px;
    border-radius: 6px;
  }

  @media (max-width: 768px) {
    position: static;
    margin-top: 50px;
  }
`;

const RightMenu = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 35%;
  margin-right: 25px;
  gap: 10px;
`

const TagWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`
const Tag = styled.p`
  font-size: 12px;
  padding: 2px 5px;
  color: white;
  background-color: #424247;
  text-align: center;
  margin-right: 5px;
  border-radius: 3px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15), 0px 2px 2px rgba(0, 0, 0, 0.15), 0px 3px 3px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`;

const Name = styled.span`
  display: flex;
  color: white;
  font-size: 60px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const SchoolDetails = styled.span`
  display: flex;
  color: white;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Graduation = styled(SchoolDetails)`
  font-size: 14px;
`

const OtherInfo = styled.div`
  color: white;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 54px;
    border-bottom: 2px solid red;
    width: 30px;
    padding-bottom: 5px;
  }

  span {
    font-size: 18px;
  }

  @media (max-width: 768px) {
  h1 {
    font-size: 36px;
  }

  span {
    font-size: 12px;
  }
}`;

const NumberChart = styled.div`
  display: flex;
  gap: 30px;
  label {
    border-right: 2px solid #3F3F3F;
    margin-top: 15px;
    height: 90%;
  }
`

const Date = styled.span`
  display: flex;
  font-size: 18px;
  text-align: center;
  margin-left: 100px;
`

const UserSelect = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 120px;
  gap: 20px;
  justify-content: center;

  span {
    font-size: 18px;
  }

  label {
    display: flex;
    margin-left: 30px;
  }
`

  const RedOption = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  margin-left: 50px;
  background-color: rgb(143, 2, 14);
  color: white;
  font-family: "Share Tech Mono", monospace;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
  &:active {
    transform: translateY(1px);
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s;
    z-index: -1;
  }
  &:active::before {
    background-color: rgba(0, 0, 0, 0.4);
  }
  `;

  const BlueOption = styled(RedOption)`
  background-color: rgb(41, 71, 144) !important;
  `