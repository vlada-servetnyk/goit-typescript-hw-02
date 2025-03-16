import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import fetchImages from './services/api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
    };
  alt_description: string;
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [clickImg, setClickImg] = useState<Image | null>(null);

  useEffect(() => {

    if (!searchQuery) return;

    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        const data: Image[] = await fetchImages({ query: searchQuery, page });
        setImages((prev) => [...prev, ...data]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [searchQuery, page]);

  const searchNewQuery = (newQuery: string) => {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
  }

  const clickLoadMore = () => {
    setPage(prev => prev + 1)
  };

  
  const openModal = (img: Image) => {
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
      {(images.length > 0 && images.length >= 20) && <LoadMoreBtn onClick={clickLoadMore} />}
      <ImageModal isOpen={modalIsOpen} onClose={closeModal} img={clickImg} />
    </>
  )
}

export default App;
