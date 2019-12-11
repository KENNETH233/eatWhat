// Npm Libraries citation: 
// 1. Styled-components library
// 2. Popup window library https://react-popup.elazizi.com/use-case---modal I follow the example code and do some modification. 

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

let LIKES = [];
let HATES = [];


let TrashBin = [];

const AppWrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center
`

const LandingWrapper = styled.div`
  display:flex;
  flex-direction:column;
  background: white;
  justify-content: center;
  align-content: center
  height:100vh;
`

const AppTitle = styled.h1`
  text-align: center;
  color: black;
  font-family: 'Sulphur Point', sans-serif;
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
  font-size:20px;
  font-family: 'Sulphur Point', sans-serif;
  @media only screen and (max-width:600px){
    font-size: 18px;
    }
  
`

const DishTitleInList = styled.h2`
  text-align: center;
  color: black;
  font-size:28px;
  font-family: 'Sulphur Point', sans-serif;
  @media only screen and (max-width:600px){
    font-size: 15px;
    }
  
`


const StartButton = styled.button`
  border-style: solid;
  background-color: white;
  color: black;
  border-radius: 20px;
  width: 12vw;
  height:10vh;
  margin-left:auto;
  margin-right:auto;
  font-family: 'Sulphur Point', sans-serif;
  font-size:15px;
  @media only screen and (max-width:600px){
    border-style: solid;
    background-color: white;
    color: black;
    border-radius: 20px;
    width: 25vw;
    height:10vh;
    margin-left:auto;
    margin-right:auto;
    font-family: 'Sulphur Point', sans-serif;
    font-size:15px;
  }
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
    height:10vh;
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
      height: 20vh;
      margin: 5px;
      }
  
`
const Choices = styled.div`
    display: flex;
    flex-direction: row;
    height: 15vh;
    @media only screen and (max-width:600px){
      font-size: 11px;
      height:12vh;
      }
`

const ChoicesDescription = styled.div`
     margin-left:auto;
     margin-right:auto;
     display: flex;
     flex-direction: column;
     background: white;
     padding:5px;
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

const RemoveButton = styled.button`
    width:30px;
    height:30px;
    background: white;
    border-style: none;
    margin-top:auto;
    margin-bottom:auto;
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

  function handleClick() {
    let display = [];

    display[0] = getNextRandomDish(display);
    display[1] = getNextRandomDish(display);
    display[2] = getNextRandomDish(display);

    setState({
      chosen: state.chosen.concat(display),
      display: display,
    });
  }



  let initialChosen = [];

  initialChosen[0] = getNextRandomDish(initialChosen);
  initialChosen[1] = getNextRandomDish(initialChosen);
  initialChosen[2] = getNextRandomDish(initialChosen);

  const [state, setState] = useState({ chosen: initialChosen, display: initialChosen });

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
  let hated;

  do {

    first = Math.floor(Math.random() * DEFAULT.length);

    exist = chosen.indexOf(first) >= 0;

    hated = HATES.indexOf(first) >= 0;
  } while (exist || hated );

  return first;
}


// This is the function showing one choice

function MainFunction(props) {

    console.log("HATES",HATES);
    console.log("TrashBin",TrashBin);
    console.log("LIKES",LIKES);

  function addLike() {
    var idx = LIKES.findIndex(function(item){
      console.log(item);
      return item.dish === props.dish.dish;
    })

    if(!LIKES[idx]){
      LIKES.push(props.dish);
      console.log(props.dish);
    }
  }

  function addHate() {
    

    var idx = DEFAULT.findIndex(function(item){
      console.log(item);
      return item.dish === props.dish.dish;
    })

    if(DEFAULT[idx]){
      HATES.push(props.dish);
      console.log(props.dish);
      TrashBin.push(DEFAULT[idx]);
      DEFAULT.splice(idx,1);
    }
  }

  console.log(DEFAULT)

  return (
    // hide ? null:
    <ChoicesBox>
      <Choices>
        <img className="foodimage" src={props.dish.images}></img>

        <ChoicesDescription>
          <DishTitle> {props.dish.dish} </DishTitle>
          <Description> {props.dish.description} </Description>
        </ChoicesDescription>

        <View className="button" />
      </Choices>

      <ButtonBoxes>

        <Button onClick={addLike}>
          <img className="chooseButton" src="https://cdn3.iconfinder.com/data/icons/interface/100/add_button_2-512.png" />
        </Button>
        
        
        
        <Button onClick={addHate}>
          <img className="chooseButton" src="https://img.icons8.com/carbon-copy/100/000000/filled-trash.png" />
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
      <Cart />
      <Trash />
    </NaviBoxes>
  );
}


const View = () => (
  <Popup trigger={<button className="v"> <img className="dots" src="https://icon-library.net/images/view-more-icon/view-more-icon-1.jpg" /> </button>} modal>
    {close => (
      <div className="flexView">
        <button className="ViewMore">Turn to Waimai App?</button>
        <button className="ViewMore" onClick={() => { close(); }}>No!</button>
      </div>
    )
    }
  </Popup>
);





const Cart = () => (
  <Popup trigger={<Library> <img className="Libraries" src="https://image.flaticon.com/icons/png/512/126/126083.png" /> </Library>} modal>
    {close => (
      LIKES.map((item) =>{
        return (
          <ShowCart images={item.images} dish={item.dish}/>
        )
      })
    )
   }
  </Popup>
);

function ShowCart(props) {
  const [hide,setHide] = useState(false);

  function removing() {
    var idx = LIKES.findIndex(function(item){
      return item.dish === props.dish;
    });
    LIKES.splice(idx,1);
    setHide(true);
    //
 }


  return (
    hide ? null:
    <div>
      <Choices>
        <img className="foodimage" src={props.images}></img>

        <ChoicesDescription>
          <DishTitleInList> {props.dish} </DishTitleInList>
        </ChoicesDescription>
        <RemoveButton onClick={removing}> <img className="removingImage" src="https://icons-for-free.com/iconfiles/png/512/circle+close+cross+delete+exit+remove+icon-1320085939591374353.png" /> </RemoveButton>
      </Choices>
    </div>
  )

}



function ShowTrash(props) {
  const [hide,setHide] = useState(false); //

  function removing() {
    var idx = HATES.findIndex(function(item){
      return item.dish === props.dish;
    });
    HATES.splice(idx,1);
    setHide(true); //
    DEFAULT.push(TrashBin[idx]);
    TrashBin.splice(idx,1);
 }

  return (
      hide ? null :  //
      <div>
        <Choices>
          <img className="foodimage" src={props.images}></img>

          <ChoicesDescription>
            <DishTitleInList> {props.dish} </DishTitleInList>
          </ChoicesDescription>

          <RemoveButton onClick={removing}> <img className="removingImage" src="https://icons-for-free.com/iconfiles/png/512/circle+close+cross+delete+exit+remove+icon-1320085939591374353.png" /> </RemoveButton>
        </Choices>
      </div>
    
  )
}

const Trash = () => (
  <Popup trigger={<Library> <img className="Libraries" src="https://cdn2.iconfinder.com/data/icons/cleaning-19/30/30x30-10-512.png" /> </Library>} modal>
    {close => (
      HATES.map((item) => {
        return (
          <ShowTrash images={item.images} dish={item.dish}/>
        )
      })
    )
    }
  </Popup>
);

export default App;
