import React from 'react';
import Entries from './Entries.jsx';

const PizzaList = (props) => {

  // use .map and return inside of it
console.log(props.pizzas);
    return (
      <div>
       <ul>
         {props.pizzas.map((item) => {
           return <Entries pizzasOrder={item.orders} />
         })}
       </ul>
      </div>
    )
};

export default PizzaList;