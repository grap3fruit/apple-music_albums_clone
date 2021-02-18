import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Album from './Album';

const StyledAlbumListBackground = styled.section`
  background-color: #1f1f1f;
  width: 100vw;
  min-height: 100vh;
`;

const StyledAlbumBox = styled.div`
  position: relative;
  background-color: #1f1f1f;
  padding: 0.5rem 2rem 0 2rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
`;

const StyledHeader = styled.header`
  display: flex;
  margin-top: 3.5rem;
  margin-bottom: 1rem;

  @media (max-width: 640px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const StyledHeaderTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const StyledHeaderFilterState = styled.p`
  font-size: 0.6rem;
  align-self: center;
  margin-left: 1rem;
`;

const StyledAlbums = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fit, 170px);
  grid-auto-flow: dense;
  grid-gap: 1.5rem;
  max-width: 100%;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const AlbumList = ({ filter, albums }) => (
  <StyledAlbumListBackground>
    <StyledAlbumBox>
      <StyledHeader>
        <StyledHeaderTitle>Albums</StyledHeaderTitle>
        <StyledHeaderFilterState>{filter}</StyledHeaderFilterState>
      </StyledHeader>
      <StyledAlbums>
        {albums &&
          albums.map((album, idx) => (
            <Album key={album.id.attributes['im:id']} idx={idx} album={album} />
          ))}
      </StyledAlbums>
    </StyledAlbumBox>
  </StyledAlbumListBackground>
);

AlbumList.propTypes = {
  filter: PropTypes.string.isRequired,
  albums: PropTypes.arrayOf(PropTypes.object),
};

AlbumList.defaultProps = {
  albums: [],
};

export default AlbumList;
