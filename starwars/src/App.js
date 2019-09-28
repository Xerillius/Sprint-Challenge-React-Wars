import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PersonCard from './components/Person/PersonCard.js';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState([]);

  let pages;

  const getPages = async function() {
    let res = await axios.get(`https://swapi.co/api/people/?page=1`);
    pages = Math.ceil(res.data.count / 10);
  }

  getPages();

  const getPage = async function() {
    let res = await axios.get(`https://swapi.co/api/people/?page=${page}`);
    setPeople(res.data.results);
  }

  useEffect(() => {
    getPage();
  }, [page]);

  function changePage(val) {
    if(val === -1) { // Move back
      if(page === 1) {
        setPage(pages);
      } else {
        setPage(page - 1);
      }
    } else { // Move along
      if(page === pages) {
        setPage(1);
      } else {
        setPage(page + 1);
      }
    }
  }

  return (
    <Div className="App">
      <h1 className="Header">React Wars</h1>
      <Button onClick={() => changePage(-1)}>Prev</Button>
      <Button onClick={() => changePage(1)}>Next</Button>
      <PersonDiv>
        {people.map(person => {
          return (
            <PersonCard
              key={people.indexOf(person)}
              name={person.name}
              birth_year={person.birth_year}
              eye_color={person.eye_color}
            />
          );
        })}
      </PersonDiv>
    </Div>
  );
}

export default App;

const Div = styled.div`
  width: 90%;
  margin: auto;
`

const PersonDiv = styled.div`
  margin-top: 4%;
  display: flex
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Button = styled.button`
`