import { sortData, filterStatus, filterGender, filterSpecies } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

  const section = document.querySelector('section');
  const arrData = data.results;   
  
  function showCharacters(){
    for (let i = 0; i<arrData.length; i++ ){
    //console.log(arr[i]); 
    const dataCharacter = arrData[i];
    // console.log (dataCharacter.name)
    //const showName = dataCharacter.name
    const character = document.createElement('article');
    const nameCharacter = document.createElement ('name');
    const statusCharacter = document.createElement('p');
    const speciesCharacter = document.createElement('p');
    const genderCharacter = document.createElement('p');
    const imageCharacter= document.createElement('img')

    nameCharacter.textContent = arrData[i].name;
    statusCharacter.textContent = 'Status: ' + arrData[i].status;
    speciesCharacter.textContent = 'Species: ' + arrData[i].species;
    genderCharacter.textContent = 'Gender: ' + arrData[i].gender;
    imageCharacter.src = arrData[i].image;
      
    character.appendChild(nameCharacter);
    character.appendChild(statusCharacter);
    character.appendChild(speciesCharacter);
    character.appendChild(genderCharacter);
    character.appendChild(imageCharacter);
   
     section.appendChild(character);
  }
}
showCharacters();

  const showSort = document.querySelector('.showSort');
  showSort.addEventListener('change', (event) => {
      const resultShowSort= document.querySelector('.resultShowSort');
      resultShowSort.textContent = `You order by ${event.target.value}`;
      //console.log(event.target.value)

      const result1 = sortData (arrData, event.target.value)
      showCharacters(result1);
      console.log(result1);
  });
/*
  mostrarOrdenar.addEventListener("change", function(e){
    console.log(e)
  });*/
  
  /*
  mostrarOrdenar.addEventListener("change", showSort);
    function showSort(event){
      console.log(event.target.value)
    }*/



  const showFilter = document.querySelector('.showFilter');

  showFilter.addEventListener('change', (event) => {
      const resultShowFilter= document.querySelector('.resultShowFilter');
      resultShowFilter.textContent = `You filter by ${event.target.value}`;
  
    console.log(event.target.value)
      const result1 = filterStatus (arrData, event.target.value)
        showCharacters(result1);
    //console.log(result1);
  }); 
  
 // console.log("Ordenar a-z", sortData(arr, "a-z"))
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
