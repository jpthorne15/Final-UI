import React, { Component } from 'react';
import { API_URL } from '../config';
import CreateImage from './CreateImage';
// import {BrowserRouter as Router} from 'react-router-dom'
import Image from './image'
// import Routing from '../routing'



class Images extends Component {
  state = {
      Image : []
  }

  getImages = async () => {
    // Parent component above
    await fetch(`${API_URL}/images`)
        .then(response => response.json())
        .then(data => data.map(element => <Image key={element._id} image={element} refresh={this.getImages}/>).reverse())
        // Creates 7 different tags for all images. 
        .then(components => this.setState({ image: components }))
        .catch( err => console.log("err" , err))
}

componentDidMount() {
    this.getImages()
}


  render() {
    return (
    <div>
        <CreateImage refresh={this.getImages}/>
        {this.state.image}
        {/* <Router>
        <Routing />
        </Router> */}
    </div>

        
    );
  }
}

export default Images;