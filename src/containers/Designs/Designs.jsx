import React from 'react';
import './Designs.css';
import design1 from './design1.jpg';
import design2 from './design2.jpg';
import design3 from './design3.jpg';
import design4 from './design4.jpg';
import design5 from './design5.jpg';
import design6 from './design6.jpg';


const Designs = () =>{
    return(
        <>
       <div className="container designs_container">
        <div className="row">
                <div className="col">
                    <img src={design1} alt="No image"/>
                </div>
                <div className="col">
                    <img src={design2} alt=""/>
                </div>
                <div className="col">
                    <img src={design3} alt=""/>
                </div>
                <div className="col">
                    <img src={design4} alt=""/>
                </div>
                <div className="col">
                    <img src={design5} alt=""/>
                </div>
                <div className="col">
                    <img src={design6} alt=""/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Designs;