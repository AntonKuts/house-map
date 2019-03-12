import React, { useState } from 'react';
import './App.css';

function Constructor({propertie, tampl, index}) {
  const [text, setText] = useState(GetText());
  const [undertext, setUndertext] = useState(Get());

    function GetText() {
      if (tampl.field === "images"){
        let newUrl = propertie.images[0];
        console.log( "newUrl "+newUrl );
        return newUrl;
      } else {
        let info = tampl.field;
        console.log( "text "+propertie[info] );
        return propertie[info];
      }
    }

    function Get (){
      if (tampl.children){
        let info = tampl.children[0].field;
        console.log("propertie[info] "+propertie[info]);
        return propertie[info];
      }
    }
    
    let componentList = {
      PRICE: Price,
      IMAGE: Image,
      ADDRESS: Adress,
      AREA: Area,
      DESCRIPTION: Description,
      RATING: Rating,
    }

  let componentName=tampl.component;

  let SinglComponent = componentList[componentName];

  function Price({text}) {
    return (
      <p  key={text+1} className = "price">{text}</p>
    );
  }

  function Image({text , undertext}) {
    console.log("Image!" + text + "___" + undertext);
    return (
      <div>
        <div className = "undertext">{undertext}</div>
        <img  key={text+2} className = "img" src={text} alt="picture" />
      </div>
    );
  }

  function Area({text}) {
    return (
      <p  key={text+3} className = "text">{text}</p>
    );
  }

  function Adress({text}) {
    return (
      <p  key={text+4} className = "full_address">{text}</p>
    );
  }

  function Description({text}) {
    return (
      <p  key={text+5} className = "description">{text}</p>
    );
  }

  function Rating({text}) {
    return (
      <p   key={text+6} className = "rating">{text}</p>
    );
  }

  return (
    <div className="card">
     <SinglComponent
       text={text}
       undertext={undertext}
     />
    </div>
  )
}

export default Constructor;
