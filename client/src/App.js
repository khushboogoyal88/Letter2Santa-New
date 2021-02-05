import React, { Fragment, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from "./components/AppNavbar"
import LetterForm from "./components/LetterForm"
import LetterGrid from "./components/LettersGrid"
import axios from "axios";
import uuid from 'uuid';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

const App = () => {
  const [letters, setLetters] = useState([
    {
      _id: 1,
      fullname: "Khushboo",
      age: "5",
      pic: "http://source.unsplash.com/GagC07wVvck/1600x900",
      isNice: "yes",
      present: "toy",
      message: "Hello Santa"
    },
    {
      _id: 2,
      fullname: "Deepesh",
      age: "5",
      pic: "http://source.unsplash.com/GagC07wVvck/1600x900",
      isNice: "yes",
      present: "toy",
      message: "Hello Santa"
    },
    {
      _id: 3,
      fullname: "Mayank",
      age: "5",
      pic: "http://source.unsplash.com/GagC07wVvck/1600x900",
      isNice: "yes",
      present: "toy",
      message: "Hello Santa"
    },
    
    
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  
  const [letter, setLetter] = useState({
    id: "",
    fullname: "",
    age: "",
    pic: "",
    isNice: "",
    present: "",
    message: "",
  });
  
  const changeHandler = (e) => {
    setLetter({
      ...letter,
      [e.target.name]: e.target.value,
    });
  };
  
  
  const submitHandler = (e) => {
    e.preventDefault()
    if (window.confirm("Should we send your letter to Santa?")) {
      const _id = Math.floor(Math.random() * 10000) + 1;
      const newLetter = { _id, ...letter };
      setLetters([...letters, newLetter])
    }
  };
  
  const removeLetter = (_id) => {
    console.log(_id);
    setLetters(letters.filter(letter=>letter._id !==_id))
    // axios.delete(`api/v1/letters/${_id}`).then((resp) => {
    //   const data = resp.data;
    //   setLetters(data);
    // });
    // window.location.reload();
  };
  return (
    <Router>
    <AppNavbar/>
    <div className="wrapper container">
    <Switch>
    <Route exact path="/">
    <Fragment>
    <LetterForm change={changeHandler}
    submit={submitHandler}/>
    </Fragment>
    </Route>
    <Route path="/letters">
    <LetterGrid isLoading={isLoading}
    letters={letters}
    removeLetter={removeLetter} />
    </Route>
    <Route path="/:user">
    <h3>User</h3>
    </Route>
    <Route>
    <h3>No Match</h3>
    </Route>
    </Switch>
    </div>
    </Router>
    )
  }
  
  export default App;
  
  