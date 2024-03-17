import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  
  <nav>
    {links.map((linkat, index)=> {
      return ( 
        <a key={index} href={`#${linkat}`}>{linkat} </a>
      )
    })}
  </nav>
  )
}

export default NavBar;
