import React, { Fragment, useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from "./components/AppNavbar"
import LetterForm from "./components/LetterForm"
import LetterGrid from "./components/LettersGrid"
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

const App = () => {
  const [letters, setLetters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(true);
  
  const [letter, setLetter] = useState({
    fullname: "",
    age: "",
    pic: "",
    isNice: "",
    present: "",
    message: "",
  });
  
  useEffect(() => {
    const fetchItems = () => {
      axios.get(`api/v1/letters/`)
      .then((res) => {
        const data = res.data.data;
        setLetters(data);
      })
      .catch((error) => {
        console.log(error);
      });
      
      setIsLoading(false);
    };
    
    fetchItems();
  }, []);
  
  
  const changeHandler = (e) => {
    setLetter({
      ...letter,
      [e.target.name]: e.target.value,
    });
  };
  
  
  const submitHandler = (e) => {
    e.preventDefault()
    if (window.confirm("Should we send your letter to Santa?")) {
      // const _id = Math.floor(Math.random() * 10000) + 1;
      // const newLetter = { _id, ...letter };
      // setLetters([...letters, newLetter])
      axios.post("api/v1/letters/", letter);
      window.location.reload();
    }
  };
  
  const removeLetter = (_id) => {
    // setLetters(letters.filter(letter=>letter._id !==_id))
    axios.delete(`api/v1/letters/${_id}`).then((resp) => {
      const data = resp.data;
      setLetters(data);
    });
    window.location.reload();
  };
  return (
    <Router>
    <AppNavbar/>
    <div className="wrapper container">
    <Switch>
    <Route exact path="/">
    <Fragment>
    <LetterForm change={changeHandler}
    submit={submitHandler} modal={modal}/>
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
  
  