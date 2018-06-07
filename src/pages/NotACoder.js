import React, { Component } from 'react';
import axios from 'axios';
import Container from '../components/Container';
import InstagramPost from '../components/InstagramPost';

let initialState = {
  instagramPosts: [],
  loading: true,
  loaded: false
}

export default class NotACoder extends Component {
  state = initialState

  componentWillMount() {
    if (!this.state.loaded) {
      this.handleFetchInstagram();
    }
  }

  componentWillUnmount() {
    initialState = this.state;
  }

  handleFetchInstagram() {
    axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}&count=8`)
      .then((res) => {
        this.setState(() => ({
          instagramPosts: res.data.data,
          loading: false,
          loaded: true
        }));
      });
  }

  render() {
    const { instagramPosts, loading } = this.state;
    const posts = instagramPosts.map((post) => (
      <InstagramPost
        key={post.id}
        imageUrl={post.images.low_resolution.url}
        caption={post.caption.text}
        link={post.link}
        likeCount={post.likes.count}
      />
    ));

    return (
      <div>
        {loading ? (
          <p className="loading">...</p>
        ) : (
          <Container col={12} transparent={true}>
            <div className="row">
              {posts}
            </div>
          </Container>
        )}
      </div>
    )
  }
}