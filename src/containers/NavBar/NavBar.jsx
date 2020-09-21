import React, {useState, useEffect} from 'react';
import './NavBar.css'; 
import janine_logo from "./janine-logo-main.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartIcon from "../../components/CartIcon/CartIcon";
import {NavLink} from 'react-router-dom';
import { getFirestore } from '../../firebase';

const NavBar = () => {
   const [categories, setCategories ] = useState([])

   // Get Categories from Firebase
   useEffect(()=>{
      const db = getFirestore();
      const categoriesCollection = db.collection('categories')

      categoriesCollection.get().then((querySnapshot) => {
      setCategories(querySnapshot.docs.map(doc => doc.data()))
      });
   })
   
     return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light flex-column fixed-top mynavbar">
               
               <a href="#" className="navbar-brand mx-auto">
                  <img src={janine_logo}/>
               </a>
               
               <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                 <FontAwesomeIcon icon="bars"  />
               </button>

               <div className="collapse navbar-collapse" id="navbarMenu">
                  <ul className="navbar-nav">
                     <li className="nav-item active">
                        <NavLink to={'/'} style={{ textDecoration: 'none' }}><a className="nav-link" href="#">HOME<span className="sr-only">(current)</span></a></NavLink>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           CATEGORIES
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          {categories.map( cat => <NavLink to={`/categories/${cat.categoryID}`} activeClassName="currentCategory"><a className="dropdown-item" href="#">{cat.name}</a></NavLink>)}                        
                        </div>
                     </li>
                     <li className="nav-item">
                        <NavLink to={'/designs'} style={{ textDecoration: 'none' }} style={{ textDecoration: 'none' }}><a className="nav-link" href="#">COMING DESIGNS</a></NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to={'/aboutme'} style={{ textDecoration: 'none' }}><a className="nav-link" href="#">ABOUT ME</a></NavLink>
                     </li>
                     <li className="nav-item cart_icon">
                        <NavLink to={'/cart'} style={{ textDecoration: 'none' }}><CartIcon /></NavLink>
                     </li>
                  </ul>
               </div>
         </nav>
     );
 }

 export default NavBar;
