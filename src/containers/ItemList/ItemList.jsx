import React from 'react';
import './ItemList.css'; 
import ListItem from '../../components/ListItem/ListItem'; 

function ItemList( { items }) {
 
  return <>
  <div className="container List_item">
    <div className="row">
        {items.map(item => <ListItem item={item} />)}
    </div>
  </div>
  </>;
}

export default ItemList;





