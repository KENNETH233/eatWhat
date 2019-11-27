import React, { useState } from 'react';
import styled from 'styled-components';
// import './App.css';

const dishes = [1, 2, 3, 4]

const AppWrapper = styled.div`
  background:black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center
`

const LandingWrapper = styled.div`
  display:flex;
  flex-direction:column;
  background:black;
  justify-content: center;
  align-content: center
  height:100vh;
`

const Title = styled.h1`
  text-align: center;
  color: red;
`

const StartButton = styled.button`
  border-style: solid;
  background color: white;
  color: black;
  border-radius: 20px;
  width: 25vw;
  height:10vh;
  margin-left:auto;
  margin-right:auto;
`

const AppDescription = styled.h2`
    text-align: center;
    color: red;
`
const FunctionPage = styled.div`
  display:flex;
  flex-direction: column;
`

const NaviBoxes = styled. div`
  display: flex;
  flex-direction: row;
`

const LikesLibrary = styled. button`
  width: 45vw;
  height: 10vh;
`

const HateLibrary = styled. button`
  width: 45vw;
  height: 10vh;
`


const ChoicesBox = styled.div`
    display:flex;
    flex-direction:column
    width:100vw;
    height:25vh;
    background:black;
    justify-content:center;
    align-item:center;
`
const Choices = styled.div`
    display: flex;
    flex-direction: row;
    // background: white;
`

const ChoicesDescription = styled.div`
     display: flex;
     flex-direction: column;
     margin-left: auto;
     background:blue;
     padding:5px;
`

const ViewMoreButton = styled. button`
      background:white;
      width:10vw;
      height:20vh;
`

const ButtonBoxes = styled.div`
    diplay:flex;
    flex-direction: row;
    height: 10wh;
    background white;
`

const YesButton = styled.button`
    background:black;
    text-align: center;
    width:50vw;
`
const NoButton = styled.button`
    background:black;
    text-align: center;
    width:50vw;
`


function App() {
  return (
    <LandingPage />
  );
}

function LandingPage() {
  const [click, setClick] = useState(0);

  if (click === 0) {
    return (
      <AppWrapper>
        <LandingWrapper>
          <Title>Eat What!</Title>
          <AppDescription>Filter what you do not want when ordering Waimai </AppDescription>
          <StartButton onClick={() => setClick(click + 1)}>
            Show some choices :)
      </StartButton>
        </LandingWrapper>
      </AppWrapper>
    );
  } else {
    return (
      <div>
      <Navi/>
      <RunMainFunction/>
      </div>
    );
  }
}

function RunMainFunction() {
  return ( 
    dishes.map(mainFunction)
  );
}

function mainFunction() {
  return (
    <ChoicesBox>
      <Choices>
        <Title>Images</Title>

        <ChoicesDescription>
          <Title> Description </Title>
          <Title> Types </Title>
        </ChoicesDescription>

        <ViewMoreButton> View more </ViewMoreButton>
      </Choices>

      <ButtonBoxes>
        <YesButton>✌️</YesButton>
        <NoButton> ❌</NoButton>
      </ButtonBoxes>  


    </ChoicesBox>
      );
    }
    
function Navi(){
  return(
    <NaviBoxes>
      <Title> eatWhat </Title>
      <LikesLibrary>Likes</LikesLibrary>
      <HateLibrary>Hates</HateLibrary>
    </NaviBoxes>  
  );
}
    export default App;
