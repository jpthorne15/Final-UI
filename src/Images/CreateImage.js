import React, { Component } from 'react'//
import { API_URL } from '../config'//Deconstuction

export default class extends Component {//Setting object state; 
    //Significance of state in React state is oblject that is observed for changes
    // correlates with assigned values in the form below lines 57-118
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
            [event.target.name] : event.target.value //Is a dynamic function it will call this function based
            // when Onchange is invoked
        })
    }
// handleChange has an event parameter that sets the state in this block of code
    handleSubmit = async (event) => {
        event.preventDefault()
        // Prevents default behavior of clearing screen and console log after submission of data; 
        await fetch (`${API_URL}/`, {
            // find the API URL and destructure or extract the image data portion
            method : "POST",
            // http verb to post new object to json and then to API and database
            headers: {"Content-Type": "application/json"},
            //Specifies http headers; indicates the request body format is json
            body: JSON.stringify(this.state) //stringify method in body of object takes in state as an Origin of payload
            // goes into data body and converts a json oblject to a string to transfer data that 
            //is input to http pipeline(only takes strings)    
        }).then( res => console.log("handleSubmit",res.json()))//converting the response to a json object and then logged to console
        .then( () => this.setState ({//both declare parameter current state that 
            // is blank or clear out state object so that new values can be added. 
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
        .then ( () => this.props.refresh())//refreshes the fieldset and page to blank values adjacent to the names above 
        .catch (err => console.log("err", err))
    }
        // catch acts as a way to declare that there is an error 
        // in the program execution on the console log
// Renders output to screen properties of the object lines 35-46 and returns data that is input through html form below
    render () {
        return (
            <form onSubmit = {this.handleSubmit}>
                {/* fetches what was found in handle sunmitted as data returned and rendered to the screen See Line 23 */}
                <h2> - Add Image - </h2>
                {/* The above is the header that will appear on the url */}
                <input type="text" 
                name="trail_name"
                placeholder="Name of Trail"
                value={this.state.trail_name} 
                onChange={this.handleChange}/>
                {/* Value is whatever the last value was placed on webpage box ;onChange constant equals the current state of handleChange constant triggered by an event*/}
                <br/>
                <input type="text"
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
            </form>
        )
    }
}