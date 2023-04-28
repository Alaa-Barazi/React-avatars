import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import All from './Components/Generate/Generate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [nameFilter, setNameFilter] = useState('');
  const [posts, setPosts] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await axios.get("https://randomuser.me/api/?results=10");
        setPosts(data.data.results);
        setOriginalData(data.data.results);

      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);
  // useEffect(() => {
  //   <All posts={posts} />
  // }, [filterBy, nameFilter]);
  // const mapWithFilter = (nameFilter) => {
  //   setNameFilter(nameFilter);
  //   const filterBy = posts.filter((person) =>
  //     (person.name.first + " " + person.name.last)
  //       .toLowerCase()
  //       .includes(nameFilter.toLowerCase())
  //   );
  //   setPosts(filterBy);
  //   console.log(filterBy);
  // };

  useEffect(() => {
    if (nameFilter === '') {
      setPosts(originalData);
      return;
    }
    const filterBy = originalData.filter((person) =>
      (person.name.first + ' ' + person.name.last)
        .toLowerCase()
        .includes(nameFilter.toLowerCase())
    );
    setPosts(filterBy);
  }, [nameFilter, originalData]);


  return (
    <>
      <div>
        <input
          type='text'
          value={nameFilter}
          placeholder='Search'
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <hr />
      <h3>{nameFilter}</h3>
      <hr/>
      <All posts={posts} />
    </>

  )
}

export default App


