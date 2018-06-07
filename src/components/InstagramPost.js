import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import '../styles/components/instagram.css';

export default ({ imageUrl, caption, link, likeCount }) => (
  <div className="col-lg-3 col-md-4 instagram__image-block">
    <div className="instagram__image-container">
      <div className="instagram__image-crop">
        <img
          src={imageUrl}
          alt={caption}
        />
        <a href={link} target="_new">
          <div className="instagram__image-overlay">
            <FontAwesomeIcon
              className="instagram__heart-icon"
              icon={faHeart}
              size="lg"
            />
            <span className="instagram__like-count">{likeCount}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
);