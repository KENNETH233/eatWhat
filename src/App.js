import React, { useState } from 'react';
import styled from 'styled-components';
import { DEFAULT_ECDH_CURVE } from 'tls';
import './App.css';

const DEFAULT = [
  {
    dish: "Thai Food",
    // images: "".
    description: "Curry and Tom Yam Gong",
    filtered: "false"
  },

  {
    dish: "Dim Sum",
    // images: "".
    description: "Shrimps dumplings, Chicken feets",
    filtered: "false"
  },

  {
    dish: "Hotpots",
    // images: "".
    description: "Sichuan style, Spicy",
    filtered: "false"
  },

  {
    dish: "McDonalds",
    // images: "".
    description: "Western fast food, Burgers",
    filtered: "false"
  },

  {
    dish: "Sushi",
    // images: "".
    description: "Japanese food, Sushi",
    filtered: "false"
  },

  {
    dish: "Fish and Chips",
    // images: "".
    description: "British food, Western food",
    filtered: "false"
  },

  {
    dish: "Steak",
    // images: "".
    description: "Best steak in Shanghai",
    filtered: "false"
  },

  {
    dish: "Papa John",
    // images: "".
    description: "Pizza, Western fast",
    filtered: "false"
  },

  {
    dish: "American BBQ",
    // images: "".
    description: "American style BBQ",
    filtered: "false"
  },

  {
    dish: "Korean Fried Chicken",
    // images: "".
    description: "Korean style, Fried Chicken",
    filtered: "false"
  },
]

let rand = DEFAULT[Math.floor(Math.random()*DEFAULT.length)];
console.log(rand);

const dishes = [1, 2, 3]

// const LIKES = [];
// const HATES = [];

const AppWrapper = styled.div`
  background:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center
`

const LandingWrapper = styled.div`
  display:flex;
  flex-direction:column;
  background:lightgrey;
  justify-content: center;
  align-content: center
  height:100vh;
`

const Title = styled.h1`
  text-align: center;
  color: black;
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
    color: black;
`
const FunctionPage = styled.div`
  display:flex;
  flex-direction: column;
`

const NaviBoxes = styled.div`
  display: flex;
  flex-direction: row;
`

const LikesLibrary = styled.button`
  width: 45vw;
  height: 10vh;
`

const HateLibrary = styled.button`
  width: 45vw;
  height: 10vh;
`

const ChoicesBox = styled.div`
    display:flex;
    flex-direction:column
    width:100vw;
    height:25vh;
    background:lightgrey;
    justify-content:center;
    align-item:center;
`
const Choices = styled.div`
    display: flex;
    flex-direction: row;
    border-style:solid;
`

const ChoicesDescription = styled.div`
     display: flex;
     flex-direction: column;
     margin-left: auto;
     background:lightgrey;
     padding:5px;
     border-style:solid
     width:500px;
`

const ViewMoreButton = styled.button`
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
    background:white;
    text-align: center;
    width:50vw;
`
const NoButton = styled.button`
    background:white;
    text-align: center;
    width:50vw;
`

const ShowMore = styled.button`
    background: white;
    text-aligh: center;
    width: 100vw;
    height:10vh;
    border-style:solid;
    border-radius:20px;
    font-size:40px;
`

function App() {
  return (
    <LandingPage />
  );
}

function LandingPage() {
  const [click, setClick] = useState(0);
  // const [chosen,setChosen] = useState([]);

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
        <Navi />
        <RunMainFunction />
        <ShowMore onClick={RunMainFunction}>Show more choices</ShowMore>
      </div>
    );
  }
}


// This is the componets to run three times

function RunMainFunction() {
  let initialChosen = [];
  initialChosen[0] = getNextRandomDish(initialChosen);
  initialChosen[1] = getNextRandomDish(initialChosen);
  initialChosen[2] = getNextRandomDish(initialChosen);

  const [chosen,setChosen] = useState(initialChosen);

  return (
    <>
      <MainFunction 
        chosen={chosen} 
        setChosen={setChosen}
        dish={DEFAULT[initialChosen[0]]}
      />
      <MainFunction 
        chosen={chosen} 
        setChosen={setChosen}
        dish={DEFAULT[initialChosen[1]]}

      />
      <MainFunction 
        chosen={chosen} 
        setChosen={setChosen}
        dish={DEFAULT[initialChosen[2]]}
    // chosen={chosen} setChosen={setChosen} 不会
      />
    </>
  );
}

//This is the function for getting three random number
function getNextRandomDish(chosen) {

  if (chosen.length === DEFAULT.length) {
    return -1;
  }

  let first = -1;
  let exist = false;
  do {
    
    first = Math.floor(Math.random()*DEFAULT.length);

    exist = chosen.indexOf(first) >= 0; // 这个不会
  
  } while (exist);

  return first;
}


// This is the function showing one choice

function MainFunction(props) {

  console.log(props);

  return (
    <ChoicesBox>
      <Choices>
        <Title>Images</Title>

        <ChoicesDescription>
          <Title> {props.dish.dish} </Title>
          <Title> {props.dish.description} </Title>
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

// This is navigation bar which should be run all the time
function Navi() {
  return (
    <NaviBoxes>
      <Title> eatWhat </Title>
      <LikesLibrary>Likes Library</LikesLibrary>
      <HateLibrary>Hates Library</HateLibrary>
    </NaviBoxes>
  );
}
export default App;
