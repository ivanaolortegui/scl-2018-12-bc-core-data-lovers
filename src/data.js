const filterData = (data, condition) => {
  const filterDataRoles = data.filter(element => (element.tags.indexOf(condition) !== -1));
  return filterDataRoles;
};

const sortData = (data, sortOrder) => {
  let newArrayData = [];
  for (let element in data) {
    newArrayData.push(Object.assign({}, data[element]));
  } 
  let sortArray = newArrayData.sort((firstElement, secundElement) => {   
    if (firstElement.name > secundElement.name) {
      return 1; 
    } else {
      return 0;
    }
  });
  if (sortOrder === 'asc') {
    return sortArray;
  } else {
    return sortArray.reverse();
  } 
};


window.lol = {
  filterData,
  sortData,
};