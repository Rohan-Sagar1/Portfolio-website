import React from 'react';
import styled from 'styled-components';

let id = 0;
const PROGRAMMING_LANGUAGES = [
  {id: id++, label: "JavaScript"},
  {id: id++, label: "C"},
  {id: id++, label: "SQL"},
  {id: id++, label: "Solidity"},
  {id: id++, label: "Assembly"},
  {id: id++, label: "SystemVerilog"},
  {id: id++, label: "MATLAB"},
]

function Skills() {
  return (
    <Container id="Skills">
      <Header>Relevant Skills & Coursework</Header>
      <Tables>
        <Table>
          <Banner>
            <Info>
              <h4>Programming Languages
                <span>Top Rank</span>
              </h4>
            </Info>
          </Banner>
        </Table>
      </Tables>
        
    </Container>
  )
}

export default Skills

const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    color: black;
    top: 90vh;
`

const Header = styled.h1`
  display: flex;
  position: relative;
  align-items: center;
  left: 30%;
  font-size: 3rem;
  text-transform: uppercase;
`

const Tables = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  right: 40%;
`

const Banner = styled.div`
  display: flex;

`

const Info = styled.div`
  color: black;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  box-sizing: inherit;
`