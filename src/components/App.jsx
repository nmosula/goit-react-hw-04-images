import React, { Component } from 'react';
import { GlobalStyle } from "./GlobalStyles";
import Searchbar from './Searchbar';
import Layout from './Layout';
import ImageGallery from './ImageGallery';
import { fetchImages } from 'services/fetchImages';
import ButtonLoadMore from './ButtonLoadMore';
import Loader from './Loader';

export class App extends Component {
  state = {
    searchText: '',
    images: [],
    page: 1,
    totalImages: 0,
    status: 'idle',
  };

  getImages = async () => {
    const { searchText, page } = this.state;

    this.setState({ status: 'pending' });

    try {
      const { images, totalImages } = await fetchImages(searchText, page);

     this.setState(prevState => ({
        images: [...prevState.images, ...images],
        totalImages: totalImages,
        status: 'resolved',
      }));
    }
    catch (error) {
      console.error(error);
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchText, page } = this.state;

    if (prevState.searchText !== searchText || prevState.page !== page) {
      this.getImages();
    }
  }


  handleSubmitSearchImage = (searchValue) => {
    if (!searchValue) return;
    if (this.state.searchText === searchValue) return;


    this.setState({ 
      searchText: searchValue,
      images: [],
      page: 1,
      totalImages: 0,
      status: 'idle',
    });
  }

  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    
    return (
      <>
      <GlobalStyle />
      <Layout>
          <Searchbar onSearch={this.handleSubmitSearchImage} />

          {this.state.status === 'pending' && <Loader />}

          {this.state.images.length > 0 && (
            <>
              <ImageGallery images={this.state.images} />
              <ButtonLoadMore onClick={this.onLoadMore} />
            </>
          )}
      </Layout>
      </>
    );
  }
};
