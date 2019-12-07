// Npm Libraries citation: 
// 1. Styled-components library
// 2. Popup window library https://react-popup.elazizi.com/use-case---modal

import React, { useState } from 'react';
import styled from 'styled-components';
import Popup from "reactjs-popup";
import { DEFAULT_ECDH_CURVE } from 'tls';
import './App.css';

const DEFAULT = [
  {
    dish: "Thai Food",
    images: "https://www.englishclub.com/images/vocabulary/food/thai/thai-food.jpg",
    description: "Curry and Tom Yam Gong",
    filtered: "false"
  },

  {
    dish: "Dim Sum",
    images: "http://www.dimsumcentral.com/wp-content/uploads/2018/06/what-is-dim-sum-header-new.jpg",
    description: "Shrimps dumplings, Chicken feets",
    filtered: "false"
  },

  {
    dish: "Hotpots",
    images: "https://assets3.thrillist.com/v1/image/2774281/size/tl-full_width_tall_mobile.jpg",
    description: "Sichuan style, Spicy",
    filtered: "false"
  },

  {
    dish: "McDonalds",
    images: "http://www.mcdonalds.ie/content/iehome/food/_jcr_content/genericpagecontent/everything/image.img.png/1548671028500.png",
    description: "Western fast food, Burgers",
    filtered: "false"
  },

  {
    dish: "Sushi",
    images: "https://cdn11.bigcommerce.com/s-y80oldc1cd/images/stencil/1280x1280/products/559/907/Sushi_Combo_Large__14936.1537475468.jpg?c=2&imbypass=on",
    description: "Japanese food, Sushi",
    filtered: "false"
  },

  {
    dish: "Fish and Chips",
    images: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Fish_and_chips_blackpool.jpg/1200px-Fish_and_chips_blackpool.jpg",
    description: "British food, Western food",
    filtered: "false"
  },

  {
    dish: "Steak",
    images: "https://images.pitboss-grills.com/catalog/recipes/1200px/Reverse-Seared-NY-Steak.jpg",
    description: "Best steak in Shanghai",
    filtered: "false"
  },

  {
    dish: "Papa Johns",
    images: "https://hip2save.com/wp-content/uploads/2016/11/papa-john.jpg?resize=1024%2C538&strip=all",
    description: "Pizza, Western fast",
    filtered: "false"
  },

  {
    dish: "American BBQ",
    images: "https://previews.123rf.com/images/rez_art/rez_art1903/rez_art190300069/118469063-texas-style-bbq-meal-with-all-the-fixings.jpg",
    description: "American style BBQ",
    filtered: "false"
  },

  {
    dish: "Korean Fried Chicken",
    images: "https://timeincsecure-a.akamaihd.net/rtmp_uds/429048911/201908/1954/429048911_6078004776001_6078001885001-vs.jpg?pubId=429048911&videoId=6078001885001",
    description: "Korean style, Fried Chicken",
    filtered: "false"
  },
]

// const LIKES = [];
// const HATES = [];

const AppWrapper = styled.div`
  background: rgb(218, 201, 166)
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center
`

const LandingWrapper = styled.div`
  display:flex;
  flex-direction:column;
  background:rgb(218, 201, 166);
  justify-content: center;
  align-content: center
  height:100vh;
`

const AppTitle = styled.h1`
  text-align: center;
  color: black;
  font-family: 'Sulphur Point', sans-serif;
`

const Title = styled.h1`
  text-align: center;
  color: black;
  font-family: 'Sulphur Point', sans-serif;
  @media only screen and (max-width:600px){
    font-size: 11px;
    font-weight: normal;
    }
  
`
const Description = styled.h2`
  text-align: center;
  color: black; 
  font-family: 'Sulphur Point', sans-serif;
  @media only screen and (max-width:600px){
    font-size: 15px;
    font-weight: normal;
    }
  
`

const DishTitle = styled.h1`
  text-align: center;
  color: black;
  font-size:40px;
  font-family: 'Sulphur Point', sans-serif;
  @media only screen and (max-width:600px){
    font-size: 18px;
    }
  
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
  font-family: 'Sulphur Point', sans-serif;
  font-size:15px;
`

const AppDescription = styled.h2`
    text-align: center;
    font-family: 'Sulphur Point', sans-serif;
    color: black;
`

const NaviBoxes = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom:solid;
  border-bottom-color:lightgrey;
`


const Library = styled.button`
  width: 45vw;
  height: 9vh;
  border-style:solid;
  border-color:white;
  border-radius:20px;
  background-color:white;
  font-family: 'Sulphur Point', sans-serif;
  @media only screen and (max-width:600px){
    width: 45vw;
    height:auto;
    }
