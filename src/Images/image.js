import React, { Component, Fragment } from 'react'
import { API_URL } from '../config'
import UpdateImage from './UpdateImage'
//import CreateImage from './CreateImage'

export default class extends Component {
    state = {
        isUpdating: false
    }

    handleDelete = async () => {
        await fetch(`${API_URL}/image/${this.props.image._id}`, {
            method: 'DELETE'
        }).then(res => console.log("handleDelete",res))
        .then(() => window.location.reload())
        .catch(err => console.log("err", err))
    }
    
    toggleUpdate = () => {
        this.setState({ isUpdating : !this.state.isUpdating})
    }
    
    buttons = () => (
        <div>
        <input type= "button" value='Delete' onClick={this.handleDelete} />
        <input type= "button" value='Update' onClick={this.toggleUpdate} />
        </div>   
    )
    updateForm = () => (
        <div>
            <UpdateImage image = {this.props.image} refresh={this.props.refresh} closeUpdate={this.toggleUpdate}/>
            <input type = "button" value = "Cancel" onClick = {this.toggleUpdate}/>
        </div>
    )
    
        render() {
            const image = this.props.image
            console.log("this.state.image" , image)
            return (
                <Fragment>
                {/* <div>
                <CreateImage refresh={this.getImages}/>
                {this.state.image}
                </div> */}
                <fieldset>
                    <legend>{image.name}</legend>
                    <img src={image.image} height="150 px" alt="myImg" />
                    <h4>Trail Name: {image.trail_name}</h4>
                    <h4>Item Number: {image.item_number}</h4>
                    <h4>Item Type: {image.item_type}</h4>
                    <h4>JPT Library Reference: {image.jpt_library_reference}</h4>
                    <h4>Item Description:</h4> 
                    <p>{image.item_description}</p>
                    <h4>Issue: {image.issue}</h4>
                    <h4>Issue Description:</h4> 
                    <p>{image.issue_description}</p>
                    {this.state.isUpdating ? <this.updateForm/> : <this.buttons/>}          
                </fieldset>
                </Fragment>
        )
    }
}
// Export default Image
//Familiarize with Google Developer Tools
