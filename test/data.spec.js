import { sortData} from '../src/data.js';


describe('sortData es una funcion', () => {
  it('is a function', () => {

    expect(typeof sortData).toBe('function');
});

  it('verificar que ordene de la a-z', () => {
    const dataPrueba = [{name:'Rick'},{name:'Morty'},{name:'Dan'}];
    const result = sortData(dataPrueba, 'A-Z');
    const dataOrdenada = [{name:'Dan'},{name:'Morty'},{name:'Rick'}]; 
    expect(result).toEqual(dataOrdenada);
  })
});

/*
describe('filterStatus', () => {
  it('is a function', () => {
    expect(typeof filterStatus).toBe('function');
  });

  it('returns `result`', () => {
    expect(filterStatus()).toBe('filterStatus');
  });
});
*/
