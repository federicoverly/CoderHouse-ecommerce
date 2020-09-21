import React, {useState} from 'react';
import './ItemCount.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddtoCart from '../AddtoCart/AddtoCart';

const ItemCount = ({ item, color , initial, min, max }) => {
    const [ clotheColor, setClotheColor ] = useState("")
    const [ clotheSize, setClotheSize ] = useState("")
    const [ count, setCount ] = useState(initial)

    // Change Color
    function changeColor(evt) {
    setClotheColor(evt.target.value)
        }

    // Change Size
    function changeSize(evt) {
        setClotheSize(evt.target.value)
        }
 
    // Add Product
   function addNewProduct () {
        if (count < max) {
            setCount(count+1)
        }
        else{
            alert("Ups, looks like we don't have more!")
        }
    };
    
    // Sub Product
    function subsProduct () {
        if (count > min) {
            setCount(count-1)
        }
    };

    return (
        <>
            <div className="item_count_container">
                <h3 className="itemName">{item.name}</h3>
                <div className="details_container">
                    <label for="color">Choose your color: </label>
                            <select name="color" id="color" onChange={(evt) => changeColor(evt)}>
                                <option value="default">---</option>
                            {color.map (c => <option value={c}>{c}</option>)}
                            </select>
                    <br />
                    <label for="size">Choose your size: </label>
                            <select name="size" id="size" onChange={(evt) => changeSize(evt)}>
                                <option value="default">---</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                    
                </div>
                <div className="item_count">                   
                    <button type="button" className="add" 
                    onClick={addNewProduct}
                    ><FontAwesomeIcon icon="plus"  /></button> 
                       <p classnName="amount">{count}</p>
                    <button type="button" className="take" disabled={count===min}
                    onClick={subsProduct}
                         ><FontAwesomeIcon icon="minus" /></button> 
                </div>
                <br/>
                <AddtoCart item={item} size={clotheSize} color={clotheColor} count={count} min={min} />
            </div>
        </>
    );
};

export default ItemCount;
