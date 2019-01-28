const filterData = (data, condition) => {
  const filterDataRoles = data.filter(element => (element.tags.indexOf(condition) !== -1));
  return filterDataRoles;
};

const sortData = (data, sortOrder) => {
  let newArrayData = [];
  for (let element in data) {
    newArrayData.push(Object.assign({}, data[element]));
  } 
  let sortDataFunction = newArrayData.sort((firstElement, secundElement) => {   
    if (firstElement > secundElement) {
      return 1; 
    } else if (firstElement < secundElement) {
      return -1;
    } else {
      return 0;
    }
  });
  if (sortOrder === 'asc') {
    return sortDataFunction;
  } else if (sortOrder === 'desc') {
    return sortDataFunction.reverse();
  } else {
    return 0;
  }
};


window.lol = {
  filterData,
  sortData,
};