import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledAlbum = styled.li`
  @media (max-width: 1024px) {
    border-style: solid none solid none;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: #2b2b2b;
    &:hover {
      background-color: #373737;
    }
  }

  @media (max-width: 640px) {
    padding: 0.1rem;
  }
`;

const StyledAlbumLink = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.95);
  cursor: pointer;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

const StyledAlbumCoverBox = styled.div`
  position: relative;
`;

const StyledAlbumCover = styled.img`
  display: block;
  border-radius: 4px;
`;

const StyledAlbumOrder = styled.p`
  font-size: 0.75rem;
  margin: auto 0 auto 1.2rem;
  min-width: 1rem;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;
const StyledAlbumInfo = styled.div`
  margin-top: 0.3rem;
  font-size: 0.75rem;

  @media (max-width: 1024px) {
    margin: auto 0 auto 1.2rem;
    font-size: 0.8rem;
  }
`;
const StyledAlbumTitle = styled.p`
  font-weight: bold;
  color: rgba(255, 255, 255, 0.95);
`;

const StyledArtist = styled.p`
  color: rgba(235, 235, 245, 0.6);
`;

const StyledHover = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 0.4;
    z-index: 1;
    background-color: black;
    transition: 0.1s ease-in;
  }
`;

const Album = ({ idx, album }) => {
  const cover = album['im:image'].map((el) => el.label);
  const title = album['im:name'].label;
  const artist = album['im:artist'].label;
  const albumUrl = album.link.attributes.href;
  const placeHolderCover = [
    'http://ipsumimage.appspot.com/55',
    'http://ipsumimage.appspot.com/60',
    'http://ipsumimage.appspot.com/170',
  ];

  const srcsetStr = `${cover[0]} 55w, ${cover[1]} 60w, ${cover[2]} 170w`;
  const sizesStr = `(max-width: 640px) 55px, (max-width: 1024px) 60px, 170px`;
  const placeHolderSrcsetStr = `${placeHolderCover[0]} 55w, ${placeHolderCover[1]} 60w, ${placeHolderCover[2]} 170w`;
  const LAZY_LOADING_NUM = 25;

  return (
    <StyledAlbum>
      <StyledAlbumLink href={albumUrl}>
        <StyledAlbumCoverBox>
          {idx < LAZY_LOADING_NUM ? (
            <StyledAlbumCover
              id={idx}
              className="lazy"
              srcSet={srcsetStr}
              data-src={srcsetStr}
              sizes={sizesStr}
              src={cover[2]}
              alt="album-cover"
            />
          ) : (
            <StyledAlbumCover
              id={idx}
              className="lazy"
              srcSet={placeHolderSrcsetStr}
              data-src={srcsetStr}
              sizes={sizesStr}
              src={placeHolderCover}
              alt="album-cover"
            />
          )}
          <StyledHover />
        </StyledAlbumCoverBox>
        <StyledAlbumOrder>{idx + 1}</StyledAlbumOrder>
        <StyledAlbumInfo>
          <StyledAlbumTitle>{title}</StyledAlbumTitle>
          <StyledArtist>{artist}</StyledArtist>
        </StyledAlbumInfo>
      </StyledAlbumLink>
    </StyledAlbum>
  );
};

Album.propTypes = {
  idx: PropTypes.number.isRequired,
  album: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Album;
