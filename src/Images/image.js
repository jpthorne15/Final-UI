import React, { Component, Fragment } from 'react'
//impoorts a ability to fragment so that child  of the react component does not add extra nodes to the DOM
import { API_URL } from '../config'
import UpdateImage from './UpdateImage'
//imports Update Image so that all information on an existing object is there
// 
export default class extends Component {
    state = {
        isUpdating: false
    }
//State is set so that default updating will not occur
    handleDelete = async () => {
        await fetch(`${API_URL}/image/${this.props.image._id}`, {
            method: 'DELETE',        
        })
        .then(res => console.log("handleDelete",res))
       .then(() => window.location.reload())//Reloads entire app after a refresh
        //.then(() => this.props.refresh()) //does not reload the entire app perform get request. 
        //this.props.refresh is passed in from index.js where image component is mapped.
        .catch(err => console.log("err", err))
    }
    // handleDelete functions uses a promise to sync with database information; uses delete http verb
    //  console log confirms deletion; .then prompts a reload of the page
 
    toggleUpdate = () => {
        this.setState({ isUpdating : !this.state.isUpdating})
    }
    //!this state ternary expression related to Line 9 now is updating when toggle function called
    buttons = () => (
        <div>
        <input type= "button" value='Delete' onClick={this.handleDelete} />
        <input type= "button" value='Update' onClick={this.toggleUpdate} />
        </div>   
    )
    // buttons are a function; this.handleDelete deletes based onclick fuction and this.toggleUpdate updates the database
    // as an end product. This file has image id called out. This button will be part of each image display
    updateForm = () => (
        <div>
            <UpdateImage image = {this.props.image} refresh={this.props.refresh} closeUpdate={this.toggleUpdate}/>
            <input type = "button" value = "Cancel" onClick = {this.toggleUpdate}/>
        </div>
    )
    //lines 36-38 call the Updateimage function refresh props that chnange and close the update
    // Button with value cancel will cancel the data input; Onclick updates the data entry
        render() {
            const image = this.props.image
            console.log("this.state.image" , image)
            return (
                <Fragment>
                
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
// The fieldset dictates the size of the print in the boxes

