import React from "react";
import styled from "styled-components";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Model({title, description, leftBtn,rightBtn,backgroundImg}) {
  return (


    <Wrap bgImg={backgroundImg} className="h-screen bg-cover bg-center">

     <div className="pt-[15vh] text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="p-4 text-sm">{description}</p>
      </div>

      <div className="flex flex-col items-center justify-center text-sm lg:flex-row sm:flex-col  mt-[85%] lg:mt-[25%] ">
        <leftBtn>
        <button className="bg-black/80 rounded-md w-56 lg:w-64 lg:mx-4 h-10 mt-2 text-white uppercase ">
          <a href="https://www.tesla.com/models/design">{leftBtn}</a></button>
        </leftBtn>
        {rightBtn && 
          <rightBtn>
          <button className="bg-white/80 rounded-md w-56 lg:w-64 lg:mx-4 h-10 mt-2 text-black uppercase">
             <a href="https://www.tesla.com/drive">{rightBtn}</a></button>
          </rightBtn>}
      </div>
      <div className="flex justify-center animate-bounce mt-14 ">
        <KeyboardArrowDownIcon style={{ color: "white"}}/>
      </div> 
    </Wrap>
  );
}

export default Model;

const Wrap = styled.div`

background-image: ${(props) => `url(${props.bgImg})`}; 
`