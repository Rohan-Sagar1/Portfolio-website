import React, { useState } from 'react'
import styled from "styled-components"

let id = 0;

const INITIAL_STATES = [
  { id: id++, label: "Software Engineering"},
  { id: id++, label: "Data Science"},
  { id: id++, label: "Blockchain"},
  { id: id++, label: "3D Printing"}
]

function Home(props) {
  const [tags, setTags] = useState(INITIAL_STATES);

  return (
    <Container>
      <LeftMenu>
        <TagWrapper>
          {INITIAL_STATES.map(({ id, label}) => (
            <Tag key={id}>{label}</Tag>
          ))}
        </TagWrapper>
      </LeftMenu>
      <Picture>

      </Picture>
      <RightMenu>

      </RightMenu>
    </Container>
  )
}

export default Home

const Container = styled.main`
  display: flex;
  position: absolute;
  top: 34%;
  left: 5%;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
`

const LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
`
const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Tag = styled.p`
  display: inline-block;
  height: 19px;
  font-size: 12px;
  padding: 2px 5px;
  color: white;
  background-color: #424247;
  text-align: center;
  margin-right: 5px;
  line-height: 17px;
  border-radius: 3px;
`;


const Picture = styled.img`

`

const RightMenu = styled.div`

`


