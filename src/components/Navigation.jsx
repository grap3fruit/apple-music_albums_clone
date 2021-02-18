import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledNav = styled.nav`
  background-color: #252526;
  min-width: 18rem;
  padding: 1rem 2rem 0 2rem;
  border-style: none solid none none;
  border-right-width: 1px;
  border-color: #3f3f3f;

  @media (max-width: 640px) {
    display: block;
  }
`;

const StyledNavTitle = styled.header`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  @media (max-width: 640px) {
    text-align: center;
  }
`;

const StyledFilter = styled.section`
  font-size: 1rem;
`;

const StyledSearchBar = styled.input`
  width: 100%;
  background-color: #1f1f1f;
  border-radius: 4px;
  border-color: #131313;
  border-width: 1px;
  border-style: solid;

  height: 2rem;
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  color: rgba(255, 255, 255, 0.95);

  &::placeholder {
    color: #a7a7a7;
  }
`;

const StyledFilterOption = styled.div`
  display: block;

  @media (max-width: 640px) {
    display: flex;
  }
`;

const StyledButton = styled.button`
  border-width: 1px;
  border-style: solid;
  border-color: #131313;

  cursor: pointer;
  background-color: #1f1f1f;
  text-align: left;
  width: 100%;
  min-height: 1.7rem;
  color: #eeeeee;
  margin-bottom: 1rem;
  padding-left: 1rem;
  font-size: 0.8rem;

  @media (max-width: 640px) {
    margin-left: 1rem;
    padding: 0;
    font-size: 0.75rem;
    text-align: center;
    &.dateBtn {
      margin-left: 0;
    }
  }
`;

const Navigation = ({
  searchValueOnChangeHandler,
  dateSortOnClickHandler,
  nameSortOnClickHandler,
  rateSortOnClickHandler,
}) => {
  const navTitleOnclickHandler = () => {
    window.location.reload();
  };

  return (
    <StyledNav>
      <StyledNavTitle onClick={navTitleOnclickHandler}>Apple Music Clone</StyledNavTitle>
      <StyledFilter>
        <label htmlFor="search">
          <StyledSearchBar
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            onChange={searchValueOnChangeHandler}
          />
        </label>
        <StyledFilterOption>
          <StyledButton type="button" className="dateBtn" onClick={dateSortOnClickHandler}>
            Released Date
          </StyledButton>
          <StyledButton type="button" className="nameBtn" onClick={nameSortOnClickHandler}>
            Artist
          </StyledButton>
          <StyledButton type="button" className="rateBtn" onClick={rateSortOnClickHandler}>
            Top Rank
          </StyledButton>
        </StyledFilterOption>
      </StyledFilter>
    </StyledNav>
  );
};

Navigation.propTypes = {
  searchValueOnChangeHandler: PropTypes.func.isRequired,
  dateSortOnClickHandler: PropTypes.func.isRequired,
  nameSortOnClickHandler: PropTypes.func.isRequired,
  rateSortOnClickHandler: PropTypes.func.isRequired,
};

export default Navigation;
