require('../src/data.js');

const input = [
  {'name': 'Aatrox', 'tags': ['Fighter', 'Tank'], 'stats': {'attackdamage': 60.376, 'attackdamageperlevel': 3.2}, 'title': 'the Darkin Blade'},
  { 'name': 'Ahri', 'tags': ['Mage', 'Assassin'], 'stats': {'attackdamage': 53.04, 'attackdamageperlevel': 3}, 'title': 'the Nine-Tailed Fox' },
  { 'name': 'Akali', 'tags': ['Assassin'], 'stats': {'attackdamage': 58.376, 'attackdamageperlevel': 3.2}, 'title': 'the Fist of Shadow' }
];

const input12 = [
  {'name': 'Aatrox', 'tags': ['Fighter', 'Tank'], 'stats': {'attackdamage': 60.376, 'attackdamageperlevel': 3.2}, 'title': 'the Darkin Blade'},
  { 'name': 'Ahri', 'tags': ['Mage', 'Assassin'], 'stats': {'attackdamage': 53.04, 'attackdamageperlevel': 3}, 'title': 'the Nine-Tailed Fox' },
  { 'name': 'Akali', 'tags': ['Assassin'], 'stats': {'attackdamage': 58.376, 'attackdamageperlevel': 3.2}, 'title': 'the Fist of Shadow' },
  {'name': 'Zyra', 'tags': ['Mage', 'Support'], 'stats': {'attackdamage': 53.376, 'attackdamageperlevel': 3.2}, 'title': 'Rise of the Thorns'},
  {'name': 'Zyra', 'tags': ['Mage', 'Support'], 'stats': {'attackdamage': 53.376, 'attackdamageperlevel': 3.2}, 'title': 'Rise of the Thorns'},
];

const input1 = [
  {'name': 'Aatrox', 'tags': ['Fighter', 'Tank'], 'stats': {'attackdamage': 60.376, 'attackdamageperlevel': 3.2}, 'title': 'the Darkin Blade'},
  { 'name': 'Ahri', 'tags': ['Mage', 'Assassin'], 'stats': {'attackdamage': 53.04, 'attackdamageperlevel': 3}, 'title': 'the Nine-Tailed Fox' },
  { 'name': 'Akali', 'tags': ['Assassin'], 'stats': {'attackdamage': 58.376, 'attackdamageperlevel': 3.2}, 'title': 'the Fist of Shadow' },
  {'name': 'Zyra', 'tags': ['Mage', 'Support'], 'stats': {'attackdamage': 53.376, 'attackdamageperlevel': 3.2}, 'title': 'Rise of the Thorns'},
];

const output2 = [
  { 'name': 'Ahri', 'tags': ['Mage', 'Assassin'], 'stats': {'attackdamage': 53.04, 'attackdamageperlevel': 3}, 'title': 'the Nine-Tailed Fox' },
  { 'name': 'Akali', 'tags': ['Assassin'], 'stats': {'attackdamage': 58.376, 'attackdamageperlevel': 3.2}, 'title': 'the Fist of Shadow' }
];

const output3 = [// { 'name': 'Zyra', 'tags': ['Mage', 'Support'], 'stats': {'attackdamage': 53.376, 'attackdamageperlevel': 3.2}, 'title': 'Rise of the Thorns' },
  { 'name': 'Zyra', 'tags': ['Mage', 'Support'], 'stats': {'attackdamage': 53.376, 'attackdamageperlevel': 3.2}, 'title': 'Rise of the Thorns' },
  { 'name': 'Akali', 'tags': ['Assassin'], 'stats': {'attackdamage': 58.376, 'attackdamageperlevel': 3.2}, 'title': 'the Fist of Shadow' },
  { 'name': 'Ahri', 'tags': ['Mage', 'Assassin'], 'stats': {'attackdamage': 53.04, 'attackdamageperlevel': 3}, 'title': 'the Nine-Tailed Fox' },
  {'name': 'Aatrox', 'tags': ['Fighter', 'Tank'], 'stats': {'attackdamage': 60.376, 'attackdamageperlevel': 3.2}, 'title': 'the Darkin Blade'},
];

const output4 = [
  {'name': 'Aatrox', 'tags': ['Fighter', 'Tank'], 'stats': {'attackdamage': 60.376, 'attackdamageperlevel': 3.2}, 'title': 'the Darkin Blade'},
  { 'name': 'Ahri', 'tags': ['Mage', 'Assassin'], 'stats': {'attackdamage': 53.04, 'attackdamageperlevel': 3}, 'title': 'the Nine-Tailed Fox' },
  { 'name': 'Akali', 'tags': ['Assassin'], 'stats': {'attackdamage': 58.376, 'attackdamageperlevel': 3.2}, 'title': 'the Fist of Shadow' },
  {'name': 'Zyra', 'tags': ['Mage', 'Support'], 'stats': {'attackdamage': 53.376, 'attackdamageperlevel': 3.2}, 'title': 'Rise of the Thorns'},
];
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
    expect(window.lol.filterData(input, 'Assassin')).toEqual(output2);
  });
});

describe('window.lol.sortData', () => {
  it('SortData is a function', () => {
    expect(typeof window.lol.sortData).toBe('function');
  });
  it('debería retornar un nuevo array con los campeones de A-Z', () => {
    expect(window.lol.sortData(input1, 'asc')).toEqual(output4);
  });
  it('debería retornar un nuevo array con los campeones de Z-A', () => {
    expect(window.lol.sortData(input1, 'desc')).toEqual(output3);
  });
  it('debería retornar un nuevo array y no modificar el array original', () => {
    expect(window.lol.sortData(input, 'asc')).toEqual(input);
  });
  it('debería retornar un nuevo array con los campeones que sean iguales de A-Z', () => {
    expect(window.lol.sortData(input12, 'asc')).toEqual(input12);
  });
});