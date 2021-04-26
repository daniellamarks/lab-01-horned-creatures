import React, { Component } from 'react'
import CreatureItem from './CreatureItem';
import './CreatureList.css';


class CreatureList extends Component {

    render() {

        const images = this.props.images;

    return (
        <ul className="CreatureList">
            {images.map(image => (
                <CreatureItem key={image.keyword} creatureImageProp={image}/>
            ))}
        </ul>
    );

}
}
export default CreatureList
