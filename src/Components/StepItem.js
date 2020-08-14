import React from 'react';
const StepItem = (props) => {
     return (
          <div>
               <h6>{props.stepNumber}</h6>
               <p>{props.step}</p>
          </div>
     );
};

export default StepItem;
