import React, { Component } from 'react';
import { API_URL } from '../config';
import CreateImage from './CreateImage';
import Image from './image'


class Images extends Component {
  // This class extends the react component above on line 1
  state = {
      Image : []
  // this pulls in the array of images then sets state = to empty array
    }
  //Lines 9 and 10 sets the state of an empty array for Image file
//This fetches that data from API expressed in the URL below
  getImages = async () => {
    await fetch(`${API_URL}/`)
        .then(response => response.json())
        .then(data => data.map(element => <Image key={element._id} image={element} refresh={this.getImages}/>).reverse())
        //Image prop. takes in element data key is _id
        // Creates 7 different tags for all images. Reverse puts that latest new image on top, all but create is refreshed here
        .then(components => this.setState({ image: components }))
        .catch( err => console.log("err" , err))
}

componentDidMount() {
    this.getImages()
}
//getImages is the on lines 13-19 is the fuction called with the component did mount function to make the screen refresh when a new image is added
// The componentDidMount function makes it so when a new image is created it auto reloads the list. 
// this. makes the function call apply within the block scope; This makes it so the page is refreshed when getImages is called
// If getImages not in ComponentDidMount function then the getImages function is the
//refresh mechanism so the page reloads after the latest image is created

  render() {
    return (
    <div>
        <CreateImage refresh={this.getImages}/>
        {this.state.image}
     {/* Refreshes the images and resets them to state with blank values */}
    </div>

        
    );
  }
}

export default Images;