import React from 'react';
const PreparationHeader = (props) => {
     return (
          <div>
               <h6>Preparation:</h6>
               <div>
                    <h6>Total Time:{props.totalTime}</h6>
                    <p>Preparation:{props.prepTime}</p>
               </div>
          </div>
     );
};

export default PreparationHeader;
