import React, { Component } from 'react';
import NewsFeed from './home_page/news_feed/news_feed_container';

export default class AppBodyContainer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NewsFeed />
      </div>
    );
  }
}
