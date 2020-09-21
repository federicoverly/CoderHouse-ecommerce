import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './Home.css'; 
import Hero from '../../components/Hero/Hero'; 
import ItemList from '../ItemList/ItemList';
import { getFirestore } from '../../firebase';

//Probando agregar cambios , y?

const Home = () => {    
    const { categoryID  } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // Get Items from Firebase
    useEffect(() => {
    const db = getFirestore();

    const itemCollection = db.collection('items').where('stock', '>', 0);

    itemCollection.get().then((querySnapshot) => {
      console.log(querySnapshot)
      if(querySnapshot.size === 0){
        console.log("No hay items")
      }
      setLoading(false);
      console.log("hay items")
      setItems(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id })));
      console.log(items);

    });
    },
     []);
    
     // Filtering Categories
    const filteredItems = categoryID ? items.filter(i => i.categoryID === categoryID) : items;

    return (
        <>
        <Hero welcome_message="JANINE'S MUST HAVES" />
            {loading ?  <div className="spinner_container">
                        <div className="spinner-border" role="status">
                             <span className="sr-only">Loading...</span>
                        </div>
                        </div>
            : 
            <ItemList items={filteredItems} />
            }
        </>
    );
}

export default Home;