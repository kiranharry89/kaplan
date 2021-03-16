import './App.css';
import Menu from './components/Menu/Menu'
import Header from './components/Header/Header'
import Books from './components/Books/Books'
import image from './assets/search.png'
import React, { useEffect, useState } from 'react';
import {DebounceInput} from 'react-debounce-input';

function App() {
  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([])
  let [title, setTitle] = useState("")

  useEffect(() => {
    fetchBooks(title);
  }, [title])
  const fetchBooks = async (title) => {
    let query = `kaplan test prep+intitle:${title}`
    let uri = `https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep&startIndex=2&maxResults=10&orderBy=newest`
    if (title) {
      uri = `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=2&maxResults=10&orderBy=newest`;
    } else {
      uri = `https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep&startIndex=2&maxResults=10&orderBy=newest`
    }
    setLoading(true)
    await fetch(uri)
    .then(res => res.json())
    .then(response => {
      setLoading(false)
      if (response.items && response.items.length > 0) {
        setBooks(response.items)
      }
    })
    .catch(error => {
      console.log(error)
      setBooks([])
    })
  }
  const handleOnChange = (e) => {
    console.log(e.target.value)
    setTitle(e.target.value)
  }
  return (
    <div className="App">
      <Menu />
      <div className="main">
        <Header />
        <div className="content">
          <div className="content-header">
            <h2>Books</h2>
            <button className="btn btn-create">Create New Book</button>
          </div>
          <div className="search">
            <img src={image} alt="search" />
            <DebounceInput
              minLength={1}
              debounceTimeout={300}
              onChange={handleOnChange} 
              placeholder="Search"
              type="text" />
          </div>
          <Books loading={loading} books={books} />
        </div>
      </div>
    </div>
  );
}

export default App;
