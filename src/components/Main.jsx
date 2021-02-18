import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Navigation from './Navigation';
import AlbumList from './AlbumList';
import { FILTER_STATE, sortNameASC, sortNameDES, sortDateASC, sortDateDES } from '../utils/filter';

const StyledMain = styled.main`
  display: flex;
  color: rgba(255, 255, 255, 0.95);

  @media (max-width: 640px) {
    display: block;
  }
`;

const io = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // eslint-disable-next-line no-param-reassign
      entry.target.srcset = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
});

const Main = () => {
  const [originOrderAlbums, setOriginOrderAlbums] = useState();
  const [albums, setAlbums] = useState();
  const [filter, setFilter] = useState(FILTER_STATE.RATE.ASC);

  const getAlbums = async () => {
    const result = await fetch(
      'https://itunes.apple.com/us/rss/topalbums/limit=100/json',
    ).then((response) => response.json());
    const topAlbums = result.feed.entry;
    setOriginOrderAlbums(topAlbums);
    setAlbums(topAlbums);
  };

  useEffect(() => {
    getAlbums();
  }, []);

  useEffect(() => {
    const lazyImgElements = document.querySelectorAll('.lazy');
    lazyImgElements.forEach((el) => {
      io.observe(el);
    });
  });

  const searchValueOnChangeHandler = (e) => {
    const textValue = e.target.value;
    const regex = new RegExp(textValue.toLowerCase());
    setAlbums(
      originOrderAlbums.filter(
        (album) =>
          regex.test(album['im:name'].label.toLowerCase()) ||
          regex.test(album['im:artist'].label.toLowerCase()),
      ),
    );

    if (textValue.length === 0) {
      setFilter(FILTER_STATE.RATE.ASC);
      return;
    }

    setFilter(FILTER_STATE.SEARCH.FINISH);
  };

  const dateSortOnClickHandler = () => {
    if (filter === FILTER_STATE.DATE.DES) {
      setAlbums([...originOrderAlbums].sort(sortDateASC));
      setFilter(FILTER_STATE.DATE.ASC);
      return;
    }
    setAlbums([...originOrderAlbums].sort(sortDateDES));
    setFilter(FILTER_STATE.DATE.DES);
  };

  const nameSortOnClickHandler = () => {
    if (filter === FILTER_STATE.NAME.ASC) {
      setAlbums([...originOrderAlbums].sort(sortNameDES));
      setFilter(FILTER_STATE.NAME.DES);
      return;
    }

    setAlbums([...originOrderAlbums].sort(sortNameASC));
    setFilter(FILTER_STATE.NAME.ASC);
  };

  const rateSortOnClickHandler = () => {
    if (filter === FILTER_STATE.RATE.ASC) {
      setAlbums([...originOrderAlbums].reverse());
      setFilter(FILTER_STATE.RATE.DES);
      return;
    }

    setAlbums(originOrderAlbums);
    setFilter(FILTER_STATE.RATE.ASC);
  };

  return (
    <StyledMain>
      <Navigation
        searchValueOnChangeHandler={searchValueOnChangeHandler}
        dateSortOnClickHandler={dateSortOnClickHandler}
        nameSortOnClickHandler={nameSortOnClickHandler}
        rateSortOnClickHandler={rateSortOnClickHandler}
      />
      <AlbumList filter={filter} albums={albums} />
    </StyledMain>
  );
};

export default Main;
