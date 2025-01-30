import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import fetchImages from './services/api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';

function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (!searchQuery) return;

    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchImages(searchQuery);
        setImages(prev => [...prev, ...data]);
      } catch (er) {
        console.log(er);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [searchQuery]);

  
  
  return (
    <>
      <SearchBar onSubmit={setSearchQuery} />
      <ImageGallery dataImages={images} />
      {(loading) && <Loader />}
    </>
  )
}

export default App;
