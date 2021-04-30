import { sortData, filterStatus, filterGender, filterSpecies } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';
 const arr = data.results;
 
  const section = document.querySelector('section');
  
  for (let i = 0; i<arr.length; i++ ){
   //console.log(arr[i]); 
    const dataPersonaje = arr[i];
   // console.log (dataPersonaje.name)
    //const pintarNombre = dataPersonaje.name
    const personaje = document.createElement('article');
    const nombre = document.createElement ('name');
    const estado = document.createElement('p');
    const especie = document.createElement('p');
    const genero = document.createElement('p');
    const imagen= document.createElement('img')

    nombre.textContent = arr[i].name;
    estado.textContent = 'Status: ' + arr[i].status;
    especie.textContent = 'Species: ' + arr[i].species;
    genero.textContent = 'Gender: ' + arr[i].gender;
    imagen.src = arr[i].image;
      
    personaje.appendChild(nombre);
    personaje.appendChild(estado);
    personaje.appendChild(especie);
    personaje.appendChild(genero);
    personaje.appendChild(imagen);
   
     section.appendChild(personaje);
  }



  const mostrarOrdenar = document.querySelector('.mostrarOrdenar');

  mostrarOrdenar.addEventListener('change', (event) => {
      const resultado= document.querySelector('.resultado');
      resultado.textContent = `You order by ${event.target.value}`;
  
    console.log(event.target.value)
  });
/*
  const mostrarfiltrar = document.querySelector('.mostrarfiltrar');

  mostrarfiltrar.addEventListener('change', (event) => {
      const resultado= document.querySelector('.resultadoFiltrar');
      resultado.textContent = `You order by ${event.target.value}`;
  
    console.log(event.target.value)
  }); */
  
console.log("Ordenar a-z", sortData(arr, "a-z"))
 //console.log("Ordenar z-a", sortData(arr, "z-a"))
  
//console.log("filtrar por estado", filterStatus(arr, "Alive"));
//console.log("filtrar por genero", filterGender(arr, "Female"));
//console.log("filtrar por especie", filterSpecies(arr, "Human"));

//  const estado1 = arr.filter(d => d.status == 'unknown');
//  console.log('status',estado1);

//  const estado2 = arr.filter(d => d.status == 'Alive');
//  console.log('status',estado2);

//  const estado3 = arr.filter(d => d.status == 'Dead');
//  console.log('status',estado3);

//const genero1 = arr.filter(d=> d.gender === "Male");
//console.log('gender',genero1);
 
//const genero2 = arr.filter(d=> d.gender === "Female");
//console.log('gender',genero2);

  


 /*
  arr.sort(function sortBy(e1,e2){
  if (e1.name < e2.name){
    return -1;
  }
  if (e1.name > e2.name){
    return 1;
  }
  return 0;
});console.log(arr)
console.log(arr.reverse())
*/
