const containerList = document.getElementById('container-list');
const selectRoles = document.getElementById('select-roles');
const selectOrder = document.getElementById('select-order');

const dataLol = Object.values(LOL.data);
const listData = (data) => {
  let templateListOfCards = '';
  data.forEach((champions) => { 
    const card = `
        <article class="blog-card">
        <img class="post-image" src="${champions.splash}"/>
        <p class="tittle-name" > ${champions.name} </h1>
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
};
selectRoles.addEventListener('change', functionToFilter);

const functionToSort = () => {
  let sortOrden = selectOrder.value;
  let sortArray = window.lol.sortData(dataLol, sortOrden);
  listData(sortArray);
};
selectOrder.addEventListener('change', functionToSort);
