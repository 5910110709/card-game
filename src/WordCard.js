import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

//<CharacterCard value={c} key={i} activationHandler={this.activationHandler}/>

export default class WordCard extends Component {
activationHandler = c => { console.log(`${c} has been activated.`) }
 
activate = () => {
    if(!this.state.active){
    this.props.activationHandler(this.props.value)
    this.setState({active: true})
    }
}
       
render() {
 return (
 <div>
{ Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler}/>) }
 </div>
 );
}
}
