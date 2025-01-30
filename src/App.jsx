import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import fetchImages from './services/api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { InfinitySpin } from 'react-loader-spinner';

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
      {(loading) && <InfinitySpin
        visible={true}
        width="200"
        color="#4800fd"
        ariaLabel="infinity-spin-loading"
      />}
    </>
  )
}

export default App;