`

const ChoicesBox = styled.div`
    display:flex;
    flex-direction:column
    width:100vw;
    height:24vh;
    border-bottom:solid;
    border-color:lightgrey;
    border-bottom-weight:2px;
    justify-content:center;
    align-item:center;
    @media only screen and (max-width:600px){
      height: auto;
      margin: 5px;
      }
  
`
const Choices = styled.div`
    display: flex;
    flex-direction: row;
    height: 15vh;
    @media only screen and (max-width:600px){
      font-size: 11px;
      height:10vh;
      }
`

const ChoicesDescription = styled.div`
     display: flex;
     flex-direction: column;
     background: white;
     padding:5px;
     width:500px;
     font-family: 'Sulphur Point', sans-serif;
     @media only screen and (max-width:600px){
      
      border: none;
      }
`


const ButtonBoxes = styled.div`
    diplay:flex;
    flex-direction: row;
    // flex-wrap:wrap;
    height: 10wh;
    background-color: white;
`

const Button = styled.button`
    background:white;
    text-align: center;
    border-style:none;
    width:50vw;
    height: 40px;
    font-family: 'Sulphur Point', sans-serif;
`


const ShowMore = styled.button`
    background: white;
    text-aligh: center;
    width: 100vw;
    height:10vh;
    border-style:solid;
    border-radius:20px;
    font-size:40px;
    font-family: 'Sulphur Point', sans-serif;
`

// const Image = styled.div`
//     width:200px;
//     height:150px;
// `

const LikesAdd = styled.img`
    src: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBGWeC5gkATsiXwYMTETG2tF5LxxrZZaLwYYSjHCRia-PbtK4&s");
    width:30px;
    height:30px;
`
const DislikeAdd = styled.img`
    src: url("https://img.icons8.com/carbon-copy/100/000000/filled-trash.png");
    width:30px;
    height:30px;
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
          <AppTitle>Eat What!</AppTitle>
          <AppDescription>Filter what you do not want when ordering Waimai </AppDescription>
          <StartButton onClick={() => setClick(click + 1)}>
            Show some choices :)
           </StartButton>
        </LandingWrapper>
      </AppWrapper>
    );
  } else {
    return (
      <div className="main">
        <Navi />
        <RunMainFunction />
      </div>
    );
  }
}



// This is the componets to run three times

function RunMainFunction() {

  function handleClick(){
    let display = [];
    display[0] = getNextRandomDish(initialChosen);
    display[1] = getNextRandomDish(initialChosen);
    display[2] = getNextRandomDish(initialChosen);  

    setState({
      chosen: state.chosen.concat(display),
      display: display,
    });
  }



  let initialChosen = [];

  initialChosen[0] = getNextRandomDish(initialChosen);
  initialChosen[1] = getNextRandomDish(initialChosen);
  initialChosen[2] = getNextRandomDish(initialChosen);
 
  const [state, setState] = useState({chosen: initialChosen, display: initialChosen});

  return (
    <div>
      <>
        <MainFunction
          dish={DEFAULT[state.display[0]]}
        />
        <MainFunction
          dish={DEFAULT[state.display[1]]}
        />
        <MainFunction
          dish={DEFAULT[state.display[2]]}
        />
      </>
      <ShowMore onClick={handleClick}>Show more choices</ShowMore>
    </div>
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

    first = Math.floor(Math.random() * DEFAULT.length);

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
        {/* <Image>  */}
          <img className="foodimage"src={props.dish.images}></img>   
        {/* </Image> */}

        <ChoicesDescription>
          <DishTitle> {props.dish.dish} </DishTitle>
          <Description> {props.dish.description} </Description>
        </ChoicesDescription>
        
        <View className="button"/>
      </Choices>

      <ButtonBoxes>
        <Button>
          <img  className="chooseButton" src="https://cdn3.iconfinder.com/data/icons/interface/100/add_button_2-512.png"/>
        </Button>
        <Button> 
          <img className="chooseButton" src="https://img.icons8.com/carbon-copy/100/000000/filled-trash.png"/>
        </Button>
      </ButtonBoxes>

    </ChoicesBox>

  );
}

// This is navigation bar which should be run all the time
function Navi() {
  return (
    <NaviBoxes>
      <AppTitle> eatWhat </AppTitle>
      <Library> <img className="Libraries" src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-01-512.png"/></Library>
      <Library> <img className="Libraries"src="https://cdn2.iconfinder.com/data/icons/cleaning-19/30/30x30-10-512.png"/></Library>
    </NaviBoxes>
  );
}


const View = () => (
  <Popup trigger={<button className="v"> <img className="dots"src="https://icon-library.net/images/view-more-icon/view-more-icon-1.jpg"/> </button>} modal>
    {close => (
      <div className="flexView">
      <button className="ViewMore">Turn to Waimai App?</button>
      <button className="ViewMore" onClick={() => { close(); }}>No!</button>
      </div>
     )
    }
  </Popup>
);

export default App;
