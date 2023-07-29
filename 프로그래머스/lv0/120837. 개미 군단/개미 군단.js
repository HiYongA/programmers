function solution(hp) {
  const generals = Math.floor(hp / 5);
  hp -= generals * 5;

  const privates = Math.floor(hp / 3);
  hp -= privates * 3;

  const workers = hp;

  return generals + privates + workers;
}