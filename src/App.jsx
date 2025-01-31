import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import fetchImages from './services/api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';


function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [clickImg, setClickImg] = useState(null);

  useEffect(() => {

    if (!searchQuery) return;

    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImages(searchQuery, page);
        setImages(prev => [...prev, ...data]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [searchQuery, page]);

  const searchNewQuery = (newQuery) => {
    setSearchQuery(newQuery);
    setPage(0);
    setImages([]);
  }

  const clickLoadMore = () => {
    setPage(prev => prev + 1)
  };

  
  const openModal = (img) => {
    setClickImg(img);
    setModalIsOpen(true)
  };
  const closeModal = () => {
    setClickImg(null);
    setModalIsOpen(false)
  };
  
  return (
    <>
      <SearchBar onSubmit={searchNewQuery} />
      <ImageGallery dataImages={images} imgClick={openModal} />
      {(loading) && <Loader />}
      {(error) && <ErrorMessage />}
      {(images.length > 0) && <LoadMoreBtn onClick={clickLoadMore} />}
      <ImageModal isOpen={modalIsOpen} onClose={closeModal} img={clickImg} />
    </>
  )
}

export default App;
