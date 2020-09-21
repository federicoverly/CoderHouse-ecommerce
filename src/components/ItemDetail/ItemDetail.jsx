import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getFirestore } from '../../firebase';
import './ItemDetail.css'; 
import ItemDetailContainer from "../../containers/ItemDetailContainer/ItemDetailContainer";
import ItemCount from "../ItemCount/ItemCount";

// Loading Component
const LoadingComponent = () => {
  return(
  <div className="spinner_container">
    <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
    </div>
  </div>
  );
}

// Item Detail

function ItemDetail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [ item, setItem ] = useState({});

  // Get Item Detail from Firebase
  useEffect(() => {
  const db = getFirestore();
  const itemCollection = db.collection('items');
  const item = itemCollection.doc(id)

  item.get().then((doc) => {
    if (!doc.exists) {
      console.log("Item does not exist")
      alert("Looks like the item you are looking for does not exist")
      window.location = '/';
    }
    console.log("Item found")
    setItem({ id: doc.id, ...doc.data() });
    setLoading(false)
  });
  
  }, [id]);

  return (
      <>
         <div className="Item_detail container">
            {loading ? <LoadingComponent /> :
            <div className="row">
              <div className="col-7 item_details">
                <ItemDetailContainer item={item}/> 
              </div>
              <div className="col-5 item_counter">
                <ItemCount item={item} color={item.color} max={item.stock} min={1} initial={1} />
              </div>
            </div>
            }                          
          </div>
      </>
  )
}

export default ItemDetail;
