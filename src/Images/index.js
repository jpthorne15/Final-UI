import React, { Component } from 'react';
import { API_URL } from '../config';
import CreateImage from './CreateImage';
import Image from './image'


class Images extends Component {
  // This class extends the react component above on line 1
  state = {
      Image : []
  }
  //Lines 9 and 10 sets the state of an empty array for Image file
//This fetches that data from API expressed in the URL below
  getImages = async () => {
    await fetch(`${API_URL}/`)
        .then(response => response.json())
        .then(data => data.map(element => <Image key={element._id} image={element} refresh={this.getImages}/>).reverse())
        // Creates 7 different tags for all images. Reverse puts that latest new image on top, all but create is refreshed here
        .then(components => this.setState({ image: components }))
        .catch( err => console.log("err" , err))
}

componentDidMount() {
    this.getImages()
}
//this.getImages needed to update .getImages on lines 13-19 to make refresh update work
// The componentDidMount function makes it so when a new image is create it auto reloads the list
// this. makes it apply within the block scope; This makes it so the page is refreshed when getImages invoked

  render() {
    return (
    <div>
        <CreateImage refresh={this.getImages}/>
        {this.state.image}
     {/* Refreshes the images and resets them to state with blank categories */}
    </div>

        
    );
  }
}

export default Images;