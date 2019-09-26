import React, { Component } from 'react'
import { API_URL } from '../config'//Deconstuction

export default class extends Component {//Setting object state; Significance of state in React state is oblject that is observed for changes
    state = {
        trail_name: "",
        name: "",
        item_number: "",
        item_type: "",
        jpt_library_reference: "",
        item_description: "",
        issue: "",
        issue_description: "",
        image: ""
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value //Dont know target value
        })
    }
// handleChange has an event parameter that sets the state in this block of code
    handleSubmit = async (event) => {
        event.preventDefault()
        // Makes event cancellation possible by preventing it from submitting a form
        await fetch (`${API_URL}/image`, {
            // find the API URL and destructure or extract the image data portion
            method : "POST",
            // http verb to post new object to json and then database
            body: JSON.stringify(this.state) //stringify method takesin state as a 
            // parameter converting a json oblject to a string    
        }).then( res => console.log("handleSubmit",res.json()))//converting the response to a json object to console logged in the browser
        .then( () => this.setState ({//both declare parameter current state that 
            // is blank or clear out our state object so that new values can be added
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
        .then ( () => this.props.refresh())//display newly added data and after thats been added to 
        // Mongo it refreshes the categroies
        .catch (err => console.log("err", err))
    }
        // catch acts as a way to declare that there is an error 
        // in the program execution on the console log

    render () {
        return (
            <form onSubmit = {this.handleSubmit}>
                <h2> - Add Image - </h2>
                <input type="text" 
                name="trail_name"
                placeholder="Name of Trail" 
                value={this.state.trail_name} 
                onChange={this.handleChange}/>
                <br/>
                <input type="text" // DO not focus on every input
                name="name"//This is the target get me the name input that event happens on is the target
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
                placeholder="Image URL"
                value={this.state.image.img_url} 
                onChange={this.handleChange}/>
                <br/>
                <input type="submit" value="Create Image"/> 
                {/* other word for image  */}
            </form>
        )
    }
}