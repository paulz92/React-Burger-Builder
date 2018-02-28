import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredient => {
      return (
        <li key={ingredient}>
          <span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {props.ingredients[ingredient]}
        </li> );
    });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
      <button>Cancel</button>
      <button>Continue</button>
    </Aux>
  );
};

export default orderSummary;