// estas funciones son de ejemplo
/*
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

export function sortData(data, sortOrder){

  const result = data.sort(function (e1,e2){
    if (e1.name < e2.name){
      return -1;
    }
    if (e1.name > e2.name){
      return 1;
    }
    return 0;
  });//console.log(data)
 

  if (sortOrder === "z-a"){
    return result.reverse();
    } else {
    return result;
  }  
};

export  function filterStatus(data, userCondition){

  const result = data.filter(d => d.status === userCondition);
  return result;
    
};

export function filterGender(data, userCondition){

  const result = data.filter(d => d.gender === userCondition);
  return result;
    
};

export function filterSpecies(data, userCondition){

  const result = data.filter(d => d.species === userCondition);
  return result;
    
};


