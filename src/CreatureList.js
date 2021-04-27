import React, { Component } from 'react'
import CreatureItem from './CreatureItem';
import './CreatureList.css';


class CreatureList extends Component {

    render() {

        const creatures = this.props.creatureImageProp;

    return (
        <ul className="CreatureList">
            {creatures.map(eachCreatureItem => {
                //changed to return to console.log
            return <CreatureItem key={eachCreatureItem.keyword} creatureImageProp={eachCreatureItem}/>
    })}
        </ul>
    );

}
}
export default CreatureList
