import React from 'react';
import './ItemDetailContainer.css';

const ItemDetailContainer = ({ item: { name, imageID, description, price } } ) => {
  
  return (
      <>
      <div className="detailed_item container">
                  <h4 className="itemTitle">{name}</h4>
                  <p className="itemImage"><img src={imageID} alt=""/></p>
                  <h5 className="itemDescription">{description}</h5>
                  <h5 className="itemPrice">€{price}</h5>
      </div>
      </>
  );
}
export default ItemDetailContainer; 
