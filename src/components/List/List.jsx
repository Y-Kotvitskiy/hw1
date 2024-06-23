//import React from 'react';

const animals = [
    { type: `turtle`, icon: `🐢` },
    { type: `octopus`, icon: `🐙` },
    { type: `fish`, icon: `🐠` },
    { type: `flamingo`, icon: `🦩` },
    { type: `penguin`, icon: `🐧` },
  ];
  

function List(props) {
    
    const listItems = animals.map((animal, index) => 
        <li key={index}><span className="icon">{animal.icon}</span> {animal.type}</li> 
    )

    return (
        <ul> {listItems} </ul>
    );
}

export default List;