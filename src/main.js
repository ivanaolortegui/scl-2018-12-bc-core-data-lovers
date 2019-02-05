const containerList = document.getElementById('container-list');
const selectRoles = document.getElementById('select-roles');
const selectOrder = document.getElementById('select-order');
const btnSearch = document.getElementById('btn-search');

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
    let getInputValue = document.getElementById('text-search').value;
    let firstCharacterToUpperCase = getInputValue.substring(0, 1).toUpperCase() + getInputValue.substring(1).toLowerCase();
    let searchName = window.lol.filterData(dataArray, 'name', firstCharacterToUpperCase);
    listData(searchName);
  };
  btnSearch.addEventListener('click', functionToSearch);


  const functionToStats = (data) => {
    const maxStats = document.getElementById('max-stats');
    let maxStatsAttack = window.lol.computeStats(data);
    maxStats.innerHTML = `<p class= "article-details"> Maximo daño en ataque es: ${maxStatsAttack} </p>`;
  };
  functionToStats(dataArray);
}


