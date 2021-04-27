import React, { Component } from 'react';
import './CreatureItem.css'

class CreatureItem extends Component {

    render() {
    const creatures = this.props.creatureImageProp;
    console.log(creatures)

    return (
        <>
         <li className="CreatureItem">
             <h2> {creatures.title}</h2>
             <img src={creatures.url} alt={creatures.name}/>
             {/* <div>
                 {images.description}
             </div> */}
             <p>How many horns? {creatures.horns}</p>
         </li>
        </>    
    );
    }

}

export default CreatureItem
