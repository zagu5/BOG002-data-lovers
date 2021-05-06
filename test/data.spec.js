import { sortData, filterStatus, filterGender, filterSpecies} from '../src/data.js';


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

  it('verificar que ordene de la z-a', () => {
    const dataPrueba = [{name:'Rick'},{name:'Attila'},{name:'Morty'},{name:'Little'}];
    const result = sortData(dataPrueba, 'Z-A');
    const dataOrdenada = [{name:'Rick'},{name:'Morty'},{name:'Little'},{name:'Attila'}]; 
    expect(result).toEqual(dataOrdenada);
  })
});


describe('filterStatus es una funcion', () => {
  it('is a function', () => {
    expect(typeof filterStatus).toBe('function');
  });

  it('verificar que filtre por estado', () => {
    const dataPrueba = [{name: 'Rick Sanchez', status:'Alive'},{name: 'Alien Rick', status:'unknown'},{name: 'Attila Starwar', status:'Dead'},{name: 'Morty Smith', status:'Alive'}];
    const resultFilterStatus = filterStatus(dataPrueba, 'Alive');
    const dataFiltrada= [{name: 'Rick Sanchez', status:'Alive'},{name: 'Morty Smith', status:'Alive'}]; 
    expect(resultFilterStatus).toEqual(dataFiltrada);
  })
});

describe('filterGender es una funcion', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('verificar que filtre por genero', () => {
    const dataPrueba = [{name:'Rick Sanchez', status:'Alive', gender:'Male'},{name:'Summer Smith', status:'Alive', gender:'Female'},{name:'Alien Googah', status:'unknown', gender:'unknown'},{name:'Annie', status:'Alive', gender:'Female'}];
    const resultFilterGender = filterGender(dataPrueba, 'Female');
    const dataFiltrada= [{name:'Summer Smith', status:'Alive', gender:'Female'},{name:'Annie', status:'Alive', gender:'Female'}]; 
    expect(resultFilterGender).toEqual(dataFiltrada);
  })
});

describe('filterSpecies es una funcion', () => {
  it('is a function', () => {
    expect(typeof filterSpecies).toBe('function');
  });

  it('verificar que filtre por especie', () => {
    const dataPrueba = [{name:'Rick Sanchez', status:'Alive', gender:'Male', species:'Human'},{name:'Summer Smith', status:'Alive', gender:'Female', species:'Human'},{name:'Alien Googah', status:'unknown', gender:'unknown', species:'Alien'},{name:'Armagheadon', status:'Alive', gender:'Male', species:'Alien'}];
    const resultFilterSpecies = filterSpecies(dataPrueba, 'Alien');
    const dataFiltrada= [{name:'Alien Googah', status:'unknown', gender:'unknown', species:'Alien'},{name:'Armagheadon', status:'Alive', gender:'Male', species:'Alien'}]; 
    expect(resultFilterSpecies).toEqual(dataFiltrada);
  })
});