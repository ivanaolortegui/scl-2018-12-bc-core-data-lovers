const containerList = document.getElementById('container-list');
const selectRoles = document.getElementById('select-roles');
const selectOrder = document.getElementById('select-order');
const btnSearch = document.getElementById('btn-search');

const dataLol = Object.values(LOL.data);
const listData = (data) => {
  let templateListOfCards = '';
  data.forEach((champions) => { 
    const card = `
        <article class="blog-card">
        <img class="post-image" src="${champions.splash}"/>
        <p class="tittle-name" > ${champions.name}  </p>
        <div class="article-details">
        <p> ${champions.tags}</p> 
        <p> ${champions.stats.attackdamage}</p>
        <p> ${champions.stats.hpregenperlevel}</p>
        </div>
        </article>
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
  functionToStats(filterDataRoles);
};
selectRoles.addEventListener('change', functionToFilter);


const functionToSort = () => {
  let sortOrden = selectOrder.value;
  let sortArray = window.lol.sortData(dataLol, sortOrden);
  listData(sortArray);
};
selectOrder.addEventListener('change', functionToSort); 

const functionToSearch = () => {
  let getInputValue = document.getElementById('text-search').value;
  let searchName = window.lol.searchData(dataLol, getInputValue);
  listData([searchName]);
};
btnSearch.addEventListener('click', functionToSearch);


const functionToStats = (data) => {
  const maxStats = document.getElementById('max-stats');
  let maxStatsAttack = window.lol.computeStats(data);
  maxStats.innerHTML = `<p class= "article-details"> Maximo daño en ataque es: ${maxStatsAttack} </p>`;
};
functionToStats(dataLol);


