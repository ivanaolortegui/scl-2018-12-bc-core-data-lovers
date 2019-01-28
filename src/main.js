const containerList = document.getElementById('container-list');

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
        <img class="post-image" src="${champions.img}"/>
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
    

