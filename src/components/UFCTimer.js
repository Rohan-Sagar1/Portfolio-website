import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function UFCTimer() {
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft === 0) {
          clearInterval(countdown);
          return 300;
        } else {
          return timeLeft - 1;
        }
      });
    }, 1000);

    return () => {
        clearInterval(countdown);
      };
    }, []);

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
  
    if (minutes < 10 && minutes >= 0) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

  return (
    <Timer>
      <Clock>
        <Info>
          <span>LightWeight Bout</span>
        </Info>
        <ClockWrapper>
          <Logo>
            <img src={"/assets/ufc_logo.png"} alt="ufc"></img>
          </Logo>
          <span>{minutes}:{seconds}</span>
        </ClockWrapper>
      </Clock>
    <Contestant>
      <Container>
        <TextWrapper>
            <span>Jones</span>
        </TextWrapper>
        <RedBanner/>
      </Container>
    </Contestant>
    <ContestantTwo>
      <Container>
        <TextWrapper>
            <span>Gane</span>
        </TextWrapper>
        <BlueBanner/>
      </Container>
    </ContestantTwo>
  </Timer>
  )
}

export default UFCTimer

const Info = styled.div`
  transform: translate(-50%, 0%);
  width: fit-content;
  position: absolute;
  bottom: 100%;
  left: 50%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  min-width: 100%;
  max-width: 130%;
  height: 30px;
  margin-bottom: 0.25em;
  padding: 0 1.25em;
  overflow: hidden;
  background-image: linear-gradient(0deg,#000,#363636);
  transform-origin: center 100%;
  span {
    color: white;
    font-size: 1em;
    font-family: "Share Tech Mono", monospace;
    line-height: 30px;
    letter-spacing: 1px;
    white-space: nowrap;
    text-transform: uppercase;
  }

`

const RedBanner = styled.span`
    position: absolute;
    top: 50%;
    right: 0;
    height: 20px;
    width: 8px;
    opacity: 1;
    visibility: inherit;
    transform: translate(0%, -50%);
    background-color: rgb(143, 2, 14);
`

const BlueBanner = styled(RedBanner) `
    background-color: rgb(41, 71, 144) !important;
    transform: translate(0%, -50%);
    right: auto;
    left: 0;
`
const Contestant = styled.div`
  order: -1;
  overflow: hidden;
  // margin-top: 150px;
  color: white;
  font-size: 1.3em;
  font-family: "Share Tech Mono",monospace;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-image: linear-gradient(0deg,#4b4c50,#696969);
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const ContestantTwo = styled(Contestant)`
  order: 1;
  flex-direction: row;
`


const TextWrapper = styled.div`
    opacity: 1;
    visibility: inherit;
    transform: translate(0%, 0px);
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    word-spacing: -0.25em;
    color: white;
    font-size: 0.9em;
    font-family: "Share Tech Mono", monospace;
    letter-spacing: 2px;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
    font-weight: 500;
`

const Container = styled.div`
    -webkit-order: -1;
    order: -1;
    overflow: hidden;
    color: #fff;
    font-size: 1.3em;
    font-family: "Share Tech Mono",monospace;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-image: linear-gradient(0deg,#4b4c50,#696969);
    -webkit-font-smoothing: antialiased;
    width: 200px;
    padding: 0px 1.5em;
    position relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-width: 250px;
`

const Timer = styled.div`
  position: relative;
  height: 40px;
  display: flex;
  align-iterms: center;
`

const Clock = styled.div`
  position: relative;
  // margin-top: 150px;
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
const Logo = styled.div`
    width: 69px;
    transform: translate(0%, -50%);
    left: 0px;
    position: absolute;
    top: 50%;
    z-index: 1;
    display: flex;
    justify-content: center;
    overflow: hidden;
    img {
        transform: translate(0px, 0%);
        width: 4.3em;
        height: 100%;
        transition: fill .3s ease;
        filter: invert(100%);
    }
`

const ClockWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    span{
        opacity: 1;
        visibility: inherit;
        transform: translate(0%, -50%);
        position: absolute;
        right: 0;
        top: 50%;
        display: flex;
        align-items: center;
        margin-left: 0.4em;
        color: white;
        font-size: 1.7em;
        font-family: 'Hanken Grotesk', sans-serif;
        font-family: 'Quantico', sans-serif;
        user-select: none;
        display: flex;
    }
`

