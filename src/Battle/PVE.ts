import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _person: Fighter;
  private _monsters: SimpleFighter[] | Fighter[];

  constructor(person: Fighter, monsters: SimpleFighter[] | Fighter[]) {
    super(person);
    super.fight();
    this._person = person;
    this._monsters = monsters;
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      while (this._person.lifePoints > 0 && monster.lifePoints > 0) {
        this._person.attack(monster);
        monster.attack(this._person);
      }
    });
    return super.fight();
  }
}

export default PVE;
