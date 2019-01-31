require('../src/data.js');

const inputFilterData = [
  {'name': 'Aatrox', 'tags': ['Fighter', 'Tank'], 'stats': {'attackdamage': 60.376, 'attackdamageperlevel': 3.2}, 'title': 'the Darkin Blade'},
  { 'name': 'Ahri', 'tags': ['Mage', 'Assassin'], 'stats': {'attackdamage': 53.04, 'attackdamageperlevel': 3}, 'title': 'the Nine-Tailed Fox' },
  { 'name': 'Akali', 'tags': ['Assassin'], 'stats': {'attackdamage': 58.376, 'attackdamageperlevel': 3.2}, 'title': 'the Fist of Shadow' }
];

const outputFilterData = [
  { 'name': 'Ahri', 'tags': ['Mage', 'Assassin'], 'stats': {'attackdamage': 53.04, 'attackdamageperlevel': 3}, 'title': 'the Nine-Tailed Fox' },
  { 'name': 'Akali', 'tags': ['Assassin'], 'stats': {'attackdamage': 58.376, 'attackdamageperlevel': 3.2}, 'title': 'the Fist of Shadow' }
];

const inputSorDataAsc = [
  {'name': 'Aatrox', 'tags': ['Fighter', 'Tank'], 'stats': {'attackdamage': 60.376, 'attackdamageperlevel': 3.2}, 'title': 'the Darkin Blade'},
  {'name': 'Zyra', 'tags': ['Mage', 'Support'], 'stats': {'attackdamage': 53.376, 'attackdamageperlevel': 3.2}, 'title': 'Rise of the Thorns'},
  { 'name': 'Ahri', 'tags': ['Mage', 'Assassin'], 'stats': {'attackdamage': 53.04, 'attackdamageperlevel': 3}, 'title': 'the Nine-Tailed Fox' },
  { 'name': 'Akali', 'tags': ['Assassin'], 'stats': {'attackdamage': 58.376, 'attackdamageperlevel': 3.2}, 'title': 'the Fist of Shadow' },
  
];
const outputSortDataAsc = [
  {'name': 'Aatrox', 'tags': ['Fighter', 'Tank'], 'stats': {'attackdamage': 60.376, 'attackdamageperlevel': 3.2}, 'title': 'the Darkin Blade'},
  { 'name': 'Ahri', 'tags': ['Mage', 'Assassin'], 'stats': {'attackdamage': 53.04, 'attackdamageperlevel': 3}, 'title': 'the Nine-Tailed Fox' },
  { 'name': 'Akali', 'tags': ['Assassin'], 'stats': {'attackdamage': 58.376, 'attackdamageperlevel': 3.2}, 'title': 'the Fist of Shadow' },
  {'name': 'Zyra', 'tags': ['Mage', 'Support'], 'stats': {'attackdamage': 53.376, 'attackdamageperlevel': 3.2}, 'title': 'Rise of the Thorns'},
];

const inputSortDataEqual = [
  {'name': 'Aatrox', 'tags': ['Fighter', 'Tank'], 'stats': {'attackdamage': 60.376, 'attackdamageperlevel': 3.2}, 'title': 'the Darkin Blade'},
  { 'name': 'Ahri', 'tags': ['Mage', 'Assassin'], 'stats': {'attackdamage': 53.04, 'attackdamageperlevel': 3}, 'title': 'the Nine-Tailed Fox' },
  { 'name': 'Akali', 'tags': ['Assassin'], 'stats': {'attackdamage': 58.376, 'attackdamageperlevel': 3.2}, 'title': 'the Fist of Shadow' },
  {'name': 'Zyra', 'tags': ['Mage', 'Support'], 'stats': {'attackdamage': 53.376, 'attackdamageperlevel': 3.2}, 'title': 'Rise of the Thorns'},
  {'name': 'Zyra', 'tags': ['Mage', 'Support'], 'stats': {'attackdamage': 53.376, 'attackdamageperlevel': 3.2}, 'title': 'Rise of the Thorns'},
];

