import React, { Component } from 'react';
import { API_URL } from '../config';
import CreateImage from './CreateImage';
import Image from './image'


class Images extends Component {
  // This class extends the react component above on line 1
  state = {
      Image : []
  }
//This sets the initial state for the array of image files
  getImages = async () => {
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
//this.getimages needed to replace .getimage on line 19 to make refresh update work
// The componentDidMount delcaration applies to this state of getImages

  render() {
    return (
    <div>
        <CreateImage refresh={this.getImages}/>
        {this.state.image}
     {/* Refreshes the images and resets them to new state */}
    </div>

        
    );
  }
}

export default Images;