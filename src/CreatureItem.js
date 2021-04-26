import React, { Component } from 'react';
import './CreatureItem.css'

class CreatureItem extends Component {

    render() {
    const images = this.props.creatureImageProp;
    console.log(images)

    return (
        <>
         <li className="CreatureItem">
             <h2> {images.title}</h2>
             <img src={images.url} alt={images.name}/>
             {/* <div>
                 {images.description}
             </div> */}
             <p>How many horns? {images.horns}</p>
         </li>
        </>    
    );
    }

}

export default CreatureItem
