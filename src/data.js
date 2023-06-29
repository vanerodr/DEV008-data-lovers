import ghibliData from './data/ghibli/ghibli.js';

export const getFilms = () => {
  return ghibliData.films;
};

export const sortDataYear = (data, isAscendent) => {
  const dataYear = data.sort((a, b) => {
    if (isAscendent) {
      return a.release_date - b.release_date;
    } else {
      return b.release_date - a.release_date;
    }
  });
  return dataYear;
};

export const sortDataTitle = (data, isAscendent) => {
  const dataTitle = data.sort((a, b) => {
    if (isAscendent) {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });
  return dataTitle;
};

// estas funciones son de ejemplo
/*
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/
