import React, { Component } from 'react';
import { GlobalStyle } from "./GlobalStyles";
import Searchbar from './Searchbar';
import Layout from './Layout';

export class App extends Component {
  state = {
    images: [],
  };

  SearchImage = searchValue => {
    console.log(searchValue.searchQuery);
  }

  render() {
    return (
      <>
      <GlobalStyle />
      <Layout>
        <Searchbar onSave={this.SearchImage} />
      </Layout>
      </>
    );
  }
};
