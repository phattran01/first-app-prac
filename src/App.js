import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
const title = "My React App"
var footerText = "footer text"
var author = { name:"John Doe", 
               phone: "800-555-1212", 
               email: "jdoe@gmail.com" }
var initialState = {
    title: "My React App",
    footerText: "footer text",
    color: "blue",
    message: "",
    selectedIndex: -1,
    author: { 
            name:"John Doe", 
            phone: "800-555-1212", 
            email: "jdoe@gmail.com" 
    }
    , books: [
	    {isbn:'123', title:'The Time Machine', price:5.95 },
	    {isbn:'456', title:'War of the Worlds', price:6.95 },
	    {isbn:'789', title:'The Invisible Man', price:4.95 }
	    ]
}
function BookList(props) {
  return (<ul>
    {props.books.map(
      (book, index) => {
        return (
          <li 
            onClick={(e) => props.handleListItemClick(e, index)}
            className={index === props.selectedIndex ? "selected" : ""}
            key={index} >{book.title}</li>)}
     )}
  </ul>
  );
}
function App(props){
  // let state = initialState
  const[state, setState] = useState(initialState);
  let handleChange = (event) => {
    state[event.currentTarget.name] = event.currentTarget.value;
    setState({...state}); 
  }
  function handleButtonClick(event){
    state.message = "You like the color " + state.color + "!";
    setState({...state}); 
  }
  function handleListItemClick(event, index){
    state.selectedIndex = index;
    const book = state.books[index];
    setState({ ...state });
    console.log("You chose: " + book.isbn + ", " +
     book.title + ", " + book.price);
  }
  return (
    <div className={'boxed'}>
      <Header title={state.title} />
      <Body {...state} 
        handleChange={handleChange}
        handleButtonClick={handleButtonClick}
        handleListItemClick={handleListItemClick} />
      <Footer text={state.footerText} />
    </div>
  );
}

export default App;

function Header(props){
  return <h3 style={divStyle} >{props.title}</h3>;
}
function Body(props){
  return ( <div>
      <p>Author:{props.author.name}</p>
      <BookList {...props} />
      <p>Enter your favorite color:</p>
      <input 
        type='text' name='color'  
        value={props.color}
        onChange = {props.handleChange} />
      <input 
        type='button' 
        value='click here'  
        onClick = {props.handleButtonClick} />    
      <p>{props.message}</p>    
      </div> );
}
function Footer(props){
  return (<div><h4 style={divStyle} >{props.text}</h4></div>);
}
const divStyle = {
  backgroundColor: 'lightgrey',
  margin: '0px',
  padding: '5px', 
  textAlign: 'center',
};
function FragTest(props){
  return <ul><ColorList /></ul>
}
function ColorList(props){
  return <React.Fragment>
    <li>Red</li>
    <li>Yellow</li>
    <li>Blue</li>
  </React.Fragment>
}