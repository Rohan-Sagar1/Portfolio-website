import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from "axios";
import cheerio from "cheerio";

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

      <img src={"/assets/IMG_2224.png"} alt="me"></img>

      <RightMenu>
        <Timer>
          <Clock>
            <Info>
              <Logo>
                <img src="/assets/LI-In-Bug.png"></img>
              </Logo>
            </Info>
          </Clock>
          <Contestant></Contestant>
        </Timer>
      </RightMenu>
    </Container>
  )
}

export default Home

const Timer = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  align-iterms: center;
`

const Clock = styled.div`
  position: relative;
  margin-top: 150px;
  z-index: 1;
  box-sizing: border-box;
  width: 200px;
  height: 100%;
  padding: 0 1.5em;
  background-image: linear-gradient(180deg,#363636,#2b2b2b);
  transform-origin: center 0;
  transform: translate(0px, 0%);
  height: 100%;
  display: flex;
`
const Info = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
`

const Logo = styled.div`
  width: 69px;
  transform: translate(0%, -50%);
  left: 0px;
  height: 100%;
  background-image: linear-gradient(180deg,#363636,#2b2b2b);
  position: absolute;
  top: 50%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    transform: translate(0px, 0%);
    width: 4.3em;
    height: 100%;
    transition: fill 0.3s ease;
    fill: white;
  }
`

const Contestant = styled.div`
  order: -1;
  overflow: hidden;
  margin-top: 150px;
  width: 100%;
  color: white;
  font-size: 1.3em;
  font-family: "Share Tech Mono",monospace;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-image: linear-gradient(0deg,#4b4c50,#696969);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`


const Container = styled.main`
  display: flex;
  width: 100%;
  height: 84%;
  position: absolute;
  background-color: #191A20;
  img {
    padding: 0 12px;
    height: 25px;
  }
`

const LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 40%;
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

`


