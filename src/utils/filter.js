export const FILTER_STATE = {
  RATE: {
    ASC: 'RATE ASCENDING ORDER',
    DES: 'RATE DESCENDING ORDER',
  },
  NAME: {
    ASC: 'NAME ASCENDING ORDER',
    DES: 'NAME DESCENDING ORDER',
  },
  DATE: {
    ASC: 'DATE ASCENDING ORDER',
    DES: 'DATE DESCENDING ORDER',
  },
  SEARCH: {
    FINISH: 'SEARCH FINISHED',
  },
};

const compare = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
};

const getArtistUpperName = (album) => album['im:artist'].label.toUpperCase();

export const sortNameASC = (a, b) => compare(getArtistUpperName(a), getArtistUpperName(b));
export const sortNameDES = (b, a) => compare(getArtistUpperName(a), getArtistUpperName(b));

const getDate = (album) => new Date(album['im:releaseDate'].label);

export const sortDateASC = (a, b) => compare(getDate(a), getDate(b));
export const sortDateDES = (b, a) => compare(getDate(a), getDate(b));
