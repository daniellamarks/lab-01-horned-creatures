import React from 'react';
import images from './creatures';

function CreatureItem(images) {
    return (
        <>
         <div className="creatureItem">
             <h2>
                {this.images.title}
             </h2>
             <img src={this.images.url} alt="creatures"></img>
             <div>
                 {this.images.description}
             </div>
         </div>
        </>    
    )
}

export default CreatureItem
