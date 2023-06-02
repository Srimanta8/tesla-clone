import React from "react";
import Model from "./Model";


function Container()  {
  return (
    <div>
      
      
      <Model 
        title="Tesla Model S"
        description="Order Online For Touchless Delivery"
        backgroundImg="Model-S.jpeg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      
      <Model
        title="Tesla Model 3"
        description="Order Online For Touchless Delivery"
        backgroundImg="Model3.jpeg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
    
      <Model
        title="Tesla Model X"
        description="Order Online For Touchless Delivery"
        backgroundImg="Model-x.jpeg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Model
        title=" Model Y"
        description="Order Online For Touchless Delivery"
        backgroundImg="Model-Y.jpeg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />

      <Model
        title="Solar Roof"
        description="Install Solar Roof your home with a fully integrated solar and energy storage system."
        backgroundImg="Solar-Roof.png"
        leftBtn="Order Now"
        rightBtn="Learn More"
      />
      <Model
        title="Solar Pannel"
        description="Solar Roof Costs Less Then a New Roof Plus Solar Pannels"
        backgroundImg="solar-pannel.jpg"
        leftBtn="Order Now"
        rightBtn="Learn More"
      />
      <Model
        title="Powerwall"
        description="Solar Roof Costs Less Then a New Roof Plus Solar Pannels"
        backgroundImg="powerwall.jpg"
        leftBtn="Order Now"
        rightBtn="Learn More"
      />
      <Model
        title="Accessories"
        description="An alternative to opening/locking your Tesla"
        backgroundImg="Tesla-Wall-Connector.png"
        leftBtn="Shop Now"
      />
    
    </div>
  );
}

export default Container;
