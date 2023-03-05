import React, { Component } from 'react';
import { GlobalStyle } from "./GlobalStyles";
import Searchbar from './Searchbar';
import Layout from './Layout';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    searchText: '',
    images: [],
    page: 1,
  };

  handleSubmitSearchImage = (searchValue) => {
    this.setState({searchText: searchValue});
  }

  render() {
    
    return (
      <>
      <GlobalStyle />
      <Layout>
          <Searchbar onSearch={this.handleSubmitSearchImage} />
          <ImageGallery searchText={this.state.searchText} page={this.state.page} />
      </Layout>
      </>
    );
  }
};
