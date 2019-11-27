import React, { useState } from 'react';
import styled from 'styled-components';
// import './App.css';

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

const ChoicesBox = styled.div`
    display:flex;
    flex-direction:column
    width:100vw;
    height:100vh;
    background:black;
    justify-content:center;
    align-item:center;
`
const Choices = styled.div`
    
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
      <MainFunction />
    );
  }
}

function MainFunction() {
  return (
    <ChoicesBox>
      <Title>Test</Title>
    </ChoicesBox>
      );
    }
    
    export default App;
