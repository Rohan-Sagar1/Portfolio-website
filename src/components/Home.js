import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from "axios";
import cheerio from "cheerio";
import UFCTimer from "./UFCTimer";

let id = 0;

const INITIAL_STATES = [
  { id: id++, label: "Major: Computer Engineering"},
  { id: id++, label: "Minor: Economics"},
  { id: id++, label: "Software Engineering"},
  { id: id++, label: "Python Developer"}
]

function Home(props) {
  const [tags, setTags] = useState(INITIAL_STATES);
  const [count, setCount] = useState(2);
  const [event, setEvent] = useState([]);
  const [selectedChoice, setSelectedChoice] = useState("");

  const handleSelection = choice => {
    if (!selectedChoice) {
      setSelectedChoice(choice);
    }
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get('https://www.ufc.com/events');
  //     const $ = cheerio.load(result.data);
  //     const eventFighters = $('.c-card-event--result__info');
  //     const events = [];
  //     let event = $(eventFighters[0]).text().trim();
  //     event = event.replace(/\s+/g, '');
  //     const [name, date] = event.split('\n').map(item => item.trim());
  //     events.push(name, date);
  //     events.push(event);
  //     setEvent(event);
  //     console.log(event);
  //   };
  //   fetchData();
  // }, []);

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
          05-03-2024 (MM-DD-YYYY)
          </SchoolDetails>
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

      <Picture src={"/assets/IMG_2224.png"} alt="me"></Picture>
      <RightMenu>
        <UFCTimer/>
        <span>Sat, Feb 18 / 7:00 PM EST / Main Card</span>
        <span>What are your picks for the fight?</span>
        <div>
        <div onClick={() => handleSelection("Red")}>
          <p>Choice 1: Red</p>
          {selectedChoice === "Red" && <p>Selected</p>}
        </div>
        <div onClick={() => handleSelection("Blue")}>
          <p>Choice 2: Blue</p>
          {selectedChoice === "Blue" && <p>Selected</p>}
        </div>
      </div>

      </RightMenu>

    </Container>
  )
}

export default Home


const Container = styled.main`
  display: flex;
  width: 100%;
  height: 84%;
  position: absolute;
  background-color: #191A20;
`

const Picture = styled.img`
  height: 350px;
  position: absolute;
  bottom: 50px;
  right: 45%;
`


const LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 30%;
  left: 5%;
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
`;

const Name = styled.span`
  display: flex;
  color: white;
  font-size: 60px;
`

const SchoolDetails = styled.span`
  display: flex;
  color: white;
  font-size: 20px;

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
    font-size: 12px;
  }
`;

const NumberChart = styled.div`
  display: flex;
  gap: 30px;
  label {
    border-right: 2px solid #3F3F3F;
    margin-top: 15px;
    height: 90%;
  }
`
const RightMenu = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 42%;
  transform: translateY(-50%);
  right: 0;
  margin-right: 20px;
  gap: 10px;
`


