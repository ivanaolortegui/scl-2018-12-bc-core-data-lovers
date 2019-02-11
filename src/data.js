const filterData = (data, filterBy, condition) => {
  return data.filter(element => (element[filterBy].indexOf(condition) !== -1));
};

const sortData = (data, sortOrder) => {
  let newArrayData = [];
  for (let element in data) {
    newArrayData.push(Object.assign({}, data[element]));
  } 
  let sortArray = newArrayData.sort((firstElement, secondElement) => {   
    if (firstElement.name > secondElement.name) {
      return 1; 
    } else if (firstElement.name < secondElement.name) {
      return -1;
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

const computeStats = (data) => {
  const computesStatsAttack = data.map(element => element.stats.attackdamage);
  const maxStatsAttack = Math.max(...computesStatsAttack);
  return maxStatsAttack;
};

const searchData = (data, input) => {
  const searchName = data.find(element => (element.name.indexOf(input) !== -1));
  return searchName;
};

window.lol = {
  filterData,
  sortData,
  computeStats,
  searchData
};