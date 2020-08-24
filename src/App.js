import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Saul from './components/pages/Saul';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState([true])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      // axios returns a promise
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      // console.log(result.data)

      // set data to state
      setItems(result.data)
      // items set and loaded >> turn to false
      setIsLoading(false)
    }

    fetchItems();
  }, [query])

  return (
    <Router>
      <div className='container'>
        <Route exact path="/" render={ props => (
          <React.Fragment>
            <Header />
          </React.Fragment>
        )} />
        <Route path="/saul" component={Saul} />
        {/* <Search /> */}
        <Search getQuery={(q) => setQuery(q)} />
        {/* pass CharacterGrid as props */}
        <CharacterGrid isLoading={isLoading} items={items} />
      </div>
    </Router> 
  );
}

export default App;
