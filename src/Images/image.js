import React, { Component } from 'react'
import { API_URL } from '../config'
import UpdateImage from './UpdateImage'

export default class extends Component {
    state = {
        isUpdating: false
    }

    handleDelete = async () => {
        await fetch(`${API_URL}/image/${this.props.image._id}`, {
            method: 'DELETE'
        }).then(res => console.log(res))
        .then(() => this.props.refresh())
        .catch(err => console.log(err))
    }
    
    toggleUpdate = () => {
        this.SetState({ isUpdating : !this.state.isUpdating})
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
            return (
                <fieldset>
                    <legend>{image.name}</legend>
                    <img src={image.ComponentmyImg.alt} height="150 px" />
                    <h4>Trail Name: {image.trail_name}</h4>
                    <h4>Item Number: {image.item_type}</h4>
                    <h4>JPT Library Reference: {image.jpt_library_reference}</h4>
                    <h4>Item Description: {image.item_description}</h4>
                    <h4>Issue: {image.issue}</h4>
                    <p>Issue Description: {image.issue_description}</p>          
                </fieldset>
                
                    
    
                    
                    
    
    
            )
        }
}
// Place all below into curly bracket above

