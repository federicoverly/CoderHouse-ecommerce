import React from 'react';
import "./ListItem.css"
import {NavLink} from 'react-router-dom';

const ListItem = ( { item: { id, name, imageID } } ) =>{

    // Check Going to Detail
    function toDetail(id){
        console.log('Going to detail for item ', id);
    };

    return (
            <div class="item_container col-md-4">
                <NavLink to={`/item/${id}`} style={{ textDecoration: 'none' }}>
                    <div className="item_image " style={{ cursor: 'pointer' }} onClick={ ()=> toDetail(id) }>
                        <img src={imageID} alt=""/>
                        
                        <div className="item_name">
                        {name}
                        </div>
                    </div>
                </NavLink>
            </div>
    )
   };

export default ListItem;
