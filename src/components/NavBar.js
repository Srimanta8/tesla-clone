import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

function NavBar() {
  const [nav, setNav]=useState(false)

  const handleNav=()=>{
    setNav(!nav)
  }
  return (
    <NavContainer>
      <a href="https://www.tesla.com/">
          <img
            className="h-4"
            src="https://www.freepnglogos.com/uploads/tesla-logo-png-20.png"
            alt="Tesla Logo"
          />
        </a>

        <Menu  className="ullink">
        <p className="hidden lg:inline lilink"><a href="https://www.tesla.com/models">Model S</a></p>
          <p className="hidden lg:inline lilink">
            <a href="https://www.tesla.com/model3">Model 3</a>
          </p>
          <p className="hidden lg:inline lilink">
            <a href="https://www.tesla.com/modelx">Model x</a>
          </p>
          <p className="hidden lg:inline lilink">
            <a href="https://www.tesla.com/modely">Model Y</a>
            </p>
          <p className="hidden lg:inline lilink">
            <a href="https://www.tesla.com/solarroof">Solar Roof</a>
          </p>
          <p className="hidden lg:inline lilink">
            <a href="https://www.tesla.com/solarpanels">Solar Panels</a>
          </p>
          <p className="hidden lg:inline lilink">
            <a href="https://www.tesla.com/powerwall">Powerwall</a>
          </p>

        </Menu>

        <RightMenu className="hover:cursor-pointer ">
        <p className="hidden lg:inline lilink ">
            <a href="https://shop.tesla.com/">Shop</a>
          </p>
          <p className="hidden lg:inline lilink">
            <a href="https://www.tesla.com/teslaaccount">Account</a>
          </p>
          <p onClick={handleNav}className="hidden lg:inline lilink " >Menu</p>
        </RightMenu>


        <div className="lg:hidden ">
        <button onClick={handleNav}
        className="inline-flex items-center rounded-md  p-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10 ">
          Menu
        </button>
      </div>

      <div  className={ nav ? "bg-white fixed top-0 right-0 w-80 h-full z-10 scroll-y " : "fixed right-[100%]"}>
        <div className="flex justify-end pr-8 pt-8 ">
          <CloseIcon onClick={handleNav} size={28} className="rounded p-0 hover:bg-black/10" />
        </div>
        <div className="focus:touch-pan-x will-change-scroll">
          <ul >
            <li className="menulilink"><a href="https://www.tesla.com/inventory/new/m3">Existing Inventory</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/inventory/used/m3">Used Inventory</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/tradein">Trade-in</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/drive">Demo Drive</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/insurance">Insurence</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/fleet">Fleet</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/cybertruck">Cybertruck</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/roadster">Roadster</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/semi">Semi</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/charging">Charging</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/commercial">Commercial Energy</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/utilities">Utilities</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/careers">Careers</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/findus">Find Us</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/events">Events</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/support">Support</a></li>
            <li className="menulilink"><a href="https://ir.tesla.com/">Investor Relation</a></li>
          </ul>
        </div>
      </div>

    </NavContainer>
  );
}

export default NavBar;

const NavContainer=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding: 0 30px;
top:0;
right:0;
left:0;
`

const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;

p{
  font-weight:600;
  text-transform: uppercase;
  padding:0 10px;
  flex-wrap:nowrap;
}`
const RightMenu=styled.div`
display:flex;

p{
  font-weight:600;
  text-transform: uppercase;
  padding:0 10px;
  flex-wrap:nowrap;
}
`

{/*
<div className="flex justify-between top-0 left-0 right-0 items-center pl-11 p-4 text-sm font-bold">
      <div>
        
      </div>

      <div className="hidden lg:inline ">
        <ul className="ullink ">
          <li className="lilink">

          <ul>
            <li><a href="https://www.tesla.com/models">Model S</a></li>
            <li>
            <a href="https://www.tesla.com/model3">Model 3</a>
          </li>
          <li>
            <a href="https://www.tesla.com/modelx">Model x</a>
          </li>
          <li>
            <a href="https://www.tesla.com/modely">Model Y</a>
          </li>
          </ul>
            {" "}
            
          </li>
          
          <li className="lilink">
            <a href="https://www.tesla.com/solarroof">Solar Roof</a>
          </li>
          <li className="lilink">
            <a href="https://www.tesla.com/solarpanels">Solar Panels</a>
          </li>
          <li className="lilink">
            <a href="https://www.tesla.com/powerwall">Powerwall</a>
          </li>
        </ul>
      </div>

      <div className="hidden lg:inline">
        <ul className="ullink ">
          <li className="lilink">
            <a href="https://shop.tesla.com/">Shop</a>
          </li>
          <li className="lilink">
            <a href="https://www.tesla.com/teslaaccount">Account</a>
          </li>
          <li onClick={handleNav} className="lilink">Menu</li>
        </ul>
      </div>
      <div className="lg:hidden">
        <button onClick={handleNav}
        className="inline-flex items-center rounded-md  p-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10 ">
          Menu
        </button>
      </div>

      <div  className={ nav ? "bg-white absolute top-0 right-0 w-80 h-full z-10" : "fixed right-[100%]"}>
        <div className="flex justify-end pr-8 pt-8 ">
          <CloseIcon onClick={handleNav} size={28} className="rounded p-0 hover:bg-black/10" />
        </div>
        <div className="focus:touch-pan-x will-change-scroll">
          <ul >
            <li className="menulilink"><a href="https://www.tesla.com/inventory/new/m3">Existing Inventory</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/inventory/used/m3">Used Inventory</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/tradein">Trade-in</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/drive">Demo Drive</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/insurance">Insurence</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/fleet">Fleet</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/cybertruck">Cybertruck</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/roadster">Roadster</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/semi">Semi</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/charging">Charging</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/commercial">Commercial Energy</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/utilities">Utilities</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/careers">Careers</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/findus">Find Us</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/events">Events</a></li>
            <li className="menulilink"><a href="https://www.tesla.com/support">Support</a></li>
            <li className="menulilink"><a href="https://ir.tesla.com/">Investor Relation</a></li>
          </ul>
        </div>
      </div>
    </div>
   */}