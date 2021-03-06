import React, {useState, useEffect} from 'react';
import axios from 'axios';
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
    <div className='container'>
      <Header />
      {/* <Search /> */}
      <Search getQuery={(q) => setQuery(q)} />
      {/* pass CharacterGrid as props */}
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
