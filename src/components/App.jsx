import { useState, useEffect } from 'react';
import { GlobalStyle } from "./GlobalStyles";
import Searchbar from './Searchbar';
import Layout from './Layout';
import ImageGallery from './ImageGallery';
import { fetchImages } from 'services/fetchImages';
import ButtonLoadMore from './ButtonLoadMore';
import Loader from './Loader';
import Notiflix from 'notiflix';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState('[]');
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [status, setStatus] = useState('idle');

  useEffect(() => {

    if (!query) return;

    const getImages = async () => {
      setStatus('pending');
      try {
        const { images, totalImages } = await fetchImages(query, page);
        
        Notiflix.Notify.info(`Вітаю! Ми знайшли ${images.length} з ${totalImages} фото`);

        setImages(prevState => [...prevState, ...images]);
        setStatus('resolved');
        setTotalImages(totalImages);
      }
      catch (error) {
        console.error(error);
      }   
    }

    getImages();

  }, [query, page]);
  


  const handleSubmitSearchImage = (searchValue) => {
    if (!searchValue) {
      Notiflix.Notify.warning(`Будь ласка, введіть пошуковий запит`);
      return;
    }

    if (query === searchValue) {
      Notiflix.Notify.warning(`Будь ласка, введіть інший пошуковий запит`);
      return;
    }

    setQuery(searchValue);
    setImages([]);
    setPage(1);
    setTotalImages(0);
    setStatus('idle');
  }

  const onLoadMore = () => {
    setPage(page + 1);
  };

   
  return (
    <>
      <GlobalStyle />
      <Layout>
          <Searchbar onSearch={handleSubmitSearchImage} />

          {status === 'pending' && <Loader />}

          {
            (status === 'resolved' || (status === 'pending' && page > 1)) && 
              <ImageGallery images={images} />
          }

          {
            ((totalImages !== images.length && status === 'resolved') || (status === 'pending' && page > 1)) &&
              <ButtonLoadMore onClick={onLoadMore} />
          }
      </Layout>
    </>
  );

};

export default App;