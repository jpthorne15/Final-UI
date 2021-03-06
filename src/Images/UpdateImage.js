import React, { Component } from 'react'
import { API_URL } from '../config'
// Imports The React component and the url of the api
export default class extends Component {
    //Setting object state; Significance of state in React state is oblject that is observed for changes
    state = {
        trail_name: this.props.image.trail_name,
        name: this.props.image.name,
        item_number: this.props.image.item_number,
        item_type: this.props.image.item_type,
        jpt_library_reference: this.props.image.jpt_library_reference,
        item_description: this.props.image.item_description,
        issue: this.props.image.issue,
        issue_description: this.props.image.issue_description,
        image: this.props.image.image
    }
// This state represents all properties (names and values in jsx) that are contained within any object that is input, 
//this prepopulates the form with existiing info
    
handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
        // Input field is clicked thats the target element; is a pattern of key value
    }
// handleChange has an event parameter that sets the state in this block of code
    handleSubmit = async (event) => {
        event.preventDefault()
       console.log(`this.state`,this.state)
       console.log(`this.props.image._id`,this.props.image._id)
        await fetch(`${API_URL}/image/${this.props.image._id}`, {
            method : "PUT",
            headers: {"Content-Type": "application/json"},
            // fetch is accessing a specific property of an object in the database as accessed by the API URL
            // the PUT method is used to overwrite the object once its updated
            body: JSON.stringify(this.state)    
        })
        //converting the response to a json object to console logged in the browser
        .then( res => console.log('res',res))
        // places json file in console log
        .then( () => this.setState ({
            trail_name: "",
            name: "",
            item_number: "",
            item_type: "",
            jpt_library_reference: "",
            item_description: "",
            issue: "",
            issue_description: "",
            image: ""
        }))
        .then ( () =>this.props.closeUpdate())
        // the state is revised and the update sequence is closed after the .then setState
        // .then ( () => this.getImages()) //fix me please
        .then( () => this.props.refresh())
        .catch (err => console.log("err", err))
    }  

    render () {
        console.log(`renderState`,this.state)
        console.log(`renderProps`,this.props)
        return (
            <form onSubmit = {this.handleSubmit}>
                <h2> - Update Image - </h2> 
                {/*Is the header on the Update portion of the Webpage  */}
                <input type="text"
                // This is designates input type, text integer etc. 
                name="trail_name"
                // Name of category in database
                placeholder="Name of Trail"
                // What is displayed on this category of the Webpage 
                value={this.state.trail_name} 
                // What is passed in to category from the database and json file
                onChange={this.handleChange}/>
                {/* Invokes the change event in Line 18 */}
                <br/>

                <input type="text" 
                name="name"
                placeholder="Name of Image" 
                value={this.state.name} 
                onChange={this.handleChange}/>
                <br/>

                <input type="int" 
                name="item_number"
                placeholder="Item Number" 
                value={this.state.item_number} 
                onChange={this.handleChange}/>
                <br/>

                <input type="text" 
                name="item_type"
                placeholder="Image or Recording" 
                value={this.state.item_type} 
                onChange={this.handleChange}/>
                <br/>

                <input type="text" 
                name="jpt_library_reference"
                placeholder="Library Reference #" 
                value={this.state.jpt_library_reference} 
                onChange={this.handleChange}/>
                <br/>

                <input type="text" 
                name="item_description"
                placeholder="Description of Image" 
                value={this.state.item_description} 
                onChange={this.handleChange}/>
                <br/>
                <input type="text" 
                name="issue"
                placeholder="Single Issue related to Design" 
                value={this.state.issue} 
                onChange={this.handleChange}/>
                <br/>
                <textarea type = "text" 
                name="issue_description"
                placeholder="Elaboration on Issue Listed Above" 
                value={this.state.issue_description} 
                onChange={this.handleChange}/>
                <br/>
                <input type="text" 
                name="image"
                placeholder="Image_src" 
                
                value={this.state.img_src} 
                onChange={this.handleChange}/>
                <br/>
                <input type="submit" value="Update Image"/>  
            </form>
        )
    }
}