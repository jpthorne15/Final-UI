import React from 'react';
//Imports react framwork into index file and is destructured for use as a component
import ReactDOM from 'react-dom';
//Imports React Document Object Model which acts as a node tree
//connecting each node that is a part of the document
import './index.css';
//Imports the basic css. commands for the site
// Casacading style sheets dictate web page aesthetics
import Images from './Images'
//Imports Image class from the Images directory
import * as serviceWorker from './serviceWorker';

const App = () => (
    <Images/>
)
//This makes it possibles for the class Images to then be routed at a later date
// ie Website as exists now would be for admin; may want public display of pages later 
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
