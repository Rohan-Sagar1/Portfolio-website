import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import UFCTimer from "./UFCTimer";
import { EventContext } from "./Home";

let id = 0;

const INITIAL_STATES = [
  { id: id++, label: "Major: Computer Engineering"},
  { id: id++, label: "Minor: Economics"},
  { id: id++, label: "Software Engineering"},
  { id: id++, label: "Python Developer"}
]

function LandingPage() {
  const [count, setCount] = useState(2);
  const [selectedChoice, setSelectedChoice] = useState("");
  const [event, setEvent] = useContext(EventContext);

  const handleSelection = choice => {
    if (!selectedChoice) {
      setSelectedChoice(choice);
    }};

  useEffect(() => {
    let interval = null;
    if (count < 15) {
      interval = setInterval(() => {
        setCount(count + 1);
      }, 3000);
    } else {
      setCount(2);
    }
    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <Container>
        <Landing>
          <LeftMenu>
            <TagWrapper>
              {INITIAL_STATES.map(({ id, label}) => (
                <Tag key={id}>{label}</Tag>
              ))}
            </TagWrapper>
            <Name>ROHAN SAGAR</Name>
            <SchoolDetails>
              Junior at Purdue University
              <br/>
              <p>20-05-24 (DD-MM-YY)</p>
            </SchoolDetails>
            <NumberChart>
              <OtherInfo>
                <h1>4</h1>
                <span>LANGUAGES</span>
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
                  <p>{event[1]}</p>
                  {selectedChoice === "Red"}
                </RedOption>
                <BlueOption onClick={() => handleSelection("Blue")}>
                  <p>{event[2]}</p>
                  {selectedChoice === "Blue"}
                </BlueOption>
                {/* <label>You selected: {selectedChoice}</label> */}
              </UserSelect>
          </RightMenu>
        </Landing>
      </Container>
    </>
  )
}

export default LandingPage

const Container = styled.main`
  @media (max-width: 1250px) {
    flex-direction: column;
    height: auto;
    justify-content: flex-start;
  }

  display: flex;
  width: 100%;
  height: 85%;
  position: absolute;
  background-color: #191A20;
`;

const Landing = styled.div`
  @media (max-width: 1250px) {
    flex-wrap: wrap;
  }
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 75%;
  justify-content: space-between;
  margin: 150px auto 0;
  align-items: center;
  // margin-top: 10%;
  // margin-left: 2%;
`

const LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 33.3%;
  gap: 20px;

  @media (max-width: 1250px) {
    order: 1;
    width: 50%;
  }
`;

const Picture = styled.div`
  width: 33.3%;
  height: 100%;
  display: flex;
  img {
    height: 350px;
    margin: auto;
    border-radius: 6px;
  }

  @media (max-width: 1250px){
    order: 2;
    width: 50%;
    margin-top: 50px;
  }

`;

const RightMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3%;
  height: 100%;
  gap: 20px;
  justify-content: center;

  @media (max-width: 1250px){
    order: 3;
    width: 100%;
    margin-top: 20%;

  }
`

const TagWrapper = styled.div`
  display: flex;
  // margin-top: 10px;
`
const Tag = styled.p`
  font-size: 12px;
  padding: 2px 5px;
  color: white;
  background-color: #424247;
  margin-right: 5px;
  border-radius: 3px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15), 0px 2px 2px rgba(0, 0, 0, 0.15), 0px 3px 3px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`;

const Name = styled.span`
  color: white;
  font-size: 60px;

  // @media (max-width: 768px) {
  //   font-size: 36px;
  // }
`;

const SchoolDetails = styled.span`
  color: white;
  font-size: 20px;

  p {
    font-size: 14px;
    margin: 0;
  }

  // @media (max-width: 768px) {
  //   font-size: 14px;
  // }
`;


const OtherInfo = styled.div`
  color: white;
  align-items: center;
  // height: 70%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  text-align: center;

  h1 {
    font-size: 54px;
    border-bottom: 2px solid red;
    width: 60px;
    padding-bottom: 5px;
  }

  span {
    font-size: 14px;
  }

  // @media (max-width: 768px) {
  // h1 {
  //   font-size: 36px;
  // }

  // span {
  //   font-size: 12px;
  // }
}`;

const NumberChart = styled.div`
  display: flex;
  // align-items: center;
  height: 35%;
  width: 80%;
  gap: 30px;
  label {
    border-right: 2px solid #3F3F3F;
  // }
`

const UserSelect = styled.div`
  // background-color: blue;
  display: flex;
  flex-direction: column;
  text-align: center;
  // margin-top: 20px;
  // margin-left: 120px;
  gap: 20px;
  // justify-content: center;
  color: white;

  span {
    font-size: 18px;
  }
`

const RedOption = styled.div`
  // position: relative;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  width: 100px;
  margin: auto;
  // height: 40px;
  // margin-left: 50px;
  background-color: rgb(143, 2, 14);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15), 0px 2px 2px rgba(0, 0, 0, 0.15), 0px 3px 3px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  // color: white;
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
  // &:active::before {
  //   background-color: rgba(0, 0, 0, 0.4);
  // }
  `;

  const BlueOption = styled(RedOption)`
  background-color: rgb(41, 71, 144) !important;
  `