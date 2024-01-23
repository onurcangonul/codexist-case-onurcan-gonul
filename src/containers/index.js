import { useEffect, useState } from 'react'
// Components
import SearchBar from './SearchBar'
import Product from './ProductItem'
// Thirtparty Import
import axios from 'axios'
const Main = () => {
  const [search, setSearch] = useState("stephen king")
  const [bookData, setBookData] = useState([])
  const apiKey = "AIzaSyD81KnqB__PjnY5RRfXxCJqBgOgPWAL9qE"

  const searchBook = (e) => {
    // After the write press enter
    if (e.key === "Enter") {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`)
        .then(res => setBookData(res.data.items))
        .catch(err => console.log(err))
    }
  }
  useEffect(() => {
    // Get default data from api "example stephen king"
    const fetchInitialData = async () => {
      try {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}&maxResults=30`);
        setBookData(res.data.items);
      } catch (err) {
        console.log(err);
      }
    };

    fetchInitialData();
  }, []);

  return (
      <>
      <SearchBar setSearch={setSearch} searchBook={searchBook} />
      <Product bookData={bookData} />
      </>
  )
}

export default Main