import { sortData, filterStatus, filterGender, filterSpecies } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

  const section = document.querySelector('section');
  const arrData = data.results;   
  //let valores = Object.values(arrData);
  
  function showCharacters(data){
    for (let i = 0; i<data.length; i++ ){
    //console.log(arr[i]); 
    //const dataCharacter = data[i];
    //console.log (dataCharacter.name)
    //const showName = dataCharacter.name
    const character = document.createElement('article');
    const nameCharacter = document.createElement ('name');
    const statusCharacter = document.createElement('p');
    const speciesCharacter = document.createElement('p');
    const genderCharacter = document.createElement('p');
    const imageCharacter= document.createElement('img')

    nameCharacter.textContent = data[i].name;
    statusCharacter.textContent = 'Status: ' + data[i].status;
    speciesCharacter.textContent = 'Species: ' + data[i].species;
    genderCharacter.textContent = 'Gender: ' + data[i].gender;
    imageCharacter.src = data[i].image;
      
    character.appendChild(nameCharacter);
    character.appendChild(statusCharacter);
    character.appendChild(speciesCharacter);
    character.appendChild(genderCharacter);
    character.appendChild(imageCharacter);
   
     section.appendChild(character);
  }
}
showCharacters(arrData);


 const showSort = document.querySelector('.showSort');
    showSort.addEventListener('change', (event) => {
     const x = document.querySelector('section');
      x.innerHTML = ""; 
      //  const resultShow = document.querySelector('.resultShow');
      //  resultShow.textContent = `You order by ${event.target.value}`;
      //  console.log(event.target.value)
       const result = sortData(arrData, event.target.value);
       showCharacters(result);
       //console.log(result);
  });



 const showFilterBySpecies = document.querySelector('.showFilterBySpecies');
 showFilterBySpecies.addEventListener('change', (event) => {
  const x = document.querySelector('section');
  x.innerHTML = ""; 
  const resultFilterSpecies = filterSpecies(arrData, event.target.value);
  showCharacters(resultFilterSpecies);
  // console.log("filter by", resultFilterSpecies);
});

const showFilterByGender = document.querySelector('.showFilterByGender');
showFilterByGender.addEventListener('change', (event) => {
 const x = document.querySelector('section');
 x.innerHTML = ""; 
 const resultFilterGender = filterGender(arrData, event.target.value);
 showCharacters(resultFilterGender);
  // console.log("filter by", resultFilterGender);
});

const showFilterByStatus = document.querySelector('.showFilterByStatus');
showFilterByStatus.addEventListener('change', (event) => {
 const x = document.querySelector('section');
 x.innerHTML = "";  
 const resultFilterStatus = filterStatus(arrData, event.target.value);
 showCharacters(resultFilterStatus);
  // console.log("filter by", resultFilterStatus);
});

/*
function computeStats(data){
  
};*/



/*
  mostrarOrdenar.addEventListener("change", function(e){
    console.log(e)
  });*/
  
  /*
  mostrarOrdenar.addEventListener("change", showSort);
    function showSort(event){
      console.log(event.target.value)
    }*/

 // console.log("Ordenar a-z", sortData(arr, "a-z"))
 //console.log("Ordenar z-a", sortData(arr, "z-a"))
  
//console.log("filter by status", filterStatus(arrData, "Dead"));
//console.log("filter by gender", filterGender(arrData, "Female"));
//console.log("filter by species", filterSpecies(arrData, "Human"));

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
