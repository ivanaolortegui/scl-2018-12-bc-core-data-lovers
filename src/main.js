const containerList = document.getElementById('container-list');
const selectRoles = document.getElementById('select-roles');
const selectOrder = document.getElementById('select-order');
const maxStats = document.getElementById('max-stats');


/*   const dataLol = LOL.data;
    
const listData = () => {
for(let data in dataLol) {
    const card = `
    <img class="post-image" src="${champions.img}" />
    <p> ${champions.name} </h1>
    <p> ${champions.tags} </p> 
    <p> ${champions.stats.attackdamage} </p>
    <p> ${champions.stats.hpregenperlevel} </p>
    `
    containerList.innerHTML += card;
}
}
listData();

 */
const dataLol = Object.values(LOL.data);
const listData = (data) => {
  let templateListOfCards = '';
  data.forEach((champions) => { 
    const card = `
        <img class="post-image" src="${champions.splash}"/>
        <p> ${champions.name} </h1>
        <p> ${champions.tags}</p> 
        <p> ${champions.stats.attackdamage}</p>
        <p> ${champions.stats.hpregenperlevel}</p>
        `;
    templateListOfCards += card;
  });
  containerList.innerHTML = templateListOfCards;
};
listData(dataLol);
    
const functionToFilter = () => {
  let condition = selectRoles.value;
  let filterDataRoles = window.lol.filterData(dataLol, condition);
  listData(filterDataRoles);
};
selectRoles.addEventListener('change', functionToFilter);

const functionToSort = () => {
  let sortOrden = selectOrder.value;
  let sortArray = window.lol.sortData(dataLol, sortOrden);
  listData(sortArray);
};
selectOrder.addEventListener('change', functionToSort);


const functionToStats = () => {
  let maxStatsAttack = window.lol.computeStats(functionToFilter);
  listData(maxStatsAttack);
};

maxStats.addEventListener(functionToFilter, functionToStats);


