import React, { Component } from 'react';
import { API_URL } from '../config';
import CreateImage from './CreateImage';
import Image from './image'



class Images extends Component {
  state = {
      Image : []
  }

  getImages = async () => {
    await fetch(`${API_URL}/images`)
        .then(response => response.json())
        .then(data => data.map(element => <Image image={element} refresh={this.getImage}/>))
        .then(components => this.setState({ image: components }))
        .catch( err => console.log(err))
}

componentDidMount() {
    this.getImages()
}


  render() {
    return (
    <div>
        <CreateImage refresh={this.getImages}/>
        {this.state.image}
    </div>

        
    );
  }
}

export default Images;