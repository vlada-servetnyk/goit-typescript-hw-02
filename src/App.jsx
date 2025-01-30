import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import fetchImages from './services/api';
import ImageGallery from './components/ImageGallery/ImageGallery';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {

    const getData = async () => {
      try {
        const data = await fetchImages();
        setImages(prev => [...prev, ...data]);
      } catch (er) {
        console.log(er);
      }
    };
    getData();
  }, [])
  
  return (
    <>
      <SearchBar />
      <ImageGallery dataImages={images} />
    </>
  )
}

export default App