const inputSorDataDesc = [
  {'name': 'Aatrox', 'tags': ['Fighter', 'Tank'], 'stats': {'attackdamage': 60.376, 'attackdamageperlevel': 3.2}, 'title': 'the Darkin Blade'},
  { 'name': 'Ahri', 'tags': ['Mage', 'Assassin'], 'stats': {'attackdamage': 53.04, 'attackdamageperlevel': 3}, 'title': 'the Nine-Tailed Fox' },
  { 'name': 'Akali', 'tags': ['Assassin'], 'stats': {'attackdamage': 58.376, 'attackdamageperlevel': 3.2}, 'title': 'the Fist of Shadow' },
  {'name': 'Zyra', 'tags': ['Mage', 'Support'], 'stats': {'attackdamage': 53.376, 'attackdamageperlevel': 3.2}, 'title': 'Rise of the Thorns'},
];

const outputSortDataDesc = [
  { 'name': 'Zyra', 'tags': ['Mage', 'Support'], 'stats': {'attackdamage': 53.376, 'attackdamageperlevel': 3.2}, 'title': 'Rise of the Thorns' },
  { 'name': 'Akali', 'tags': ['Assassin'], 'stats': {'attackdamage': 58.376, 'attackdamageperlevel': 3.2}, 'title': 'the Fist of Shadow' },
  { 'name': 'Ahri', 'tags': ['Mage', 'Assassin'], 'stats': {'attackdamage': 53.04, 'attackdamageperlevel': 3}, 'title': 'the Nine-Tailed Fox' },
  {'name': 'Aatrox', 'tags': ['Fighter', 'Tank'], 'stats': {'attackdamage': 60.376, 'attackdamageperlevel': 3.2}, 'title': 'the Darkin Blade'},
];

const inputComputeStats = [
  {'name': 'Aatrox', 'tags': ['Fighter', 'Tank'], 'stats': {'attackdamage': 60.376, 'attackdamageperlevel': 3.2}, 'title': 'the Darkin Blade'},
  { 'name': 'Ahri', 'tags': ['Mage', 'Assassin'], 'stats': {'attackdamage': 53.04, 'attackdamageperlevel': 3}, 'title': 'the Nine-Tailed Fox' },
  { 'name': 'Akali', 'tags': ['Assassin'], 'stats': {'attackdamage': 58.376, 'attackdamageperlevel': 3.2}, 'title': 'the Fist of Shadow' }
];
const outputComputeStats = 60.376;

describe('lol', () => {
  it('is an object', () => {
    expect(typeof lol).toBe('object');
  });
});

describe('window.lol.filterData', () => {
  it('is a function', () => {
    expect(typeof window.lol.filterData).toBe('function');
  });
  it('Debería retornar un array de objetos con los campeones que sean del rol asesino', () => {
    expect(window.lol.filterData(inputFilterData, 'Assassin')).toEqual(outputFilterData);
  });
});

describe('window.lol.sortData', () => {
  it('SortData is a function', () => {
    expect(typeof window.lol.sortData).toBe('function');
  });
  it('debería retornar un nuevo array con los campeones de A-Z', () => {
    expect(window.lol.sortData(inputSorDataAsc, 'asc')).toEqual(outputSortDataAsc);
  });
  it('debería retornar un nuevo array con los campeones de Z-A', () => {
    expect(window.lol.sortData(inputSorDataDesc, 'desc')).toEqual(outputSortDataDesc);
  });
  it('debería retornar un nuevo array y no modificar el array original', () => {
    expect(window.lol.sortData(inputSorDataAsc, 'asc')).toEqual(inputSorDataAsc);
  });
  it('debería retornar un nuevo array con los campeones que sean iguales de A-Z', () => {
    expect(window.lol.sortData(inputSortDataEqual, 'asc')).toEqual(inputSortDataEqual);
  });
});

describe('widow.lol.computeStats', () => {
  it('computeStats is a function', () => {
    expect(typeof window.lol.computeStats).toBe('function');
  });
  it('debería retornar un nuevo array con los ataques', () => {
    expect(window.lol.computeStats(inputComputeStats)).toEqual(outputComputeStats);
  });
});