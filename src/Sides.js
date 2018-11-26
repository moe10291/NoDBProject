import React, { Component } from 'react';
import image2 from './sidebar.png'

class Sides extends Component {
    render(){
        return(
            <img class= {this.props.flip ? 'Sides flip' : 'Sides'} src={image2} alt= 'sideimage' />
// style={{
//     width: '400px',
// }}/>
);      
}
}

export default Sides;