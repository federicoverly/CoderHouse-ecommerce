import React from 'react';
import './AboutMe.css';
import about_me_pic from "./about_me.jpeg";

const AboutMe = () => {

    return(
    <>
    <div className="container-fluid About_me">
    <div className="container">
        <div className="row titles_containers">
              <h3 className="about_me_subtitle">A short story about me and my brand<br /></h3>
              <h2 className="about_me_title">JANINE - MADE BY LOVE</h2>
        </div>
        <div className="row">
            <div className="col-5 about_me_pic">
                <img src={about_me_pic} alt=""/>
            </div>
            <div className="col-7 about_me_description">
                <p> I am a young fashion designer who studied industrial engineering and graphic design at the University of Creative Communication in Prague. In 2017, I founded my own brand Janine. <br/>
                    <br/>
                    I specialize in extravagant and original tailor-made bombers. My portfolio also includes the production of custom dresses, wedding dresses and much more. You can find my work and me in the studio: V kolkovně 3<br/>
                    <br/>
                    Fashion brand from metropolitan Prague combining extravagance with basic elements. Originality is the only limit to inspiration - each piece is unique. There is no fear of combining the incompatible, whether they are substances that are not commonly used in fashion or concepts that are not typical of the fashion market.</p>
            </div>
            <div className="row contact_container1">
                 <div className="col contact_container">
                    <p>EMAIL</p>
                    <h5>JANINE.REZACOVA@gmail.com</h5>
                 </div>
                 <div className="col contact_container">
                    <p>PHONE</p>
                    <h5>+420 604 173 017</h5>
                 </div>
                 <div className="col contact_container">
                    <p>INSTAGRAM</p>
                    <h5>JANINE_MADEBYLOVE</h5>
                 </div>                 
            </div>
        </div>
    </div>
    </div>
    </>
    );
};

export default AboutMe