require('../src/data.js');

const input = [
  {'name': 'Ahri', 'tags': ['Fighter', 'Tank'], 'stats': {'attackdamage': 60.376, 'attackdamageperlevel': 3.2}, 'title': 'the Darkin Blade'},
  { 'name': 'Ahri', 'tags': ['Mage', 'Assassin'], 'stats': {'attackdamage': 53.04, 'attackdamageperlevel': 3}, 'title': 'the Nine-Tailed Fox' },
  { 'name': 'Akali', 'tags': ['Assassin'], 'stats': {'attackdamage': 58.376, 'attackdamageperlevel': 3.2}, 'title': 'the Fist of Shadow' }
];


const output2 = [
  { 'name': 'Ahri', 'tags': ['Mage', 'Assassin'], 'stats': {'attackdamage': 53.04, 'attackdamageperlevel': 3}, 'title': 'the Nine-Tailed Fox' },
  { 'name': 'Akali', 'tags': ['Assassin'], 'stats': {'attackdamage': 58.376, 'attackdamageperlevel': 3.2}, 'title': 'the Fist of Shadow' }
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
