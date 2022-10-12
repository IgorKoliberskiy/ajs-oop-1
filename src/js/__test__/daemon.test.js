import Character from '../daemon';

test('create Character ok', () => {
  const character = new Character('Player', 'Daemon');
  const result = {
    name: 'Player',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});