import React from 'react';
const PreparationHeader = (props) => {
     return (
          <div>
               <h6 class="color">Preparation:</h6>
               <div>
                    <h6>Total Time:{props.totalTime}min</h6>
                    <p>Preparation:{props.prepTime}min</p>
               </div>
          </div>
     );
};

export default PreparationHeader;
