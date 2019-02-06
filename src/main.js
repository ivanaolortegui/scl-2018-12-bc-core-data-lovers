const containerList = document.getElementById('container-list');
const selectRoles = document.getElementById('select-roles');
const selectOrder = document.getElementById('select-order');
const textSearch = document.getElementById('text-search');

fetch('https://raw.githubusercontent.com/ivanaolortegui/scl-2018-12-bc-core-data-lovers/master/src/data/lol/lol.json')
  .then(response => {  
    return response.json();
  })
  .then(data => {
    contentData(data.data);
  })
  .catch((error) => {
    alert(error.message);
  });
function contentData(dataLol) {
  const dataArray = Object.values(dataLol);
  const listData = (data) => {
    let templateListOfCards = '';
    data.forEach((champions) => { 
      const card = `
        <article class="blog-card">
        <img class="post-image" src="${champions.splash}"/>
        <h2 class="tittle-name" > ${champions.name}  </h2>
        <div class="article-details">
        <p> Rol: ${champions.tags} </p> 
        <p> Daño en Ataque: ${champions.stats.attackdamage}</p>
        </div>
        </article>
        `;
      templateListOfCards += card;
    });
    containerList.innerHTML = templateListOfCards;
  };
  listData(dataArray);
    
  const functionToFilter = () => {
    let condition = selectRoles.value;
    let filterDataRoles;  
    if (condition === '') {
      filterDataRoles = dataArray;
    } else {
      filterDataRoles = window.lol.filterData(dataArray, 'tags', condition);
    }
    listData(filterDataRoles);
    functionToStats(filterDataRoles);
  };
  selectRoles.addEventListener('change', functionToFilter);


  const functionToSort = () => {
    let sortOrden = selectOrder.value;
    let sortArray = window.lol.sortData(dataArray, sortOrden);
    listData(sortArray);
  };
  selectOrder.addEventListener('change', functionToSort);
    
  
  const functionToSearch = () => {
    let getInputValue = textSearch.value;
    let firstCharacterToUpperCase = getInputValue.substring(0, 1).toUpperCase() + getInputValue.substring(1).toLowerCase();
    let searchName = window.lol.filterData(dataArray, 'name', firstCharacterToUpperCase);
    listData(searchName);
  };
  textSearch.addEventListener('search', functionToSearch);


  const functionToStats = (data) => {
    const maxStatsDamageAttack = document.getElementById('max-stats-damage-attack');
    let maxStatsAttack = window.lol.computeStats(data);
    maxStatsDamageAttack.innerHTML = `<h2> Maximo daño en ataque es: ${maxStatsAttack} </h2>`;
  };
  functionToStats(dataArray);
}


