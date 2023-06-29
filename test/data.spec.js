import {sortDataYear, sortDataTitle } from '../src/data.js';
describe('sortDataYear', () => {
  const data = [
    { title: 'Film A', release_date: '2022' },
    { title: 'Film B', release_date: '2020' },
    { title: 'Film C', release_date: '2021' }
  ];

  it('should sort data by year in ascending order', () => {
    const sortedData = sortDataYear(data, true);

    expect(sortedData[0].title).toBe('Film B');
    expect(sortedData[1].title).toBe('Film C');
    expect(sortedData[2].title).toBe('Film A');
  });

  it('should sort data by year in descending order', () => {
    const sortedData = sortDataYear(data, false);

    expect(sortedData[0].title).toBe('Film A');
    expect(sortedData[1].title).toBe('Film C');
    expect(sortedData[2].title).toBe('Film B');
  });
});
describe('sortDataTitle', () => {
  it('should sort data by title in ascending order', () => {
    const data = [
      { title: 'Film B', release_date: '2022-01-01' },
      { title: 'Film A', release_date: '2021-12-31' },
      { title: 'Film C', release_date: '2023-03-15' },
    ];

    const sortedData = sortDataTitle(data, true);

    expect(sortedData[0].title).toBe('Film A');
    expect(sortedData[1].title).toBe('Film B');
    expect(sortedData[2].title).toBe('Film C');
  });

  it('should sort data by title in descending order', () => {
    const data = [
      { title: 'Film B', release_date: '2022-01-01' },
      { title: 'Film A', release_date: '2021-12-31' },
      { title: 'Film C', release_date: '2023-03-15' },
    ];

    const sortedData = sortDataTitle(data, false);

    expect(sortedData[0].title).toBe('Film C');
    expect(sortedData[1].title).toBe('Film B');
    expect(sortedData[2].title).toBe('Film A');
  });
});
/*import { getFilms } from '../src/data.js';

import {
  sortFilms,
} from '../src/main.js';

describe('sortFilms', () => {
  let films;

  beforeEach(() => {
    films = getFilms();
  });

  it('should sort films in ascending order by title', () => {
    // Simular datos de prueba
    const sortOrder = 'asc';

    // Ejecutar la función a probar
    sortFilms(sortOrder);

    // Verificar el resultado esperado
    expect(films[0].title).toBe('First Film'); // Asegurarse de que la primera película tenga el título correcto
    expect(films[1].title).toBe('Second Film'); // Asegurarse de que la segunda película tenga el título correcto
    // ...
  });

  
});

import { example, anotherExample } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/