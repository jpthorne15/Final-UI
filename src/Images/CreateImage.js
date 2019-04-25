import React, { Component } from 'react'
import { API_URL } from '../config'

export default class extends Component {
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
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        await fetch (`${API_URL}/image`, {
            method : "POST",
            body: JSON.stringify(this.state)    
        }).then( res => console.log(res.json()))
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
        .then ( () => this.props.refresh ())
        .catch (err => console.log(err))
    }

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
//How will breaks related to input rectangles in css file
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
                <textarea name = "text" 
                name="issue_description"
                placeholder="Elaboration on Issue Listed Above" 
                value={this.state.issue_description} 
                onChange={this.handleChange}/>
                <br/>
                <input type="text" 
                name="image"
                placeholder=" "
                //Verify this is how to do images from a file not a url
                value={this.state.img_src} 
                onChange={this.handleChange}/>
                <img src="../../Pictures/725-6-85 (1).JPG" ></img>
                <br/>
                <input type="submit" value="Create Image"/>  
            </form>
        )
    }
}