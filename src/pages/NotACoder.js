import React, { Component } from 'react';
import axios from 'axios';

import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import InstagramPost from '../components/InstagramPost';

let initialState = {
  instagramPosts: [],
  loading: true,
  loaded: false,
  error: null,
};

export default class NotACoder extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  componentDidMount() {
    const { loaded } = this.state;

    if (!loaded) {
      this.fetchInstagramPosts();
    }
  }

  componentWillUnmount() {
    initialState = {
      ...this.state,
      error: null,
    };
  }

  fetchInstagramPosts() {
    axios
      .get(
        `https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}&count=8`,
      )
      .then(res => {
        this.setState(() => ({
          instagramPosts: res.data.data,
          loading: false,
          loaded: true,
        }));
      })
      .catch(({ message }) => {
        // eslint-disable-next-line no-console
        console.error('Instragram post fetch failed.', message);

        this.setState(state => ({
          ...state,
          error: message,
        }));
      });
  }

  render() {
    const { instagramPosts, loading, error } = this.state;
    const posts = instagramPosts.map(post => (
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
        <PageTitle title="Not a Coder" />
        {loading || error ? (
          <p className="loading">
            {error ? `Something went wrong :'(` : '...'}
          </p>
        ) : (
          <Container col={12} transparent>
            <div className="row justify-content-center">
              <div className="col-md-7">
                <p className="text-black">
                  I also want to keep myself busy with other things. I&apos;ve
                  been filling my{' '}
                  <a
                    href="https://instagr.am/siong.esteban"
                    rel="noopener noreferrer"
                    target="_new"
                  >
                    Instagram
                  </a>{' '}
                  with different photos of different places, or just some things
                  that suddenly take my attention.
                </p>
                <p className="text-black">
                  Here are my 8 most recent posts that I fetched from my
                  account.
                </p>
              </div>
            </div>
            <div className="row">{posts}</div>
            <div className="row justify-content-center">
              <div className="col-md-7">
                <p className="not-a-coder__misc-text">
                  And hey, I make{' '}
                  <a
                    href="https://vimeo.com/scaesfilms"
                    rel="noopener noreferrer"
                    target="_new"
                  >
                    films
                  </a>{' '}
                  too!
                </p>
              </div>
            </div>
          </Container>
        )}
      </div>
    );
  }
}
