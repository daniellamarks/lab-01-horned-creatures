import React, { Component } from 'react';

class CreatureItem extends Component {

    render() {
    const images = this.props.creatureImageProp;
    console.log(images)
    return (
        <>
         <div className="CreatureItem">
             <h2> {images.title}</h2>
             <img src={images.url} alt="creatures"/>
             <div>
                 {images.description}
             </div>
             <div>
                 <p>How many horns?</p>{images.horns}
             </div>
         </div>
        </>    
    );
    }

}

export default CreatureItem
